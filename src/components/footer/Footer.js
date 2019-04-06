import React,{Component} from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__contact">
          <div className="footer__item"><h2 className="footer__item__header">Liên Hệ với chúng tôi</h2>
            <p><i className="fa fa-map cl-green"></i>Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn,<br></br>P. Cống
              Vị, Q. Ba Đình,
              Hà Nội</p>
            <p><i className="fa fa-phone-square cl-green"></i>(04) 6674 2332<i
              className="fa fa-phone cl-green"></i>(04) 3786
              8904</p>
            <p className="cl-green"><i className="fa fa-phone-square"></i><span className="cl_grey">(08) 6680 9686</span><i
              className="fa fa-mail-forward"></i>Support@bizweb.vn
            </p>
          </div>
          <div className="footer__item"><h2 className="footer__item__header">Chuyển hàng</h2>
            <p>mua sắm trực tuyến</p>
            <p className="cl-green">Đến từ chúng tôi gửi đến</p>
            <p>Chính sách vận chuyển</p>
            <p>Vận chuyển thông tin</p></div>
          <div className="footer__item"><h2 className="footer__item__header">Hỗ trợ</h2>
            <p>Câu chuyện của chúng ta</p>
            <p>Thanh toán an toàn</p>
            <p>Tùy chọn Vận Chuyển</p>
            <p>Chính sách vận chuyển</p></div>
          <div className="footer__item"><h2 className="footer__item__header">Thông tin</h2>
            <p>Về chúng tôi</p>
            <p>Điều khoản & điều kiện</p>
            <p>Chính sách riêng tư</p>
            <p>Đơn đặt hàng và Returns</p></div>
          <div className="footer__item"><h2 className="footer__item__header">My account</h2>
            <p>Xem Giỏ hàng</p>
            <p>Sản phẩm yêu thích</p>
            <p>kiểm tra</p>
            <p>Theo dõi đặt hàng của tôi</p></div>
        </div>
        <div className="footer__above">
          <div className="footer__above--left"><p>© Copyright 2008-2014 DKT Technology JSC</p></div>
          <div className="footer__above--right">
            <img src={require("../../img/home/01_Home_01_47.jpg")}/>
            <img src={require("../../img/home/01_Home_01_49.jpg")}/>
            <img src={require("../../img/home/01_Home_01_51.jpg")}/>
            <img src={require("../../img/home/01_Home_01_53.jpg")}/>
          </div>
        </div>
      </footer>
    );
  }
}
