var PROTO_PATH = __dirname + '/protos/helloworld.proto';

var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;

var client = new hello_proto.Greeter('localhost:50051',grpc.credentials.createInsecure());

client.sayHello({name: 'word'}, function(err, response) {
	console.log('Greeting:', response.message);
});
