import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Table from "../../containers/cart/Table";
import Intro from "./Intro";

const style = {
  buttonContine:{
    backgroundColor:"black",
    marginRight:"10px",
    padding:"10px",
    color:"white"
  },
  buttonOrder:{
    backgroundColor:"green",
    marginRight:"10px",
    padding:"10px",
    color:"white"
  },
  buttonDelete:{
    backgroundColor:"green",
    marginRight:"10px",
    padding:"12px",
    color:"white"
  }
}

export default class PageCart extends Component {
  render() {
    return (
      <div className="container">
        <Intro/>
        <div>
          <div className="shopping-cart">
            <Table/>
            <div className="shopping-cart__button">
              <Link to="/list" style={style.buttonContine}>Tiếp tục mua hàng</Link>
              <button onClick="clearCart();" style={style.buttonDelete}>Xóa</button>
              <Link to="/order" style={style.buttonOrder}>Điền thông tin</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
