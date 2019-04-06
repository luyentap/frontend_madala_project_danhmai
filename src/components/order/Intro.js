import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Intro extends Component{
  render() {
    return (
        <div className="link-intro">
          <Link to="/">Home ></Link>
          <Link className="cl-green" to="/cart">Đăt hàng ></Link>
        </div>
    );
  }

}
