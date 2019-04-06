import { all, call, fork, put } from 'redux-saga/effects';
import { fetchAllProduct } from "../actions/ActionCreaters";
import ProductService from "../service/ProductService";

export function* getAllProducts() {
  const productsBest = yield call(ProductService.getBestProducts);
  const productsNew = yield call(ProductService.getNewProducts);
  const productsHot = yield call(ProductService.getHotProducts);
  const productsAll = {"products_new":productsNew.data.records,"products_hot":productsHot.data.records,"products_best":productsBest.data.records}
  console.log("productall",productsAll)
  yield put(fetchAllProduct(productsAll))
}


export default function* rootSaga() {
  yield all([fork(getAllProducts)])
}
