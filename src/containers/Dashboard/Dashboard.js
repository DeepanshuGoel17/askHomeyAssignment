import React, { Component, Fragment } from 'react';

import BuyerList from '../../components/Buyerlist/Buyerlist';
import SellerList from '../../components/Sellerlist/Sellerlist';

import Register from '../Register/Register';

import './Dashboard.css';

class Dashboard extends Component {
    // state for the Dashboard Component
    state = {
        buyerList: [],
        sellerList: [],
        showModal: false
    }
    //Register Order form handler
    registerFormHandler = (orderDetails) => {
        let orderDetail = {};
        orderDetail.userId = orderDetails.userId.value;
        orderDetail.priceKg = parseFloat(orderDetails.priceKg.value);
        orderDetail.orderQuantity = parseFloat(orderDetails.orderQuantity.value);
        orderDetail.type = orderDetails.type.value;
        if (orderDetails.type.value === 'Sell') {
            this.sellerHandler(orderDetail);
        } else {
            this.buyerHandler(orderDetail);
        }
    }
    // to update the buyer list
    buyerHandler = (orderDetails) => {
        let buyerList = [...this.state.buyerList];
        if (buyerList.length) {
            for (let i = 0; i < buyerList.length; i++) {
                if (buyerList[i].priceKg < orderDetails.priceKg) {
                    buyerList.splice(i, 0, orderDetails);
                    break;
                }
                if(i === buyerList.length-1){
                    buyerList.push(orderDetails);
                    break;  
                }
            }
        } else {
            buyerList.push(orderDetails);
        }

        this.setState({ buyerList });
    }
    //to update the seller list
    sellerHandler = (orderDetails) => {

        let sellerList = [...this.state.sellerList];
        if (sellerList.length) {
            for (let i = 0; i < sellerList.length; i++) {
                if (sellerList[i].priceKg < orderDetails.priceKg) {
                    sellerList.splice(i, 0, orderDetails);
                    break;
                }
                if(i === sellerList.length-1){
                    sellerList.unshift(orderDetails);
                    break;
                }
            }
        } else {
            sellerList.push(orderDetails);
        }
        this.setState({ sellerList });
    }
    // to delete order
    deleteOrderHandler = ( type, price) => {
        let deleteOrderArr =[]
        if(type === "Sell"){
            deleteOrderArr = JSON.parse(JSON.stringify(this.state.sellerList));
        }else{
            deleteOrderArr = JSON.parse(JSON.stringify(this.state.buyerList));
        }
        deleteOrderArr = deleteOrderArr.filter((item) => {
            if(item.priceKg ===  price){
                return false;
            }
            return true;
        });
        if(type === "Sell"){
           this.setState({sellerList:deleteOrderArr})
        }else{
            this.setState({buyerList:deleteOrderArr})
        }
    }

    // to handle the modal hide and show
    modalHandler = () => {
        this.setState((prevState, props) => {
            return {
                showModal: !prevState.showModal
            }
        });
    }
    render() {
        return (
            <Fragment>
                <div className="display-flex">
                    <div>
                        <h3>Sellers List</h3>
                        <SellerList list={this.state.sellerList} delete ={(type,price)=>{this.deleteOrderHandler(type,price)}}></SellerList>
                    </div>
                    <div>
                        <h3>Buyers List</h3>
                        <BuyerList list={this.state.buyerList} delete ={(type,price)=>{this.deleteOrderHandler(type,price)}}></BuyerList>
                    </div>

                </div>
                <Register show={this.state.showModal} clicked={this.modalHandler} formHandler={(orderDetails) => { this.registerFormHandler(orderDetails) }} ></Register>
            </Fragment>
        )
    }
}

export default Dashboard;