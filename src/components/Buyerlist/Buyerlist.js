import React from  'react';
import Cards from  '../UI/Cards/Cards';

const buyerlist = (props)=>{
    let combinedArray = JSON.parse(JSON.stringify(props.list));
    combinedArray = combinedArray.filter((item,index)=>{
        if(combinedArray[index+1]){
        if(item.priceKg === combinedArray[index+1].priceKg){
            combinedArray[index+1].orderQuantity =  combinedArray[index+1].orderQuantity +item.orderQuantity;
            combinedArray[index+1].userId = item.userId + ', '+ combinedArray[index+1].userId ;
            return false;
        }else{
            return true;
        }
    }
    return true;
    });
    let buyerArr = combinedArray.map((order)=>{
        return (
            <Cards key =  {order.priceKg} type= {order.type} priceKg = {order.priceKg} orderQuantity = {order.orderQuantity} userId ={order.userId} delete ={(type,price)=>{props.delete(type,price)}}></Cards>
        );
    })
    return(
        <div>{buyerArr}</div>
    )
}
export default buyerlist;