#!/bin/bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

ps_eqfr=$(pm2 list | grep eqfr)
if [[ -n $ps_eqfr  ]]; then
	pm2 delete eqfr
fi
cd /root/eqfr
npm install --no-audit --silent
pm2 start "node app.js" --name eqfr 
