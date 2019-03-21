import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MenuAdmin from './MenuAdmin';
import Chart from './Chart';


export default class Admin extends Component {
    render() {
      return (
        <>
          <div className="container gridpage">
          <MenuAdmin/>
          <Chart/>        
          </div>
        </>
        );
    }
  }