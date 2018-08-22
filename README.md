# paprika-api-js

cayenne application api in nodejs

Branch | Build Status
--- | ---
devel | [![Build Status](https://travis-ci.org/hugocortes/paprika-api-js.svg?branch=devel)](https://travis-ci.org/hugocortes/paprika-api-js)

# Docker

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

# Kubernetes

Prereqs:
* Install [Minikube](https://kubernetes.io/docs/setup/minikube/).
* Install [Skaffold](https://github.com/GoogleContainerTools/skaffold#installation)
* Install [Kustomize](https://github.com/kubernetes-sigs/kustomize/blob/master/INSTALL.md)

1. `minikube start`
2. `skaffold dev`
3. Navigate to `http://192.168.99.100:31000/status`
4. While `skaffold` is running, any changes made will rebuild
5. `kubectl proxy`
