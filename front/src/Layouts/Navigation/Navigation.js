import React from "react";
import { withRouter } from "react-router-dom";
import { CategoryLinkItem, CategoryLink } from "./Navigation.style";

const categories = [
  {name: "today",text: "Today"},
  {name: "products",text: "Products"},
  {name: "mypage",text: "Mypage"}];

const Navigation = () => {
  // Header 부분
  return (
    <div>
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
    </div>
  );
};

export default withRouter(Navigation);
