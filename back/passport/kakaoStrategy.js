const KakaoStrategy = require("passport-kakao").Strategy;
const usermodel = require("../models/user");
const db = require("../components/db");
const passport = require("passport");

module.exports = (passport) => {
  passport.use("kakao",new KakaoStrategy({
      clientID: "02a7eec164d42a2aa15d0d29f2d4e7b3",
      callbackURL: "http://localhost:4000/user/kakao/callback"
    },async (accessToken, refreshToken, profile, done) => {
      try {
        const { id ,  username , _json:{ kakao_account:{email}}} = profile;
        const connection = await db.beginTransaction();
        const userData = await usermodel.getKakaoList({ kakao_id: id });
        if (userData.length > 0){
          // user 가 존재하면 
          done(null , userData);
        }else{
          // user 가 존재하지 않으면 , 
          insertData = {
            nickname : username,
            kakao_id : id
          }
          const newUser = await usermodel.insert(connection , insertData);
          await db.commit(connection);
          done(null , newUser);
        }
      }catch(error){
        console.log("error : " , error);
        done(error);
      }
      // return done(null, profile._json);
    }));
}
