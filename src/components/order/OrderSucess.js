import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const style ={
  container:{
    paddingTop:"40px"
  }
}
export default class OrderSucess extends Component{

  render() {
    return (
      <div>
      <div className="container" style={style.container}>
        <div className="step-payment">
          <div className="step-payment__item bg-yellow">
            <div className="step-payment__item__step">Bước 1:</div>
            <div className="step-payment__item__content">Kiểm tra giỏ hàng</div>
          </div>
          <div className="step-payment__item bg-yellow">
            <div className="step-payment__item__step">Bước 2:</div>
            <div className="step-payment__item__content">Thông tin thanh toán</div>
          </div>
          <div className="step-payment__item bg-yellow">
            <div className="step-payment__item__step">Bước 3:</div>
            <div className="step-payment__item__content">Thông báo kết quả</div>
          </div>
        </div>
        <div>
          <h3>Bạn đã mua hàng thành công, chờ chúng tôi gọi lại xác nhận nhé!!!</h3>
        </div>
      </div>
      </div>
    );
  }

}
