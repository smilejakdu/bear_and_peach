var express = require("express");
var router = express.Router();

const db = require("../components/db");
const model = require("../models/user");
const deliv_info_model = require("../models/deliv_info");
const my_active_model = require("../models/my_active");
const crypto = require("../components/crypto");
const { isNotLoggedIn, isLoggedIn, verifyToken } = require("./middlewares");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const secretKey = require("../config/secret_key");

router.post("/signup", async function (req, res, next) {
  const body = req.body; // {name:asdf,price:200}
  console.log("body : ", body);

  try {
    const connection = await db.beginTransaction();
    const deliv_info = body.deliv_info;
    delete body.deliv_info;
    // user id duplicate check
    const usersResult = await model.getList({ nickname: body.nickname });

    if (usersResult.length > 0) {
      throw { status: 409, errorMessage: "Duplicate user id" };
    }

    const { salt, encodedPw } = crypto.createPasswordPbkdf2(body.password); 
    console.log("salt length : ", salt.length);
    console.log("encodedPw length : ", encodedPw.length);
    body.salt = salt;
    body.password = encodedPw;
    const result = await model.insert(connection, body);
    // get userId
    const user_id = result.insertId;
    if (deliv_info && deliv_info.length > 0) {
      for (let i = 0; i < deliv_info.length; i++) {
        let diObj = deliv_info[i];
        diObj.user_id = user_id;
        await deliv_info_model.insert(connection, diObj);
      }
    }

    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.post("/signin", async function (req, res, next) {
  const body = req.body; 
  console.log("body : ", body); // body :  { nickname: 'nickname_test', password: '123' }
  try {
    const result = await model.getList({ nickname: body.nickname }); // [{ user_id:test1, user_pwd:123}]
    if (result.length == 0) {
      throw { status: 404, errorMessage: "User not found" };
    }
    let newResult = result[0];
    console.log("newResult  :" , newResult);
    //newResult.user_pwd : 가입시 입력한 비밀번호 + db에 저장된 salt
    const encodedPw = crypto.getPasswordPbkdf2(body.password, newResult.salt);
    //encodedPw : 로그인시 입력한 비밀번호 + db에 저장된 salt
    console.log("encodedPw : " ,encodedPw);
    if (newResult.password === encodedPw) {
      console.log("Authentication succeed");
    } else {
      throw { status: 401, errorMessage: "Authentication failed" };
    }
    // jwt token 생성
    const token = jwt.sign({ user_idx: newResult.user_idx },"jwt");
    newResult.token = token

    delete newResult.password;
    delete newResult.salt;
    res.json({ result: newResult });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.get("/", verifyToken, async function (req, res, next) {
  try {
    const { user_idx } = req.decoded
    const result = await model.getList({ user_idx: user_idx });
    const diResult = await deliv_info_model.getList({ user_idx: user_idx });
    const myActiveResult = await my_active_model.getList({ user_idx: user_idx });
    result[0].deliv_info = diResult;
    result[0].my_active = myActiveResult;
    console.log(result);
    delete result[0].password;
    delete result[0].salt;
    res.status(200).json({ result: result[0] });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

// app.use("/user", usersRouter); // 127.0.0.1:4000/user/kakao
router.get("/kakao", passport.authenticate("kakao"));
router.get("/kakao/callback",passport.authenticate("kakao", {
  failureRedirect: "/",
  session: false
}),(req, res) => {
  let newResult = req.user;
  const token = jwt.sign({ user_idx: newResult[0].user_idx }, "jwt");
  newResult[0].token = token;
  res.status(200).json({ result: newResult });
});

// auth token test 
  router.get("/auth", verifyToken , function (req, res, next) {
  console.log("start auth");
  console.log("auth req :" , req.decoded);
  model
  console.log("end auth : ");
  return res.status(200).send("auth token 테스트입니다.")
});

module.exports = router;
