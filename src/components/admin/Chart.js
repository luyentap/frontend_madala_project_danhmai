import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Paging from "../../components/list/Paging";
import {connect} from 'react-redux';
import ProductItem from "../../components/list/ProductItem";
// import { BarChart, Bar,XAxis,YAxis } from 'recharts';

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{name: 'October', uv: 850},{name: 'November', uv: 550},{name: 'December', uv: 750},{name: 'January', uv: 500},{name: 'February', uv: 700},{name: 'Match', uv: 870}];

const Chart = () => {

    return (
      <div>
      <h3 style={color}>BIỂU ĐỒ DANH SỐ BÁN ĐƯỢC TRONG 6 THÁNG GẦN NHẤT CỦA MADALA</h3>
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
  </div>
    )
  }
  
  export default Chart
//-------------------
const color={
  fontFamily:'UTM',
  color:'green',
  marginTop:'20px',
  marginBottom:'20px',
  marginLeft:'20px'
}