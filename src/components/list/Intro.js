import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const Intro = () => {
  return (
    <div>
      <div className="container">
        <div className="link-intro"><Link>Home ></Link><Link>Sản Phẩm ></Link><Link className="cl-green">Trang Sức
          ></Link></div>
      </div>
      <div className="grid-banner">
        <img src={require("../../img/grid/banner-page.jpg")}/>
      </div>
    </div>
  )
}
export default Intro
