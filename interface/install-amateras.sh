#!/bin/bash

#sudo apt-get install autoconf automake libtool curl make g++ unzip git -y
#git clone https://github.com/protocolbuffers/protobuf.git

#cd protobuf
#git submodule update --init --recursive
#./autogen.sh
#./configure
#make -j2
#make check
#sudo make -j2 install
#sudo ldconfig

#git clone https://github.com/grpc/grpc-web

#cd grpc-web
#git checkout refs/tags/1.0.4
#sudo apt-get install libprotoc-dev
#sudo make -j2 install-plugin

#echo "#!/bin/bash\nexport GOROOT=$HOME/go\nexport GOPATH=$HOME/.go\nexport PATH=$PATH:$HOME/go/bin:$HOME/.go/bin">~/.bash_profile
#wget https://dl.google.com/go/go1.11.9.linux-amd64.tar.gz
#wget https://dl.google.com/go/go1.11.12.linux-arm64.tar.gz
#tar xvf go*.tar.gz
#cp -R go ~/go1.4
#cd go/src
# run.bash 48行目をコメントアウト？
#./all.bash
#cd ../..
#mv go ~/go
#rm -fr ~/go1.4

#sudo apt install -y nodejs npm
#sudo npm install n -g
#sudo n stable
#sudo apt purge -y nodejs npm
#exec $SHELL -l

#sudo npm install -g create-react-app
#sudo npm install -g @types/google-protobuf

#git clone https://github.com/golang/protobuf.git ~/.go/src/protobuf
#go get github.com/golang/protobuf/proto
#cd ~/.go/src/protobuf
#make -j2

#sudo apt install docker-compose -y
#sudo apt install docker.io -y

#curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
#echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
#sudo apt-get update && sudo apt-get install yarn

#git clone https://github.com/otanu/hello-grpc-web.git

#cd hello-grpc-web/client
#sudo yarn add grpc-web
#sudo yarn add @types/google-protobuf

#sed -i -e 's/localhost/xxx.xxx.xxx.xxx/g' src/App.tsx
#typescriptフラグ変更

#cd ../server
#go get -u github.com/golang/protobuf/proto

#cd ../
#./gen.sh
#sudo docker-compose up --build -d server proxy

#go get -u google.golang.org/grpc

#https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld
#cd grpc-web/net/grpc/gateway/examples/helloworld/
#docker build -t helloworld/envoy -f ./envoy.Dockerfile .
#docker run -d -p 8080:8080 -p 9901:9901 --network=host helloworld/envoy

#必要に応じて実行
#go get -u github.com/golang/protobuf/protoc-gen-go
#go get -u github.com/pilu/fresh

#git clone https://github.com/totsuan/amateras.git
