import React , {useState, useEffect} from 'react'
import axios from "axios";
import { ProductImg, ProductsContainer } from "./ProductsBody.style";

const ProductsBody=()=> {
    const [productData , setProductData] = useState([]);

    useEffect(()=>{
        const apiUrl = 'dummy/product_body.json';
        axios.get(apiUrl)
        .then(({data})=>{
            const { product_content }= data;
            console.log(product_content);
            setProductData(product_content);
        }).catch(error=>console.log(error))
    },[])

    return (
      <ProductsContainer>
        {productData.map((product) => (
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
