import React, {Component} from 'react';

export class MoreDetailItem extends Component{
  render() {
    const {title,content,img} = this.props;
    return (
      <div className="item">
        <div>
          <p className="description-body__title"><span>THE MARK</span>OF A LEGEND</p>
          <p className="description-body__text">{content}</p>
        </div>
        <img className="description-body__img" src={img}/>
      </div>
    );
  }
}
