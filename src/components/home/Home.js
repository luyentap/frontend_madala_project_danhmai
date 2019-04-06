import React, { Component } from 'react';
import Intro from "./Intro";
import Present from "./Present";
import Combo from "./Combo";
import Team from "./Team";
import ListProduct from "../../containers/home/ListProduct";
import Social from "./Social";
import AboutUs from "./AboutUs";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Intro/>
        <Present/>
        <Combo/>
        <Team/>
        <ListProduct/>
        <Social/>
        <AboutUs/>
      </div>
    );
  }
}
