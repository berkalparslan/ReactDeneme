import React, { Component } from 'react';
import { control, header } from "../Util";
import { getProduct } from "../Service";
import { ProductItem } from "../components/ProductItem";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }

    componentDidMount(){
        const dt = {
            "start": "0"
        }
        getProduct(dt).then( items => {
            console.log(JSON.stringify(items.data.Products[0].bilgiler, null, 4))
            this.setState({ arr: items.data.Products[0].bilgiler })
        }).catch(error => {
            console.log("servis hatasi: "+ error);
        })
    }
    
    render() {
        return (
            <div>
                { control() }
                { header() }            
                <h1>Dashboard</h1>
                <div className = "row">
                { this.state.arr.map( (item, index) => {
                    return (<ProductItem title= { item.productName } imgUrl={item.images[0].normal } detail ={item.brief} key = {index} > </ProductItem>)
                } )}
                </div>
            </div>
        );
    }
}
