#!/bin/bash

str=$(pm2 list | grep eqfr)
if [[ -n $str  ]]; then
	pm2 delete eqfr
fi
cd /root/eqfr
npm install
pm2 start "node app.js" --name eqfr 
