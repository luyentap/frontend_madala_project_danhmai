import React, { Component } from 'react';
import MenuAdmin from "./MenuAdmin"
import ProductItem from "./ProductItem"

export default class ProductAdmin extends Component {
  render() {
    return (
        <div>
        <div className="container gridpage">
      <MenuAdmin/>
      <ProductItem/>
      </div>  
    </div>
    );
  }
}