import styled from "styled-components";
import palette from "../../utils/palette";

const UserProfileBorder = styled.div`
  border: 1px solid blue;
  display: flex;
  .img_border {
    display: flex;
    border: 1px solid red;
  }
  img {
    border-radius: 20px;
    display: inline;
    }
  .user_info {
    border: 1px solid blue;
    margin-left:10px;

    .nickname {
      font-weight: bold;
      border: 1px solid blue;
      margin-bottom:5px;
      font-size: 15px;
      color: black;
    }

    .date {
      color: gray;
      border: 1px solid blue;
      margin-bottom:5px;
      display: inline;
      font-size: 15px;
    }
  }
`;

export { UserProfileBorder };
