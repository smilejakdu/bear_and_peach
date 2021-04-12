const express = require("express");
const router = express.Router();
const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;
const KakaoId= require("../components/kaka_key");
const model = require("../models/user");

passport.use(
  "kakao",
  new KakaoStrategy(
    {
      clientID: "02a7eec164d42a2aa15d0d29f2d4e7b3",
      callbackURL: "http://localhost:4000/auth/kakao/callback", // 위에서 설정한 Redirect URI
    },
    async (accessToken, refreshToken, profile, done) => {
      //console.log(profile);
      console.log(accessToken);
      console.log("refreshToken : ", refreshToken);
      const { id ,  username , _json:{ kakao_account:{email}}} = profile;
      console.log("id : " , id);
      console.log("username : " , username);
      console.log("email : " , email);
      try {
        const userData = await model.getKakaoList({ kakao_id: id });
        console.log("getKakaoList 25 : ", userData);
        if (result.length > 0){
          console.log("user 데이터가 있다");
          console.log("result : ", result);
        }else{
          console.log("user 데이터가 없다");
        }
      }catch(error){
        console.log("error : " , error);
      }
      return done(null, profile._json);
    }
  )
);

// passport 파일로 쪼갠다 ? 
// 로그인했을때 넘어오는부분 
passport.serializeUser(function (user, done) {
  console.log('user 27 :',user)
  done(null, user)
})

passport.deserializeUser(function (obj, done) {
  console.log('obj',obj)
  done(null, obj)
})

router.get("/kakao", passport.authenticate("kakao"));

// router.get("",
// passport.authenticate("kakao", {
//     failureRedirect: "/",
//   }),
//   (res, req) => {
//     console.log("res : " , res);
//     res.redirect("/auth");
//   }
// );

router.get('/kakao/callback', passport.authenticate('kakao'), function (req, res) {
  // 로그인 시작시 state 값을 받을 수 있음
  console.log('req : ',req.user)
  // console.log('res : ',res)
  res.send('user : ' + JSON.stringify(req.user))
})

module.exports = router;
