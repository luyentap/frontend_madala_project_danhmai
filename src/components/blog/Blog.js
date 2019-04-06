import React, { Component } from 'react';

export default class Blog extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="link-intro"><a>Home ></a><a class="cl-green">Blog ></a></div>
        </div>
        <div class="container">
          <div class="blog">
              <div class="grid-content__head">
                <div class="grid-content__head__list"><a href="grid.html"><i class="fa fa-th-list"></i></a><a href="list.html"><i class="fa fa-list-ul"></i></a></div>
                <p class="grid-content__head__paging"><i class="fa fa-caret-left"></i><span>1</span><span>2</span><span>3</span><i class="fa fa-caret-right"></i></p>
              </div>
              <div class="blog-body">
                <div class="item">
                    <img class="blog-body__img" src={require("../../img/blog/1.jpg")}/>
                    <h3 class="blog-body__title">Review son kem Bourjois Velvet</h3>
                    <div class="blog-body__text">
                      <p>Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
                      <p>Bởi Nam Trần (27/5/2016)</p>
                    </div>
                    <div class="blog-body__footer">
                      <p>Đọc thêm</p>
                      <p>23 Bình luận</p>
                    </div>
                </div>
                <div class="item">
                    <img class="blog-body__img" src={require("../../img/blog/2.jpg")}/>
                    <h3 class="blog-body__title">Review son kem Bourjois Velvet</h3>
                    <div class="blog-body__text">
                      <p>Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
                      <p>Bởi Nam Trần (27/5/2016)</p>
                    </div>
                    <div class="blog-body__footer">
                      <p>Đọc thêm</p>
                      <p>23 Bình luận</p>
                    </div>
                </div>
                <div class="item">
                    <img class="blog-body__img" src={require("../../img/blog/3.jpg")}/>
                    <h3 class="blog-body__title">Review son kem Bourjois Velvet</h3>
                    <div class="blog-body__text">
                      <p>Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
                      <p>Bởi Nam Trần (27/5/2016)</p>
                    </div>
                    <div class="blog-body__footer">
                      <p>Đọc thêm</p>
                      <p>23 Bình luận</p>
                    </div>
                </div>
                <div class="item">
                    <img class="blog-body__img" src={require("../../img/blog/4.jpg")}/>
                    <h3 class="blog-body__title">Review son kem Bourjois Velvet</h3>
                    <div class="blog-body__text">
                      <p>Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
                      <p>Bởi Nam Trần (27/5/2016)</p>
                    </div>
                    <div class="blog-body__footer">
                      <p>Đọc thêm</p>
                      <p>23 Bình luận</p>
                    </div>
                </div>
                <div class="item">
                    <img class="blog-body__img" src={require("../../img/blog/5.jpg")}/>
                    <h3 class="blog-body__title">Review son kem Bourjois Velvet</h3>
                    <div class="blog-body__text">
                      <p>Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
                      <p>Bởi Nam Trần (27/5/2016)</p>
                    </div>
                    <div class="blog-body__footer">
                      <p>Đọc thêm</p>
                      <p>23 Bình luận</p>
                    </div>
                </div>
                <div class="item">
                    <img class="blog-body__img" src={require("../../img/blog/6.jpg")}/>
                    <h3 class="blog-body__title">Review son kem Bourjois Velvet</h3>
                    <div class="blog-body__text">
                      <p>Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.</p>
                      <p>Bởi Nam Trần (27/5/2016)</p>
                    </div>
                    <div class="blog-body__footer">
                      <p>Đọc thêm</p>
                      <p>23 Bình luận</p>
                    </div>
                </div>
              </div>
              <div class="grid-content__head">
                <div class="grid-content__head__list"><a href="grid.html"><i class="fa fa-th-list"></i></a><a href="list.html"><i class="fa fa-list-ul"></i></a></div>
                <p class="grid-content__head__paging"><i class="fa fa-caret-left"></i><span>1</span><span>2</span><span>3</span><i class="fa fa-caret-right"></i></p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
