#!/bin/bash

if [ "$NODE_ENV" = "local" ];
then
  exec node --inspect-brk=0.0.0.0 index.js
else
  exec node index.js
fi
