import React from "react";
import { withRouter } from "react-router-dom";
import { CategoryLinkItem, CategoryLink, HeaderBody } from "./Navigation.style";

const categories = [
  {name: "today",text: "오늘"},
  {name: "products",text: "상품"},
  {name: "mypage",text: "마이페이지"}];

const Navigation = () => {
  return (
    <HeaderBody>
      <CategoryLink>
        {categories.map((c) => (
          <CategoryLinkItem
            key={c.name}
            exact={c.name}
            to={c.name === "Today"? "/today": `/${c.name}`}>
            {c.text}
          </CategoryLinkItem>
        ))}
      </CategoryLink>
    </HeaderBody>
  );
};

export default withRouter(Navigation);
