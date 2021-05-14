#!/bin/bash


ssh-add -k /Users/dujak/aws_key_pair/bear_and_peach.pem

docker-machine create --driver generic --generic-ip-address=3.35.131.149 --generic-ssh-user ubuntu bear-and-peach-machine

# 에러가 발생한다 . npm run deploy ==> error 확인 후  image , machine , aws 확인할것 