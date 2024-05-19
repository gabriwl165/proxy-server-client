import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from "@grpc/grpc-js";
import { IPingPongServer } from "../../protos/ping_grpc_pb.js";
import { Ping, Pong } from "../../protos/ping_pb.js";

// grpc.handleUnaryCall<ping_pb.Ping, ping_pb.Pong>

export class ServerPing implements IPingPongServer {
    ping(call: ServerUnaryCall<Ping, Pong>, callback: sendUnaryData<Pong>) {
        const response = new Pong()
        response.setMessage(`Response from Server: ${call.request.getMessage()}`)
        callback(null, response)
    }

    [name: string]: UntypedHandleCall;
}
