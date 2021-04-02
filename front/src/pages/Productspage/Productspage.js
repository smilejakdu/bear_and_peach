import React from 'react'
import ProductsBody from '../../components/ProductsBody/ProductsBody';
import { Body, BodyCenter } from "./Productspage.style";

const Productspage = () => {
    return (
      <Body>
        <BodyCenter>
          <ProductsBody/>
        </BodyCenter>
      </Body>
    );
}

export default Productspage;
