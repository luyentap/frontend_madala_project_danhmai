import React, { Component } from 'react';

export default class Register extends Component {
  render() {
    return (
      <div>
        <div class="container">
        <div class="register">
            <h1 class="register__title">ĐĂNG KÝ</h1>
            <form class="form">
              <h3 class="form__title">THÔNG TIN CÁ NHÂN</h3>
              <div class="form-element"><label>Tên trước<span class="upper-text">*</span></label><input/>
              </div>
              <div class="form-element"><label>Email<span class="upper-text">*</span></label><input/></div>
              <div class="form-element"><label>Password<span class="upper-text">*</span></label><input/></div>
              <p>Đăng ký nhận bảng tin</p>
            </form>
            <form class="form">
              <h3 class="form__title">THÔNG TIN ĐĂNG NHẬP</h3>
              <div class="form-element"><label>Mật khẩu<span class="upper-text">*</span></label><input/></div>
              <div class="form-element"><label>Xác nhận mật khẩu<span class="upper-text">*</span></label><input/></div>
              <div class="form-element form-element__button"><button>Gửi</button><button><i class="fa fa-undo"></i>Quay lại</button></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}