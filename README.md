## Compile protofiles

First of all, you must install dependecies in node application
```bash
sudo npm install
```

Now, you can build you own protobuf stub files, the problem is protoc don't compile for TS built-in, so, first you have
to compile for JS, and after compile for TS

```bash
../node_modules/.bin/grpc_tools_node_protoc --grpc_out=grpc_js:/home/gabs/Documents/projetos/proxy-server-client/client-server/protos --js_out=import_style=module,binary:/home/gabs/Documents/projetos/proxy-server-client/client-server/protos ping.proto 
```

Now with those files, you can compile for TS

```bash
protoc --plugin=protoc-gen-ts=/home/gabs/Documents/projetos/proxy-server-client/client-server/node_modules/.bin/protoc-gen-ts --ts_out=grpc_js:/home/gabs/Documents/projetos/proxy-server-client/client-server/src/protos ping.proto 
```
