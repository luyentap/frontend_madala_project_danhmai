import React,{Component} from 'react';
import {Link} from "react-router-dom";

export default class ItemCartMenu extends Component{
  render() {
    const {id,img,name,price,clickRemove} = this.props;
    return (
          <div className="cart__item">
            <img className="cart__item__img" src={img}/>
            <div className="cart__item__description">
              <p className="cart__item__description__name">{name}</p>
              <p className="cart__item__description__price">{price}<sup>đ</sup></p>
            </div>
            <button value={id} onClick={clickRemove}>x</button>
          </div>
    );
  }

}
