import React, {Component} from 'react'

const Team = () => {
  return (
    <div className="container">
      <section className="team"><img className="team__avatar" src={require("../../img/home/01_Home_19.jpg")}/>
        <div className="team__description"><p className="team__description__text"><span>“</span> Vẫn là vẻ bề ngoài vô
          cùng đơn
          giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản
          phẩm ấy! Với công nghệ cải tiến mới nhất, hãng Rohto<span> ”</span></p>
          <p className="team__description__position">TutiLe _<span>_ Giám đốc phát triển sản phẩm</span></p></div>
      </section>
    </div>
  )
}

export default Team
