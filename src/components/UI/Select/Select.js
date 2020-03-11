import React, { Fragment } from 'react';

import './Select.css';

const select = (props) => {
    let inputClasses = [];
    if (props.invalid && props.touched) {
        inputClasses.push('Invalid');
    }
    let options  = props.Options.map((option) => 
        <option value={option} key={option}>{option}</option>
        );
    return (<Fragment>
        <label >{props.LabelName}:</label>
        <select id={props.Name} 
        className={inputClasses.join(' ')}
        onChange={props.changed}>
            {options}
        </select>
        <br />
        <br />

    </Fragment>)
}
export default select;