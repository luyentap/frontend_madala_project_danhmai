import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {loadState} from "../../common/LocalSave";
import OrderService from "../../service/OrderService";

const style = {
  button: {
    padding: "10px",
    backgroundColor: "green",
    color: "white",
    marginRight: "5px"
  }
}
export default class ContactForm extends Component {
  orderProduct = (e) => {
    //lấy giá trị input thông tin người dùng
    let name = this.getName.value;
    let phone = this.getPhoneNumber.value;
    let address = this.getAddress.value;

    //get value (cart+total) in localstorage -->init reducer
    let addedItems = loadState("shoppingCart") || [];

    let data = {"cart": addedItems, personal: {name, phone, address}};
    OrderService.postOrder(data);
    // this.getName.value = "";
    localStorage.clear();
  }

  render() {
    return (
      <div className="register">
        <form className="form" onSubmit={(e)=>e.preventDefault()}>
          <h3 className="form__title">THÔNG TIN CÁ NHÂN</h3>
          <div className="form-element">
            <label>Họ và Tên<span className="upper-text">*</span></label>
            <input className="form-element__name" ref={(input) => this.getName = input}/>
          </div>
          <div className="form-element">
            <label>Địa chỉ<span className="upper-text">*</span></label>
            <input className="form-element__address" ref={(input) => this.getAddress = input}/>
          </div>
          <div className="form-element">
            <label>Điện thoại<span className="upper-text">*</span></label>
            <input className="form-element__phone" ref={(input) => this.getPhoneNumber = input}/>
          </div>
          <div className="form-element form-element__button">
            <Link onClick={this.orderProduct} to="/sucess" style={style.button}>Gửi</Link>
            <Link to="/cart" style={style.button}>Quay về</Link>
          </div>
        </form>
      </div>
    );
  }

}
