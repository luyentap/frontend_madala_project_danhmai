import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="link-intro"><a>Home ></a><a class="cl-green">Liên hệ ></a></div>
          </div>
          <h2 class="container page__title">LIÊN HỆ</h2>
          <div class="container">
            <div class="contact__content">
                {/* <iframe class="contact__content__left" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.7158674253747!2d108.21865621433689!3d16.08022754341553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183965739859%3A0x8dde8d2225155255!2zQsawdSDEkWnhu4duIMSQ4buRbmcgxJBh!5e0!3m2!1svi!2s!4v1548172417639" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                <div class="contact__content__right">
                  <form class="form">
                      <h3 class="form__title">Gửi email cho tôi</h3>
                      <div class="form-element"><label>Tên<span>*</span></label><input/></div>
                      <div class="form-element"><label>Emai;<span>*</span></label><input/></div>
                      <div class="form-element"><label>Tin nhắn;<span>*</span></label><textarea></textarea></div>
                      <div class="form-element form-element__button"><button>Gửi</button></div>
                  </form>
                </div>
            </div>
          </div>
      </div>
    );
  }
}