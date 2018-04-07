var PROTO_PATH = __dirname + '/protos/helloworld.proto';

var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;


// 实现
function sayHello(call, callback) {
  	callback(null, {message: 'Hello ' + call.request.name});
}


var server = new grpc.Server();
server.addService(hello_proto.Greeter.service, {sayHello: sayHello});
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();


