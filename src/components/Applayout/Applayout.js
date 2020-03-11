
import React, { Fragment } from 'react';

import './Applayout.css';
import Header from  '../Header/Header.js';

const applayout = (props) => {
    return (
        <Fragment>
            <Header></Header>
            <div>
               { props.children}
            </div>
        </Fragment>
    )
}
export default applayout;