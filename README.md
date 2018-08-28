# paprika-api-js

cayenne application api in nodejs

Branch | Build Status
--- | ---
devel | [![Build Status](https://travis-ci.org/hugocortes/paprika-api-js.svg?branch=devel)](https://travis-ci.org/hugocortes/paprika-api-js)

## Docker

This image is hosted on [Docker Hub](https://hub.docker.com/r/hugocortes/paprika-api-js/)

Running:
```sh
docker run -d \
  --name paprika-api-js \
  -e HOST=0.0.0.0 \
  -e PORT=3000 \
  -e LOG_LEVEL=debug \
  -e SECRET=random \
  -p 3000:3000 \
  hugocortes/paprika-api-js
```
