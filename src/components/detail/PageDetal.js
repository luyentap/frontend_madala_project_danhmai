import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Intro from "./Intro";
import DetailProduct from "../../containers/detail/DetailProduct";
import MoreDetail from "../../containers/detail/MoreDetail";
import {connect} from "react-redux";

export default class PageDetal extends Component {
  render() {
    const { match: { params } } = this.props;
    const idProduct = params.id;
    return (
      <div className="container">
        <Intro/>
        <DetailProduct id={idProduct}/>
        <MoreDetail id={idProduct}/>
      </div>
    );
  }

}
