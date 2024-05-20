import {client} from "./client";
import {Ping} from '../../protos/ping_pb'

const ping = new Ping()
ping.setMessage("Request From Client")

setInterval(() => {
    console.log('Sending Request')
    client.ping(ping, (err, res) => {
        if (err) {
            console.error(err)
        }
        console.log(res.getMessage())
    })
}, 2000)
