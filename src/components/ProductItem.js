import React, { Component } from 'react';

export class ProductItem extends Component {
    render() {

        const {title, imgUrl, detail } = this.props;
      //  const title = pr.title;
      //  const imgUrl = pr.imgUrl;

        return (
            <div className="col-sm-4">
                <div className="card" style={{flexDirection: "column"}}>
                <img src={ imgUrl } className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ detail }</p>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
                </div>
            </div>
        );
    }
}