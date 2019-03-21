import React, { Component } from 'react';
import MenuAdmin from "./MenuAdmin"

export default class ProductItem extends Component {
  render() {
    return (
        <div className="container" style={custyle}>
    <div className="row col-md-6 col-md-offset-2 custyle" >
    <table className="table table-striped custab" style={custab}>
    <thead>
    <a href="#" className="btn btn-primary btn-xs pull-right"><b>+</b> Add new categories</a>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th className="text-center">Action</th>
        </tr>
    </thead>
            <tr>
                <td>1</td>
                <td>OHUI</td>
                <td>350.000d</td>
                <td className="text-center"><a className='btn btn-info btn-xs' href="#"><i class="fas fa-edit"></i> Edit</a> <a href="#" className="btn btn-danger btn-xs"><i class="fas fa-trash-alt"></i> Del</a></td>
            </tr>
            <tr>
                <td>2</td>
                <td>MADALA</td>
                <td>450.000d</td>
                <td className="text-center"><a className='btn btn-info btn-xs' href="#"><i class="fas fa-edit"></i> Edit</a> <a href="#" className="btn btn-danger btn-xs"><i class="fas fa-trash-alt"></i> Del</a></td>
            </tr>
            <tr>
                <td>3</td>
                <td>TAFARY</td>
                <td>450.000d</td>
                <td className="text-center"><a className='btn btn-info btn-xs' href="#"><i class="fas fa-edit"></i> Edit</a> <a href="#" className="btn btn-danger btn-xs"><i class="fas fa-trash-alt"></i> Del</a></td>
            </tr>
    </table>
    </div>
</div>
    );
  }
}
//----------------------------
const custab={
    border: '1px solid #ccc',
    padding: '5px',
    margin: '5% 0',
    boxShadow: '3px 3px 2px #ccc',
    transition: '0.5s'
}
const custyle={
    textAlign:'center'
    
}