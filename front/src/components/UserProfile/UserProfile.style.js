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
    &:hover{
      cursor: pointer;
    }
  }
`;

const InputBorderCustom = styled.p`
  width: auto;
  display: flex;
  background-color: ${palette.gray[2]};
  border-radius: 5px 20px 20px 20px;
  padding: 4px;
  font-size:12px;
  margin-top: 10px;
  padding: 8px;
  margin-top: 10px;
  border-radius: 5px 20px 20px 20px;
  color:gray;
  &:hover {
    cursor: pointer;
  }
`;


export { UserProfileBorder, UserContentImg, Like, Content, CommentCount, CommentUser, InputBorderCustom };
