#!/bin/bash

# Only use this in Dijkstra's ec-2 plz!

REPO_URL="https://github.com/Washington-University-Chinese-Geeks/WUCGweb.git"
LOCAL_DIR="/home/Dijkstra/WUCGweb"
OUTPUT_DIR="/var/www/out"

if [ -d "$LOCAL_DIR" ]; then
    echo "目录已经存在，拉取最新代码..."
    cd $LOCAL_DIR
    git pull origin main
else
    echo "目录不存在，克隆仓库..."
    git clone $REPO_URL $LOCAL_DIR
    cd $LOCAL_DIR
fi

echo "安装项目依赖..."
npm install

echo "构建 Next.js 项目..."
npm run build

if [ -d "$OUTPUT_DIR" ]; then
    echo "清空目标目录并复制新的构建文件..."
    sudo rm -rf $OUTPUT_DIR/*
else
    echo "创建目标目录..."
    sudo mkdir -p $OUTPUT_DIR
fi

sudo cp -r $LOCAL_DIR/out/* $OUTPUT_DIR

echo "重启 Nginx 服务..."
sudo systemctl restart nginx

echo "部署完成！"
