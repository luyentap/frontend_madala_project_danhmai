import React, {Component} from 'react';
import Sale from "./Sale";
import KindProducts from "./KindProducts";
import TagProducts from "./TagProducts";
import Intro from './Intro'
import SideBar from './SideBar'
import ListContent from "../../containers/list/ListContent";

export default class List extends Component {
  render() {
    return (
      <div>
        <Intro/>
        <div className="container gridpage">
        <SideBar/>
        <ListContent/>
        </div>
        <KindProducts/>
      </div>
    );
  }
}
