import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class MenuAdmin extends Component {
    render() {
      return (
        <div className="sidebar-grid">
          <div className="sidebar-grid__item">
          <h2 className="sidebar-grid__item__header"><i className="fa fa-bars"></i>  ADMIN</h2>
          <div className="sidebar-grid__item__body">
            <div className="list">
              <ul>
                <li><Link to="/admin">Trang chủ</Link></li>
              </ul>
              <i className="fa fa-caret-down"></i></div>
            <div className="list">
              <ul>
                <li><Link to="/admin_custormer">Quản lý khách hàng</Link></li>
              </ul>
              <i className="fa fa-caret-right"></i></div>
            <div className="list">
              <ul>
                <li><Link to="/admin_product">Quản lý sản phẩm</Link></li>
                <li><Link to="/admin_product_exist">Sản phẩm còn</Link></li>
                <li><Link to="/admin_product_sold">Sản phẩm đã bán</Link></li>
              </ul>
              <i className="fa fa-caret-right"></i></div>
            <div className="list">
              <ul>
                <li><Link to="/admin_bill">Quản lý đơn hàng</Link></li>
              </ul>
              <i className="fa fa-caret-right"></i></div>
          </div>
        </div>
        <div className="sidebar-grid__item"></div>
        </div>
        );
    }
  }
//----------------------
const slidebar={
  display: '-ms-flexbox',
  display: 'flex',
  flexDirection: 'column',
  padding: '0',
  color: '#fff',
  backGround: '#2f353a'
}