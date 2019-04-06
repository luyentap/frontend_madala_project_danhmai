import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToCart, removeItem} from "../../actions/ActionCreaters";
import ItemCartMenu from "../../components/header/ItemCartMenu";

class HeaderButton extends Component {
  render() {
    const {itemsInCart,total, removeItem} = this.props;
    return (
      <div className="header__right">
        <button><a><i className="fa fa-shopping-cart"></i></a>
          <div className="cart">
            <div className="list__item">
              {itemsInCart.map((item) => <ItemCartMenu key={item.id} name={item.name} img={item.img} price={item.new_price}
                                                       clickRemove={(e) => this.props.removeItem(item.id)}/>)}
            </div>
            <p className="cart__sum-price">Tổng số<span className="cart__sum-price__value">{total||0}</span></p><Link
            className="cart__button" to="/cart">GIỎ HÀNG</Link></div>
        </button>
        <button><a><i className="fa fa-search"></i></a></button>
        <button><a><i className="fa fa-bars"></i></a></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsInCart: state.products.addedItems,
    total: state.products.total,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch(removeItem(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderButton)
