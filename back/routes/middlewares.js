const jwt = require("jsonwebtoken");

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인이 필요합니다.');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인하지 않은 사용자만 접근 가능합니다.');
  }
};

exports.verifyToken = (req, res, next) => {
  try {
    if(!req.headers){
      return res.status(419).json({code: 400,message: "does not exist headers"});
    }
    let decode = jwt.verify(req.headers.authentication, "jwt");
    console.log("middleware decode : " , decode);
    req.decoded = decode;
    next();
    // 인증 실패
  } catch (error) {
    // 유효기간이 초과된 경우
    if (error.name === "TokenExpiredError") {
      return res.status(419).json({code: 419,message: "expired token"});
    }
    // 토큰의 비밀키가 일치하지 않는 경우
    return res.status(401).json({code: 401,message: "invalid token"});
  }
};
