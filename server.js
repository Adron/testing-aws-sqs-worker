/**
 * Created by adron on 10/29/14.
 * Description: This is the file that receives any incoming messages.
 */

var AWS = require('aws-sdk')
var Hapi = require('hapi');
var Good = require('good');

var server = new Hapi.Server(process.env.PORT || 3000);

server.route({
  method: 'POST',
  path: '/hi/{name}',
  handler: function (request, reply) {
    console.log('Hi ' + request.params.name );
    reply(request.params.name);
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