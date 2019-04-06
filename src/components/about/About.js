import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="link-intro"><a>Home ></a><a class="cl-green">Về chúng tôi ></a></div>
        </div>
        <h2 class="container page__title">VỀ CHÚNG TÔI</h2>
        <div class="container">
          <div class="about-us">
            <div class="about-us__content">
            <img class="about-us__content__left" src={require("../../img/about-us/about-us.PNG")}/>
            <div class="about-us__content__right">
            <p class="header-logo"><span>M</span>andala</p>
            <h3 class="about-us__content__right__text__title">GIỚI THIỆU CHUNG VỀ MÝ PHẨM HANDMADE MANLADA</h3>
            <p class="about-us__content__right__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut autem consectetur culpa eius enim eveniet excepturi, facilis fuga fugiat, laudantium maiores modi molestiae natus, quaerat quo rem ut vero!</p>
            <p class="about-us__content__right__more">Xem thêm</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
