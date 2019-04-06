import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Intro from "./Intro";
import ContactForm from "./ContactForm";

export default class PageOrder extends Component{
  render() {
    return (
      <div className="container">
        <Intro/>
        <ContactForm/>
      </div>
    );
  }
}
