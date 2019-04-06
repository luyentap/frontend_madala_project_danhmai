import React, {Component} from 'react';
import Sale from "./Sale";
import KindProducts from "./KindProducts";
import TagProducts from "./TagProducts";
import Intro from './Intro'
import SideBar from './SideBar'
import GridContent from "./../../containers/grid/GridContent";

export default class Grid extends Component {
  render() {
    return (
      <div>
        <Intro/>
        <div className="container gridpage">
        <SideBar/>
        <GridContent/>
        </div>
        <KindProducts/>
      </div>
    );
  }
}
