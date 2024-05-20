import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from "@grpc/grpc-js";
import { IPingPongServer } from "../../protos/ping_grpc_pb.js";
import { Ping, Pong } from "../../protos/ping_pb.js";

// grpc.handleUnaryCall<ping_pb.Ping, ping_pb.Pong>

export class ServerPing implements IPingPongServer {
    ping(call: ServerUnaryCall<Ping, Pong>, callback: sendUnaryData<Pong>) {
        const message = call.request.getMessage()
        console.log(`Got message: ${message}`)
        const response = new Pong()
        response.setMessage(`Response from Server: ${message}`)
        callback(null, response)
    }

    [name: string]: UntypedHandleCall;
}
