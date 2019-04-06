import React, {Component} from 'react'

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__left"><img src={require("../../img/home/01_Home_03.jpg")}/>
        <h1 className="intro__left__header">Green Vera</h1>
        <p className="intro__left__text">Sản phẩm tinh dầu dưỡng da mới nhất của Mandala</p>
        <p className="intro__left__price">Giá chỉ 750.000<sup>đ</sup></p>
        <p className="intro__left__buy">MUA HÀNG</p>
      </div>
      <div className="intro__right"><img src={require("../../img/home/01_Home_02.jpg")}/>
      </div>
    </div>
  )
}

export default Intro
