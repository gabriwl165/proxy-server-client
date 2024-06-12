import socket
import select

IP = '127.0.0.1'
PORT = 1234

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server_socket.bind((IP, PORT))
server_socket.listen()
sockets = [server_socket]


users = {}

def delivery_message(client_socket):
    message_length = client_socket.recv(10).decode('utf-8')
    if not message_length:
        client_socket.close()
        return
    message = client_socket.recv(int(message_length)).decode('utf-8')
    print(message_length, message)


def handle_message(client_socket):
    username_length = client_socket.recv(10).decode('utf-8')
    if not username_length:
        client_socket.close()
        return
    username = client_socket.recv(int(username_length)).decode('utf-8')
    message_length = client_socket.recv(10).decode('utf-8')
    message = client_socket.recv(int(message_length)).decode('utf-8')
    return f"{username} > {message}"


while True:
    read_sockets, write_sockets, expcetion_sockets = select.select(sockets, [], sockets)

    for sock in read_sockets:
        if sock == server_socket:
            conn, addr = sock.accept()
            print(f"Got connection from {conn.getpeername()}")
            sockets.append(conn)
            # users[sock] = username
            continue
        message = handle_message(sock)
        for client in sockets:
            if client in [sock, server_socket]:
                continue
            client.send(message.encode('utf-8'))

