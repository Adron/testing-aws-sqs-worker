var
  AWS = require("aws-sdk"),
  awsRegion = "us-west-2",
  sqs = {},
  Hapi = require('hapi'),
  Good = require('good'),
  queueUri = 'https://sqs.us-west-2.amazonaws.com/621392439615/sample';

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
    server.log('Starting receive message.', '...a 200 response should be received.');

    reply();
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