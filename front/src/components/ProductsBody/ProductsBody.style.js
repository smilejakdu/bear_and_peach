import styled from "styled-components";
import palette from "../../utils/palette"

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .product_content_body {
    margin: 10px auto;
    font-size: 12px;
  }

  .product_text {
    color: grey;
  }

  .product_price {
    font-weight: bold;
  }

  @media (max-width: 1370px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductImg = styled.div`
  img{
    width: 100%;
  }
`;

export { ProductImg, ProductsContainer };
