"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const ping_grpc_pb_1 = require("../../protos/ping_grpc_pb");
const grpc_js_1 = require("@grpc/grpc-js");
exports.client = new ping_grpc_pb_1.PingPongClient('localhost:50051', grpc_js_1.credentials.createInsecure());
