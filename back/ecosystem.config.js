module.exports = {
  apps: [
    {
      name: "node_server", // pm2로 실행한 프로세스 목록에서 이 애플리케이션의 이름으로 지정될 문자열
      // script: "./bin/www.js", // pm2로 실행될 파일 경로
      script: "./server/bin/www.js", // pm2로 실행될 파일 경로
      watch: true, // 파일이 변경되면 자동으로 재실행 (true || false)
      env: {
        NODE_ENV: "local", // 개발환경시 적용될 설정 지정
      },
      exec_mode: "cluster",
      env_production: {
        NODE_ENV: "production.js", // 배포환경시 적용될 설정 지정
      },
    },
  ],
};
