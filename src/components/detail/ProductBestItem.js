import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class ProductBestItem extends Component{
  render() {
    const {id,img,name,price,numberBuy} = this.props;
    const link=`/detail/${id}`
    return (
      <div className="product-best__item">
        <Link to={link}>
          <img className="product-best__item__img" src={img}/>
        </Link>
        <div className="product-best__item__description"><p>{name}</p>
          <p><i className="fa fa-heart"></i><i className="fa fa-heart"></i><i className="fa fa-heart"></i><i
            className="fa fa-heart"></i><i className="fa fa-heart"></i><span>({numberBuy} lượt mua)</span></p>
          <p>{price}</p></div>
      </div>
    );
  }
}
