## Compile protofiles

First of all, you must install dependecies in node application
```bash
sudo npm install
```

Now, you can build you own protobuf stub files

```bash
../../node_modules/.bin/grpc_tools_node_protoc --grpc_out=grpc_js:/home/gabs/Documents/projetos/proxy-server-client/client-server/src/protos --js_out=import_style=commonjs,binary:/home/gabs/Documents/projetos/proxy-server-client/client-server/src/protos ping.proto 
```