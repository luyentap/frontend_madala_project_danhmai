import React, {Component} from 'react'

const Present = () => {
  return (
    <div className="container">
      <div className="present">
        <div className="present__item"><p><i className="fa fa-plane"></i></p>
          <p>Miễn phí vận chuyển</p></div>
        <div className="present__item"><p><i className="fa fa-gift"></i></p>
          <p>Nhận ngay quà tặng trị giá 350.000đ</p></div>
        <div className="present__item"><p><i className="fa fa-star"></i></p>
          <p>Giảm 30% cho đơn hàng trên 5.000.000đ</p></div>
      </div>
    </div>
  )
}

export default Present
