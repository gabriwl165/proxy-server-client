
// grpc.handleUnaryCall<ping_pb.Ping, ping_pb.Pong>
import {Pong} from "../../protos/ping_pb.js";

export class ServerPing {
    ping(call, callback) {
        const response = new Pong();
        response.setMessage(`Response from Server: ${call.request.getMessage()}`);
        callback(null, response);
    }
}
