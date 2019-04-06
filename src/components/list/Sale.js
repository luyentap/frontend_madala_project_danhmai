import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export  default  class Sale extends Component{
  render() {
    return (
        <div>
            <div className="container">
                <div className="link-intro"><Link to='/home'>Home ></Link><Link to=''>Sản Phẩm ></Link><Link className="cl-green" to='/list'>Trang Sức ></Link>
                </div>
            </div>
            <div className="grid-banner"><img src="../img/grid/banner-page.jpg"/>
            </div>           
        </div>
    );
  }
}
