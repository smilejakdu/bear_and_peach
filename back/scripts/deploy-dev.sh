#!/bin/bash
AWS_PROFILE=aws-docker

DOCKER_MACHINE=bear-and-peach-machine
IMAGE_NAME=bear_and_peach
REGISTRY_URL=955251329813.dkr.ecr.ap-northeast-2.amazonaws.com/bear_and_peach:latest

eval $(docker-machine env --shell bash -u)
docker build -t ${IMAGE_NAME} .
docker tag ${IMAGE_NAME}:latest ${REGISTRY_URL}

aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin ${REGISTRY_URL}
# aws ecr get-login-password --region ap-northeast-2 --profile ${AWS_PROFILE} | docker login --username AWS --password-stdin
docker push ${REGISTRY_URL}

eval $(docker-machine env --shell bash ${DOCKER_MACHINE})
docker pull ${REGISTRY_URL}

docker-machine scp -d ./nginx/nginx.tmpl ${DOCKER_MACHINE}:/home/ubuntu
docker-machine scp -d ./docker-compose.yml ${DOCKER_MACHINE}:/home/ubuntu
docker-machine ssh ${DOCKER_MACHINE} "docker-compose -f docker-compose.yml -p server up -d --remove-orphans"

docker rmi -f $(docker images -f dangling=true -q)
eval $(docker-machine env --shell bash -u)
docker rmi -f $(docker images -f dangling=true -q)

