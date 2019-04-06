import React, {Component} from 'react';
import {connect} from "react-redux";
import ProductBestItem from "../../components/detail/ProductBestItem";

class ProductBest extends Component {
  render() {
    const {productsBest, productsHot} = this.props;

    let productBestRender = productsBest.slice(0, 3);
    let productTopRender= productsHot.slice(0, 3);

    return (
      <div className="sibar-detail">
        <div className="product-best">
          <h3 className="product-best__header">Sản phẩm bán chạy</h3>
          {productsBest && productBestRender.map(product => <ProductBestItem key={product.id} id={product.id} name={product.name}
                                                                             price={product.price} img={product.img}
                                                                             numberBuy={product.numberBuy}/>)}
        </div>
        <div className="product-best">
          <h3 className="product-best__header">Sản phẩm Mua Nhiều</h3>
          {productsHot && productTopRender.map(product => <ProductBestItem key={product.id} id={product.id} name={product.name}
                                                                           price={product.price} img={product.img} numberBuy={product.numberBuy}/>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsBest: state.products.products_best,
    productsHot: state.products.products_hot
  }
}
export default connect(mapStateToProps, null)(ProductBest)
