import {PingPongClient} from '../../protos/ping_grpc_pb'
import {credentials} from "@grpc/grpc-js";

export const client = new PingPongClient(
    'localhost:50051',
    credentials.createInsecure()
)
