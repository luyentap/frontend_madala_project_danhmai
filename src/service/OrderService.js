import Request from "../common/Axios";

export default class OrderService{
  static postOrder(data){
    Request.post('/orders',data);
  }
}
