import React , {useState , useCallback} from 'react'
import {
  UserProfileBorder,
  UserContentImg,
  Like,
  Content,
  CommentCount,
  CommentUser,
  InputCustom
} from "./UserProfile.style";
import bear_img from "../../utils/images/bear.png"
import content_bear_img from "../../utils/images/bear2.png"
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import useInput from "../../hooks/useInput";
import {useSelector , useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Slick from 'react-slick';

const TodayBody=()=> {
  const history = useHistory();
  const [heart , setHeart] = useState(true);
  const [Likecount , setLikecount] = useState(10);
  const [content, setContent] = useState("쉽게 나갈 수 없는 지금 배경화면에서 봄을 만끽해봐요");
  const [commentCount , setCommentCount] = useState(71);
  const [commentUser , setCommentUser] = useState("a****7");

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      <UserProfileBorder>
        <div className="img_border">
          <img src={`${bear_img}`} alt="" height="50" width="50" />
        </div>
        <div className="user_info">
          <div className="nickname">라이언</div>
          <div className="date">2021.04.01</div>
        </div>
      </UserProfileBorder>
      <UserContentImg>
        <img src={`${content_bear_img}`} alt="" height="400" />
      </UserContentImg>
      {/* <Slick initialSlide={0} slidesToShow={1} slidesToScroll={1} dots={true}>

      </Slick> */}
      {heart ? <IoMdHeartEmpty /> : <IoMdHeart />}
      <Like>좋아요 {Likecount} 개</Like>
      <Content>{content}</Content>
      <CommentCount>댓글 {commentCount}개</CommentCount>
      <CommentUser>
        <div className="comment_user">{commentUser}</div>
        <div className="comment_content">배경화면 너무 귀여워!! 보자마자 좋아요눌렀어여</div>
      </CommentUser>
      <InputCustom
        type="text"
        readonly
        placeholder="댓글을 달아주세요"
        onClick={() => {
          history.push('/');
        }}
      />
    </div>
  );
}

export default TodayBody
