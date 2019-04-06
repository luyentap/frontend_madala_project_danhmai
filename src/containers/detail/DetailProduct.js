import React,{Component} from 'react';
import {connect} from "react-redux";
import {addToCart} from "../../actions/ActionCreaters";

class DetailProduct extends Component{

  render() {
    const {id,products,addToCart} = this.props;
    let product=products[id-1];
    return (
      <div className="detail-product">
        <div className="detail-img">
          <div className="detail-img__list"><img src="../img/detail/03_Detail_03.jpg"/><img
            src="../img/detail/Layer 80.jpg"/><img src="../img/detail/Layer 82.jpg"/><img
            src="../img/detail/Layer 83.jpg"/><img src="../img/detail/Layer 84.jpg"/><img
            src="../img/detail/03_Detail_07.jpg"/></div>
          <img className="detail-img__product" src={product && product.img}/></div>
        <div className="detail-description"><h5 className="detail-description__name">{product && product.name}</h5>
          <p className="detail-description__code">{product && product.brand}</p>
          <p className="detail-description__price">{product && product.new_price}đ<span
            className="detail-description__price-old"> {product && product.old_price}đ</span>
          </p>
          <p className="detail-description__text">{product&& product.content}
            món đồ yêu thích.</p>
          <form className="detail-description__form" onSubmit={event => event.preventDefault()}>
            <div><label>TÔNG MÀU</label><select>
              {product&&product.color.map(item=><option>{item}</option>)}
            </select></div>
            <div><label>Size</label><select>
              {product&&product.size.map(item=><option>{item}</option>)}
            </select></div>
            <div className="product__detail__button">
              <button onClick={(e)=>this.props.addToCart(id)}>MUA HÀNG</button>
              <button><i className="fa fa-heart"></i></button>
              <button><i className="fa fa-refresh"></i></button>
            </div>
          </form>
          <div className="detail-description__social"><p>Shopping &<span>Returns</span></p>
            <button className="cl-white"><i className="fa fa-facebook"></i> like</button>
            <div className="detail-description__social__number">
              <div className="arrow-message">
                <div className="arrow">
                  <div className="outer"></div>
                  <div className="inner"></div>
                </div>
                <div className="message-body">0</div>
              </div>
            </div>
            <button><i className="fa fa-twitter cl_blue-sky"></i> Twitter</button>
            <div className="detail-description__social__number">
              <div className="arrow-message">
                <div className="arrow">
                  <div className="outer"></div>
                  <div className="inner"></div>
                </div>
                <div className="message-body">0</div>
              </div>
            </div>
            <button><i className="fa fa-google"></i>+1</button>
            <div className="detail-description__social__number">
              <div className="arrow-message">
                <div className="arrow">
                  <div className="outer"></div>
                  <div className="inner"></div>
                </div>
                <div className="message-body">0</div>
              </div>
            </div>
            <button><i className="fa fa-linkedin"></i>Share</button>
            <button><i className="fa fa-pinterest"></i>Pin it</button>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    products: state.products.products_hot,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addToCart:(id)=>dispatch(addToCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct)
