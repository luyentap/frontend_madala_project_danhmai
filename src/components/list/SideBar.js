import React, { Component } from 'react';
import Sale from "./Sale";
import KindProducts from "./KindProducts";
import TagProducts from "./TagProducts";
import Intro from './Intro';
import ListButton from "../home/ListButton";

const SideBar = () => {
  let arrayButton =["Đồng hồ","Túi","Phụ kiện","Đồng hồ","Giày","Scandal","Áo sơ mi","Nước hoa","Giày","Giày","Scanldal"];
    return (
      <div className="sidebar-grid">
        <div className="sidebar-grid__item">
          <h3 className="sidebar-grid__item__header"><i className="fa fa-bars"></i>Danh mục sản phẩm</h3>
          <div className="sidebar-grid__item__body">
            <div className="list">
              <ul>
                <li>Mỹ phẩm</li>
              </ul>
              <i className="fa fa-caret-down"></i></div>
            <div className="list">
              <ul>
                <li>Trang sức</li>
                <li>Vòng tay</li>
                <li>Nhẫn</li>
                <li>Lắc chân</li>
                <li>Phụ kiện khác</li>
                <li>Giày</li>
              </ul>
              <i className="fa fa-caret-down"></i></div>
            <div className="list">
              <ul>
                <li>Phụ kiện</li>
              </ul>
              <i className="fa fa-caret-down"></i></div>
            <div className="list">
              <ul>
                <li>Nước hoa</li>
              </ul>
              <i className="fa fa-caret-down"></i></div>
          </div>
        </div>
        <div className="sidebar-grid__item">
          <h3 className="sidebar-grid__item__header">So sánh sản phẩm</h3>
          <div className="sidebar-grid__item__body"><p>Bạn chưa có sản phẩm nào</p></div>
        </div>
        <div className="sidebar-grid__item">
          <h3 className="sidebar-grid__item__header">Tag sản phẩm</h3>
          <div className="sidebar-grid__item__body">
          <ListButton listButton={arrayButton}/>
          </div>
        </div>
        <img className="sidebar-grid__banner" src={require("../../img/grid/04_Gird_03.jpg")}/>
      </div>
    );
  }
export default SideBar
