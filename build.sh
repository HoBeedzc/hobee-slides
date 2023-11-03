#!/bin/bash

# 获取当前目录
work_dir=$(pwd)
echo "当前目录：$work_dir"

mkdir "$work_dir/dist"
cp "$work_dir/index-template.html" "$work_dir/dist/index.html"

# 遍历slides文件夹下的子文件夹
slides_dir="./slides"
html_fragments=""

for folder in "$slides_dir"/*/; do
  if [ -d "$folder" ]; then
    # 提取文件夹名
    folder_name=$(basename "$folder")
    folder_date=$(date '+%Y-%m-%d')

    output_dir="$work_dir/dist/$folder_name"
    rm -rf "$output_dir"
    
    # 执行slidev build命令
    slidev build "$work_dir/$folder/slides.md" -o $output_dir --base "/$folder_name/"
    
    # Generate the HTML fragment to insert
    folder_html="<li>"
    folder_html+="<a href=\"https://slide.hobee.me/$folder_name/\">"
    folder_html+="<mark>$folder_name</mark>"
    folder_html+="<small>Date: $folder_date</small>"
    folder_html+="</a>"
    folder_html+="</li>"

    html_fragments+="$folder_html"
  fi
done

# 使用Python脚本插入HTML片段
python <<EOF
with open("$work_dir/dist/index.html", "r") as file:
    contents = file.read()

contents = contents.replace("<ol>", r"""<ol>$html_fragments""")
with open("$work_dir/dist/index.html", "w") as file:
    file.write(contents)
EOF
