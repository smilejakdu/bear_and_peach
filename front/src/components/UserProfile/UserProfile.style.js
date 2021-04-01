import styled from "styled-components";
import palette from "../../utils/palette";

const UserProfileBorder = styled.div`
  display: flex;
  .img_border {
    display: flex;
  }
  img {
    border-radius: 20px;
    display: inline;
    }
  .user_info {
    margin-left:10px;

    .nickname {
      font-weight: bold;
      margin-bottom:5px;
      font-size: 15px;
      color: black;
    }

    .date {
      color: blue;
      margin-bottom:5px;
      display: inline;
      font-size: 15px;
    }
  }
`;

const UserContentImg = styled.div`
  img {
    width:100%;
    border-radius:10px;
  }
`;

const Like = styled.div`
  color:black;
  display:block;
  font-size:13px;
  font-weight:bold;
`;

const Content = styled.div`
  color : black;
  display: block;
  font-size:13px;
  margin : 10px 0;
`;

const CommentCount = styled.div`
  color : gray;
  font-size:13px;
  margin: 10px 0;
`

const CommentUser = styled.div`
  display: flex;

  .comment_user {
    color: black;
    font-weight: bold;
    font-size: 12px;
    margin-right:10px;
  }
  .comment_content {
    color: gray;
    font-size: 12px;
  }
`;

export {
  UserProfileBorder,
  UserContentImg,
  Like,
  Content,
  CommentCount,
  CommentUser,
};
