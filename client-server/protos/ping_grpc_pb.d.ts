// package: 
// file: ping.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ping_pb from "./ping_pb";

interface IPingPongService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    ping: IPingPongService_Iping;
}

interface IPingPongService_Iping extends grpc.MethodDefinition<ping_pb.Ping, ping_pb.Pong> {
    path: "/PingPong/ping";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ping_pb.Ping>;
    requestDeserialize: grpc.deserialize<ping_pb.Ping>;
    responseSerialize: grpc.serialize<ping_pb.Pong>;
    responseDeserialize: grpc.deserialize<ping_pb.Pong>;
}

export const PingPongService: IPingPongService;

export interface IPingPongServer extends grpc.UntypedServiceImplementation {
    ping: grpc.handleUnaryCall<ping_pb.Ping, ping_pb.Pong>;
}

export interface IPingPongClient {
    ping(request: ping_pb.Ping, callback: (error: grpc.ServiceError | null, response: ping_pb.Pong) => void): grpc.ClientUnaryCall;
    ping(request: ping_pb.Ping, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ping_pb.Pong) => void): grpc.ClientUnaryCall;
    ping(request: ping_pb.Ping, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ping_pb.Pong) => void): grpc.ClientUnaryCall;
}

export class PingPongClient extends grpc.Client implements IPingPongClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public ping(request: ping_pb.Ping, callback: (error: grpc.ServiceError | null, response: ping_pb.Pong) => void): grpc.ClientUnaryCall;
    public ping(request: ping_pb.Ping, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ping_pb.Pong) => void): grpc.ClientUnaryCall;
    public ping(request: ping_pb.Ping, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ping_pb.Pong) => void): grpc.ClientUnaryCall;
}
