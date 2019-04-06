import React, {Component} from 'react'
import ListButton from "./ListButton";

const AboutUs = () => {
  let arrayButton =["Đồng hồ","Túi","Phụ kiện","Đồng hồ","Giày","Scandal","Áo sơ mi","Nước hoa","Giày","Giày","Scanldal"];
  return (
    <div className="container">
      <section className="abouts">
        <div className="about"><h3 className="about__header">Về chúng tôi</h3>
          <img className="img_arrow" src={require("../../img/home/01_Home_44.jpg")}/>
          <div className="about__description"><p className="header-logo"><span>M</span>andala</p>
            <p>Giới thiệu chung về mỹ phẩm handmade Mandala</p>
            <p>Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một
              ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt. Hi, chào các nàng ...
              sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi
              bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.sau khá nhiều lời hứa hão thì hôm nay tớ quay
              lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để
              giải nhiệt.</p></div>
          <div className="about__footer"><p>Xem thêm</p></div>
        </div>
        <div className="about">
          <h3 className="about__header">Blog</h3>
          <img className="img_arrow" src={require("../../img/home/01_Home_44.jpg")}/>
          <div className="about__description">
            <img src={require("../../img/home/Layer 69 copy.png")}/>
            <p>Review son kem Bourjois Velvet</p>
            <p>Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một
              ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
            <p>Bởi NamTran (27/05/2015)</p></div>
          <div className="about__footer"><p>Đọc thêm ></p>
            <p>23 Bình luận</p></div>
        </div>
        <div className="about">
          <h3 className="about__header">Gửi Email cho chúng tôi</h3>
          <img className="img_arrow" src={require("../../img/home/01_Home_44.jpg")}/>
          <div className="about__description"><input placeholder="Email của bạn"/>
            <p>Gửi email để nhận những ưu đãi mới nhất</p>
            <button>Gửi</button>
          </div>
        </div>
        <div className="about">
          <h3 className="about__header">TAG SẢN PHẨM</h3>
          <img className="img_arrow" src={require("../../img/home/01_Home_44.jpg")}/>
          <div className="about__footer">
            <ListButton listButton={arrayButton}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
