import React from 'react';

import './Button.css'


const buttons = (props) => {
    let classes = [...props.btnType];
    if(props.disabled){
        classes.push('disabled');
    }
    return(
        <button className={classes.join(' ')} onClick ={props.clicked} disabled ={props.disabled}>
            {props.children}
        </button>
    )
}

export default buttons;