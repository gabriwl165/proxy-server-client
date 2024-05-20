"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const ping_pb_1 = require("../../protos/ping_pb");
const ping = new ping_pb_1.Ping();
ping.setMessage("Request From Client");
setInterval(() => {
    console.log('Sending Request');
    client_1.client.ping(ping, (err, res) => {
        if (err) {
            console.error(err);
        }
        console.log(res.getMessage());
    });
}, 2000);
