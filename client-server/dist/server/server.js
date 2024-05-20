"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerPing = void 0;
const ping_pb_js_1 = require("../../protos/ping_pb.js");
// grpc.handleUnaryCall<ping_pb.Ping, ping_pb.Pong>
class ServerPing {
    ping(call, callback) {
        const message = call.request.getMessage();
        console.log(`Got message: ${message}`);
        const response = new ping_pb_js_1.Pong();
        response.setMessage(`Response from Server: ${message}`);
        callback(null, response);
    }
}
exports.ServerPing = ServerPing;
