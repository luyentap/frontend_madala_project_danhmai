import React, { Component } from 'react';
import MenuAdmin from "./MenuAdmin"

export default class Customer extends Component {
  render() {
    return (
      <div>
        <div className="container gridpage">
        <MenuAdmin/>
        Customer
        </div>      
      </div>
    );
  }
}