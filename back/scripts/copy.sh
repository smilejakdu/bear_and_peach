# 서버 접속
ssh -i "bear_and_peach.pem" ubuntu@ec2-3-35-131-149.ap-northeast-2.compute.amazonaws.com

# 서버 실행
sudo pm2 start ecosystem.config.js --env production

http://ec2-54-180-92-8.ap-northeast-2.compute.amazonaws.com
= localhost:3000

