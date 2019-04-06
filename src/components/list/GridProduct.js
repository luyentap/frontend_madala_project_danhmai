import React, {Component} from 'react'


export default class GridProduct extends Component{
  render() {
    const {id,img,name,brand,price_new,price_old} = this.props;
    return (
      <div class="grid-content__body">
        <div class="product">
              <img src={img}/>
              <div class="product__detail">
                <div class="product__detail__type">{brand}</div>
                <div class="product__detail__name">{name}</div>
                {/* <img src={require('../img/home/Shape 16 2.png')}/> */}
                <div class="product__detail__price">
                    <div class="product__detail__price__new">{price_new}</div>
                    <div class="product__detail__price__old">{price_old}</div>
                </div>
              </div>
              <div className="product__detail__button">
            <button>MUA HÀNG</button>
            <button><i className="fa fa-heart"></i></button>
            <button><i className="fa fa-refresh"></i></button>
          </div>
          </div>
        </div>
    );
  }
}
