// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ping_pb = require('./ping_pb.js');

function serialize_Ping(arg) {
  if (!(arg instanceof ping_pb.Ping)) {
    throw new Error('Expected argument of type Ping');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Ping(buffer_arg) {
  return ping_pb.Ping.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Pong(arg) {
  if (!(arg instanceof ping_pb.Pong)) {
    throw new Error('Expected argument of type Pong');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Pong(buffer_arg) {
  return ping_pb.Pong.deserializeBinary(new Uint8Array(buffer_arg));
}


var PingPongService = exports.PingPongService = {
  ping: {
    path: '/PingPong/ping',
    requestStream: false,
    responseStream: false,
    requestType: ping_pb.Ping,
    responseType: ping_pb.Pong,
    requestSerialize: serialize_Ping,
    requestDeserialize: deserialize_Ping,
    responseSerialize: serialize_Pong,
    responseDeserialize: deserialize_Pong,
  },
};

exports.PingPongClient = grpc.makeGenericClientConstructor(PingPongService);
