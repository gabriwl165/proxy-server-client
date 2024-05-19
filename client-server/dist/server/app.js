"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __importStar(require("@grpc/grpc-js"));
// import { PingPongService } from 'protos/ping_grpc_pb'
const server_js_1 = require("./server.js");
const grpc_js_1 = require("@grpc/grpc-js");
const ping_grpc_pb_js_1 = require("../../protos/ping_grpc_pb.js");
const server = new grpc.Server();
server.addService(ping_grpc_pb_js_1.PingPongService, new server_js_1.ServerPing());
server.bindAsync('0.0.0.0:50051', grpc_js_1.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.log(err);
    }
    server.start();
    console.log(`listening on port ${port}`);
});
