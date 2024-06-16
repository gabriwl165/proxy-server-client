"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const readline_1 = __importDefault(require("readline"));
const scanner = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(query) {
    return new Promise((resolve) => scanner.question(query, (ans) => resolve(ans)));
}
let username = null;
function main(clientSocket) {
    return __awaiter(this, void 0, void 0, function* () {
        username = yield askQuestion('What is your username?');
        while (true) {
            const message = yield askQuestion(`${username} > `);
            const username_length = String(username.length).padEnd(10, ' ');
            const message_length = String(message.length).padEnd(10, ' ');
            clientSocket.write(username_length + String(username) + message_length + String(message));
        }
    });
}
const client = new net_1.default.Socket();
client.connect(1234, '127.0.0.1', () => {
    console.log('Connected');
    main(client);
});
client.on('data', (data) => {
    if (username) {
        console.log(`\n${data}`);
        process.stdout.write(`${username} > `);
    }
});
client.on('close', () => {
    console.log('Connection closed');
});
