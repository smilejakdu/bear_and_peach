FROM keymetrics/pm2:10-alpine
## pm2라는 모듈이 설치된 Docker를 이용하여 실행할 예정입니다.


EXPOSE 4000:4000
#외부 3천 포트와 내부 3천 포트를 연결합니다.

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

WORKDIR /app
#컨테이너의 app이라는 디렉토리가 워킹 디렉토리가 됩니다.

COPY ./package*.json ./

RUN npm i --production
# RUN npm i 

COPY ./server ./server

CMD ["sh", "-c", "NODE_ENV=$NODE_ENV node ./server/bin/www"]
# CMD ["sh", "-c", "NODE_ENV=production node ./server/bin/www"]