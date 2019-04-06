import React, { Component } from 'react';
import HeaderMenu from "./HeaderMemu";
import HeaderButton from "../../containers/header/HeaderButton";
export default class Header extends Component {
  render() {
    return (
      <div className="contain_header">
        <div className="container header">
          <p className="header-logo"><span>M</span>andala</p>
          <HeaderMenu/>
          <HeaderButton/>
        </div>
      </div>
    );
  }
}
