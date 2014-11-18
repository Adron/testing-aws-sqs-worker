var
  AWS = require("aws-sdk"),
  awsRegion = "us-west-2",
  sqs = {},
  Hapi = require('hapi'),
  Good = require('good'),
  queueUri = 'https://sqs.us-west-2.amazonaws.com/621392439615/a_sample';

var server = new Hapi.Server(process.env.PORT || 3000);


server.route({
  method: 'POST',
  path: '/hi',
  handler: function (request, reply) {


    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      region: awsRegion
    });
    sqs = new AWS.SQS();

    server.log('response: ', request.payload.name);
    server.log('Starting receive message.');

    sqs.receiveMessage({
      QueueUrl: queueUri,
      MaxNumberOfMessages: 1, // how many messages to retrieve?
      VisibilityTimeout: 15, // how long to lock the job.
      WaitTimeSeconds: 3 // how long to wait for message.
    }, function(err, data) {
      // If there are any messages to get
      if (data.Messages) {
        // Getting first message, which there would only be one at this point.
        var message = data.Messages[0],
          body = JSON.parse(message.Body);

        server.log('body: ' + body);

        // Remove from queue.
        sqs.deleteMessage({
          QueueUrl: queueUri,
          ReceiptHandle: message.ReceiptHandle
        }, function (err, data) {
          err && console.log(err);
        });
      }
    });

    reply('Hello response' + request.payload.name);
  }
});

server.pack.register(Good, function (err) {
  if (err) {
    throw err;
  }

  server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});