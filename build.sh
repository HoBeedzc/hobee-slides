#!/bin/bash

# 获取当前目录
work_dir=$(pwd)
echo "当前目录：$work_dir"

# 遍历slides文件夹下的子文件夹
slides_dir="./slides"
for folder in "$slides_dir"/*/; do
  if [ -d "$folder" ]; then
    # 提取文件夹名
    folder_name=$(basename "$folder")

    output_dir="$work_dir/dist/$folder_name"
    rm -rf "$output_dir"
    
    # 执行slidev build命令
    slidev build "$work_dir/$folder/slides.md" -o $output_dir --base "/$folder_name/"
  fi
done
