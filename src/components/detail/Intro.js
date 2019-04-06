import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Intro extends Component{
  render() {
    return (
        <div className="link-intro"><>Home ></><Link>Sản Phẩm ></Link><Link className="cl-green">Trang Sức ></Link><Link
          className="cl-green">Lắc
          tay</Link>
        </div>
    );
  }

}
