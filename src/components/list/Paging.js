import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Paging extends Component {
  handleChange=(e)=> {
    console.log(e.target.id)
    this.props.handleClick(e.target.id);
  }
  increase = (e) =>{
    this.props.increase();
  }
  degrease = (e) =>{
    this.props.degrease();
  }
  render() {
    const {pageNumbers} = this.props;
    return (
      <div className="list-content__head">
        <div className="list-content__head__list">
          <a href="grid.html"><i className="fa fa-th-list"></i></a>
          <a href="list.html"><i className="fa fa-list-ul"></i></a>
        </div>
        <p className="list-content__head__paging">
          <i className="fa fa-caret-left" onClick={this.degrease()}> </i>
          {pageNumbers.map(number => <span id={number}
                                           onClick={(e)=>this.handleChange(e)}>{number}</span>)}
          <i className="fa fa-caret-right" onClick={(e)=>this.increase(e)}></i>
        </p>
      </div>
    );
  }
}
