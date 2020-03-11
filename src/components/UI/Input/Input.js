import React, {Fragment} from  'react';

import  './Input.css';

const Input = (props) => {
    let inputClasses = [];
    if (props.invalid && props.touched) {
                inputClasses.push('Invalid');
            }

    let input = <input type={props.Type} value={props.value}  step=  {props.step} className={inputClasses.join(' ')} id={props.Name} name={props.Name}  onChange={props.changed}/>;

    return (
        <Fragment>
        <label >{props.LabelName} :</label>
       {input}
        <br /><br />
        </Fragment>
    );
}

export default Input;