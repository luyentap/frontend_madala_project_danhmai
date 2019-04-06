import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addToCart} from "../../actions/ActionCreaters";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../css/slider.scss'
import {ProductItem} from "../../components/home/ProductItem";

//todo: class thẻ p có class="list-product__header__item--selected" tùy vào selected header
class ListProduct extends Component {
  constructor(props) {
    super(props);

    this.productTypeChoice = {
      bestSeller: 1,
      new: 2,
      hot:3
    }
    this.state = {
      products: {},
      selected: this.productTypeChoice.bestSeller
    }

  }

  clickSlider = (e, value) => {
    this.setState({selected: value})
    console.log(this.state.selected)

  }

  //slider render tùy vào props được truyền vào
  sliderRender = (products) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 6,
      slidesToScroll: 3
    };
    return (
      <Slider {...settings}>
        {products.map(productItem =>
          <ProductItem clickBuy={this.clickBuy} key={productItem.id} id={productItem.id} name={productItem.name} brand={productItem.brand}
                       new_price={productItem.new_price} old_price={productItem.old_price} img={productItem.img}/>
        )}
      </Slider>
    )
  }

  clickBuy = (e) => {
    this.props.addToCart(e.target.value);
  }

  render() {
    let {productsBest, productsHot, productsNew} = this.props;

    //tùy vào trạng thái selected mà slider có nội dung tương ứng
    let slider;
    if (this.state.selected == this.productTypeChoice.bestSeller) {
      slider = this.sliderRender(productsBest)
    }
    if (this.state.selected == this.productTypeChoice.new) {
      slider = this.sliderRender(productsNew)
    }
    if (this.state.selected == this.productTypeChoice.hot) {
      slider = this.sliderRender(productsHot)
    }

    return (
      <section className="list-product">
        <h2 className="list-product__header">
          <p onClick={(e) => this.clickSlider(e, this.productTypeChoice.new)} className="list-product__header__item">Sản phẩm mới</p>
          <p onClick={(e) => this.clickSlider(e, this.productTypeChoice.bestSeller)}
             className="list-product__header__item list-product__header__item--selected">Sản phẩm bán chạy</p>
          <p onClick={(e) => this.clickSlider(e, this.productTypeChoice.hot)} className="list-product__header__item ">Sản phẩm đặc biệt</p></h2>
        <div className="img">
          <img src={require("../../img/home/01_Home_44.jpg")}/></div>
        <div className="list-product__type"><p className="list-product__type__item">Mỹ phẩm</p>
          <p className="list-product__type__item">Chăm sóc da</p>
          <p className="list-product__type__item">Dành cho tóc</p>
          <p className="list-product__type__item">Nước hoa</p>
          <p className="list-product__type__item list-product__type__item--selected">Trang sức</p>
          <p className="list-product__type__item">Quà tặng</p>
        </div>

        <div className="products">
          {slider &&
          slider
          }
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productsBest: state.products.products_best,
    productsHot: state.products.products_hot,
    productsNew: state.products.products_new,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    addToCart:(id)=>dispatch(addToCart(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListProduct)
