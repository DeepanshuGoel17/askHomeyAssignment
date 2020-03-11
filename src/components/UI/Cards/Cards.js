 import React from 'react';
import Buttons from '../Buttons/Buttons';

const cards = (props) => {
    return (
        <div>
            <span>{props.type} &nbsp;: &nbsp;</span>
            <span>{props.orderQuantity} &nbsp; for &nbsp;</span>
            <span>£{props.priceKg} &nbsp; order by Users : &nbsp;</span>
            <span>{props.userId} &nbsp; &nbsp;</span>
            <Buttons btnType="danger" clicked ={() =>{props.delete(props.type,props.priceKg)}} > Cancel</Buttons>

        </div>
    );
}

export default cards