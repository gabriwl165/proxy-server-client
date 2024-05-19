import * as grpc from '@grpc/grpc-js'
// import { PingPongService } from 'protos/ping_grpc_pb'
import { ServerPing } from "./server.js";
import { ServerCredentials } from "@grpc/grpc-js";
import {PingPongService} from "../../protos/ping_grpc_pb.js";

const server = new grpc.Server()
server.addService(PingPongService, new ServerPing())
server.bindAsync(
    '0.0.0.0:50051',
    ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.log(err)
      }
      server.start()
      console.log(`listening on port ${port}`)
    }
  )

