import React, {Component} from 'react';
import './css/style.css';
import {render} from 'react-dom'
import {Footer} from "./components/footer/Footer";
import Header from "./components/header/Header";
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {getProduct, productReduce} from "./reducers/productReducer";
import ListProduct from "./containers/home/ListProduct";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/productSaga";
import {rootReducer} from "./reducers/rootReducer";
import List from './components/list/List';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';
import Register from './components/register/Register';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import PageDetal from "./components/detail/PageDetal";
import {saveState} from "./common/LocalSave";
import PageCart from "./components/cart/PageCart";
import PageOrder from "./components/order/PageOrder";
import OrderSucess from "./components/order/OrderSucess";
import Admin from "./components/admin/Admin";
import BillAdmin from "./components/admin/BillAdmin";
import CustomerAdmin from "./components/admin/CustomerAdmin";
import ProductAdmin from "./components/admin/ProductAdmin";
import SignIn from './components/admin/SignIn';
import ProductExist from "./components/admin/ProductExist";
import ProductSold from "./components/admin/ProductSold";

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware,)
  )
)
sagaMiddleware.run(rootSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path='/list' component={List}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/blog' component={Blog}/>
              <Route path='/register' component={Register}/>
              <Route path='/detail/:id' component={PageDetal}/>
              <Route path='/cart' component={PageCart}/>
              <Route path='/order' component={PageOrder}/>
              <Route path='/sucess' component={OrderSucess}/>
              <Route path='/admin_signin' component={SignIn}/>
              <Route path='/admin' component={Admin}/>
              <Route path='/admin_customer' component={CustomerAdmin}/>
              <Route path='/admin_product' component={ProductAdmin}/>
              <Route path='/admin_bill' component={BillAdmin}/>
              <Route path='/admin_product_exist' component={ProductExist}/>
              <Route path='/admin_product_sold' component={ProductSold}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

//theo dõi sự thay đổi của store, cập nhật vào localstorage
store.subscribe(() => saveState("shoppingCart", store.getState()["products"]["addedItems"]));
store.subscribe(() => saveState("total", store.getState()["products"]["total"]));
