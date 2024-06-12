import net from 'net'
import readline from "readline";

const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function askQuestion(query: string): Promise<String> {
    return new Promise((resolve) => scanner.question(query, (ans) => resolve(ans)))
}

let username: any | string = null

async function main(clientSocket: net.Socket) {
    username = await askQuestion('What is your username?')
    while (true) {
        const message = await askQuestion(`${username} > `)
        const username_length = String(username.length).padEnd(10, ' ')
        const message_length = String(message.length).padEnd(10, ' ')
        clientSocket.write(username_length + String(username) + message_length + String(message))
    }
}

const client = new net.Socket()
client.connect(1234, '127.0.0.1', () => {
    console.log('Connected')
    main(client)
})

client.on('data', (data) => {
    if (username) {
        console.log(`\n${data}`)
        process.stdout.write(`${username} > `)
    }
})

client.on('close', () => {
    console.log('Connection closed')
})