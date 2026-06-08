#/bin/bash

cd html
rm -r *
git clone https://github.com/ihatemys31f/bio.gi
cp -r bio/* .
rm -r bio
cd ..
echo done