import React , {useState, useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux';
import axios from "axios";
import { ProductImg, ProductsContainer } from "./ProductsBody.style";
import { LOAD_PRODUCTS_REQUEST } from "../../reducers/product";

const ProductsBody=()=> {
  // const [productData , setProductData] = useState([]);
  const dispatch = useDispatch();
  const { mainProducts } = useSelector((state) => state.product);

  // useEffect(()=>{
  //     const apiUrl = 'dummy/product_body.json';
  //     axios.get(apiUrl)
  //     .then(({data})=>{
  //         const { product_content }= data;
  //         console.log(product_content);
  //         setProductData(product_content);
  //     }).catch(error=>console.log(error))
  // },[])

  useEffect(() => {
    console.log(1);
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
          <img src={`${product.image}`} alt="" />
          <div className="product_text">{product.text}</div>
          <div className="product_price">{product.price}</div>
        </div>
      ))}
    </ProductsContainer>
  );
}

export default ProductsBody
