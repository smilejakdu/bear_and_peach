module.exports = {
  database: {
    host: "127.0.0.1",
    user: "root",
    password: "##tkakrnl12",
    database: "kakao_clone",
    port: "3306",
    connectionLimit: "10", // pool에 담을 수 있는 최대 connection 개수
    timezone: "utc",
    debug: ["ComQueryPacket", "RowDataPacket"],
  },
};
