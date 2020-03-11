import React, { Component } from 'react';

import Buttons from '../../components/UI/Buttons/Buttons';
import Modal from '../../components/UI/Modal/Modal';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';

import './Register.css';

class Register extends Component {
     intialOrderForm =  {
        userId: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                LabelName: 'User ID',
                placeholder: 'Please enter your UserId'
            },
            validation: {
                required: true
            },
            value:'',
            valid: false,
            touched: false
        },
        orderQuantity: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                step:'0.1',
                LabelName: 'Order Quantity',
                placeholder: 'Please enter  Quantity for the Order'
            },
            validation: {
                required: true
            },
            value:'',
            valid: false,
            touched: false
        },
        priceKg: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                step:'0.1',
                LabelName: 'Price per Kg',
                placeholder: 'Please enter Price per Kg'
            },
            validation: {
                required: true
            },
            value:'',
            valid: false,
            touched: false
        },
        type: {
            elementType: 'select',
            elementConfig: {
                LabelName: 'Type',
                Options: ['Buy', 'Sell']
            },
            validation: {},
            value:'Buy',
            valid: true,
            touched: false
        }
    }
    formEleRef;
    state ={
    orderForm : JSON.parse(JSON.stringify(this.intialOrderForm)),
    formIsValid:false
}
    inputChangedHandler(event, inputIdentifier){
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }
    orderHandler = ( event ) => {
        event.preventDefault();
        if(this.state.formIsValid){
            this.props.formHandler(this.state.orderForm);
            this.formEleRef.reset();
            this.props.clicked();
            this.setState({orderForm:  JSON.parse(JSON.stringify(this.intialOrderForm)),formIsValid: false})
        }else{
            alert('Please enter the valid value in the form');
        }
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler} ref={(formElem)=>{this.formEleRef = formElem}}>
                {formElementsArray.map((formElement) => {
                    if (formElement.config.elementType === 'input') {
                        return (<Input
                            key={formElement.id}
                            LabelName={formElement.config.elementConfig.LabelName}
                            Name={formElement.id}
                            step = {formElement.config.elementConfig.step}
                            Type={formElement.config.elementConfig.type}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}></Input>
                        )
                    } else if (formElement.config.elementType === 'select') {
                        return (<Select
                            key={formElement.id}
                            LabelName={formElement.config.elementConfig.LabelName}
                            Name={formElement.id}
                            Options={formElement.config.elementConfig.Options}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                        )
                    } else {
                        return (<div></div>)
                    }
                })}
                <Buttons btnType="primary" disabled={!this.state.formIsValid} >Register</Buttons>
            </form>
        );
        return (
            <div className="floating-button">
                <Modal show={this.props.show} modalClosed={this.props.clicked}>
                    {form}
                </Modal>
                <Buttons btnType="" clicked={this.props.clicked} >Register An order</Buttons>
            </div>
        )
    }
}

export default Register;