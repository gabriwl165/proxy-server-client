// package: 
// file: ping.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Ping extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): Ping;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ping.AsObject;
    static toObject(includeInstance: boolean, msg: Ping): Ping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ping;
    static deserializeBinaryFromReader(message: Ping, reader: jspb.BinaryReader): Ping;
}

export namespace Ping {
    export type AsObject = {
        message: string,
    }
}

export class Pong extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): Pong;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pong.AsObject;
    static toObject(includeInstance: boolean, msg: Pong): Pong.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pong, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pong;
    static deserializeBinaryFromReader(message: Pong, reader: jspb.BinaryReader): Pong;
}

export namespace Pong {
    export type AsObject = {
        message: string,
    }
}
