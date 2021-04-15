import React , {useState, useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux';
import axios from "axios";
import { ProductImg, ProductsContainer } from "./ProductsBody.style";
import { LOAD_PRODUCTS_REQUEST } from "../../reducers/product";

const ProductsBody=()=> {
  const dispatch = useDispatch();
  const { mainProducts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch({
      type : LOAD_PRODUCTS_REQUEST,
    });
  },[]);
  useEffect(() =>{
    console.log(mainProducts);
  })

  return (
    <ProductsContainer>
      {mainProducts.map((product) => (
        <div key={product.id} className="product_content_body">
          <ProductImg>
            <img src={`${product.image}`} alt="" height="400" />
          </ProductImg>
          <div className="product_text">{product.text}</div>
          <div className="product_price">{product.price}</div>
        </div>
      ))}
    </ProductsContainer>
  );
}

export default ProductsBody
