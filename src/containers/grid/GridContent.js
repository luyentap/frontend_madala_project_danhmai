import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Paging from "../../components/list/Paging";
import {connect} from 'react-redux';
import GridProduct from "../../components/list/GridProduct";

class GridContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      limit: 6,
      maxPage : 1
    };
  }

  handleClickPageNumber = (page) => {
    console.log(page)
    this.setState({
      currentPage: Number(page)
    });
  }
  increase = (value) => {
    if(this.state.currentPage<this.state.maxPage) {
      this.setState({
        currentPage: Number(this.state.currentPage + 1)
      });
    }
  }
  degrease = (value) => {
    if(this.state.currentPage>1) {
      this.setState({
        currentPage: Number(this.state.currentPage - 1)
      });
    }
  }

    render()
    {
      const {products} = this.props;
      const {currentPage, limit,maxPage} = this.state;
      const pageNumbers = [];
      let currentProducts = [];

      if (typeof (products) != "undefined" && products.length > 0) {
        // Logic for displaying todos
        const indexOfLastTodo = currentPage * limit;
        const indexOfFirstTodo = indexOfLastTodo - limit;
        currentProducts = products.slice(indexOfFirstTodo, indexOfLastTodo);

        // Logic for displaying page numbers
        for (let i = 1; i <= Math.ceil(products.length / limit); i++) {
          pageNumbers.push(i);
        }
        this.state.maxPage = pageNumbers.length;
      }

      return (
        <div className="list-content">
          {products && <Paging pageNumbers={pageNumbers} handleClick={this.handleClickPageNumber} degrease={this.degrease} increase={this.increase}/>
          }
          <div className="grid-content__body">
            {currentProducts.map((product) =>
              <GridProduct key={product.id} img={product.img} brand={product.brand} name={product.name} new_price={product.new_price} old_price={product.old_price}/>
            )}
          </div>
          {products && <Paging pageNumbers={pageNumbers} handleClick={this.handleClickPageNumber} degrease={this.degrease} increase={this.increase}/>}
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      products: state.products.products_hot,
    }
  }
  export default connect(mapStateToProps)
(
  GridContent
)
