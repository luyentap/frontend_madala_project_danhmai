import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export  default  class HeaderMenu extends Component{
  render() {
    return (
      <ul className="header__primary">
        <li><Link to="/">TRANG CHỦ</Link></li>
        <li><Link to="/about">GIỚI THIỆU</Link></li>
        <li className="header__primary__product"><Link to="/list">SẢN PHẨM</Link>
          <div className="menu-product">
            <div className="menu-product__item"><h6 className="menu-product__item__title">DƯỠNG DA</h6>
              <div className="menu-product__item__list"><p>Áo khoác</p>
                <p>Bộ áo liền quần</p>
                <p>Dress</p>
                <p>Quần/Váy</p>
                <p>Quần sort</p>
                <p>Quần jean</p>
                <p>Đồ đan</p>
                <p>Áo nỉ</p>
                <p className="menu-product__item__list--active">Áo sơ mi</p></div>
            </div>
            <div className="menu-product__item"><h6 className="menu-product__item__title">DƯỠNG DA</h6>
              <div className="menu-product__item__list"><p>Áo khoác</p>
                <p>Bộ áo liền quần</p>
                <p>Dress</p>
                <p>Quần/Váy</p>
                <p>Quần sort</p>
                <p>Quần jean</p>
                <p>Đồ đan</p>
                <p>Áo nỉ</p>
                <p className="menu-product__item__list--active">Áo sơ mi</p></div>
            </div>
            <div className="menu-product__item"><h6 className="menu-product__item__title">DƯỠNG DA</h6>
              <div className="menu-product__item__list"><p>Áo khoác</p>
                <p>Bộ áo liền quần</p>
                <p>Dress</p>
                <p>Quần/Váy</p>
                <p>Quần sort</p>
                <p>Quần jean</p>
                <p>Đồ đan</p>
                <p>Áo nỉ</p>
                <p className="menu-product__item__list--active">Áo sơ mi</p></div>
            </div>
          </div>
        </li>
        <li><Link to="/blog">TIN TỨC</Link></li>
        <li><Link to="/contact">BẢN ĐỒ</Link></li>
        <li><Link to="/register">ĐĂNG KÝ</Link></li>
      </ul>
      
    );
  }
}
