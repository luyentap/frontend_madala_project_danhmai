import React, {Component} from 'react'

const Combo = () => {
  return (
    <div className="container">
      <section className="combo combo1">
        <div className="combo__child"></div>
        <div className="combo__child bg-yellow">
          <div className="combo__child__description"><p className="underline">SỮA TẮM</p></div>
          <div className="triangle-left cl-yellow"></div>
        </div>
        <div className="combo__child bg_grey">
          <div className="combo__child__description"><p className="underline">NƯỚC HOA</p></div>
        </div>
        <div className="combo__child bg_grey">
          <div className="combo__child__description"><p>Từ 1/6 - 5/6/2015</p>
            <p>-40%</p>
            <p>MUA HÀNG</p></div>
          <div className="triangle-right cl_grey"></div>
        </div>
        <div className="combo__intro"></div>
      </section>
      <section className="combo combo2">
        <div className="combo__intro">
          <div className="combo__child__description"><p>Compo Tắm Trắng</p>
            <p>Tại Nhà</p></div>
        </div>
        <div className="combo__child bg_blue-sky">
          <div className="combo__child__description"><p className="underline">TRANG SỨC</p></div>
          <div className="triangle-right cl_blue-sky"></div>
        </div>
        <div className="combo__child"></div>
        <div className="combo__child"></div>
        <div className="combo__child bg_pink">
          <div className="triangle-left cl_pink"></div>
          <div className="combo__child__description"><img src={require("../../img/home/Layer 12.png")}/>
            <p>Quyến rũ hơn</p>
            <p>CÙNG<span>D A I S Y</span></p></div>
        </div>
      </section>
    </div>
  )
}

export default Combo
