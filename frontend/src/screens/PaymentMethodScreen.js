import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../Components/CheckoutSteps';

export default function PayementMethodScreen(props){
    const cart=useSelector((state)=>state.cart);
    const {shippingAddress}=cart;
    if(!shippingAddress.address){
        props.history.push('/shipping');
    }
    const [paymentMethod,setPaymentMethod]=useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    };
    return(
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div>
                        <input type="radio" id="Paypal" value="Paypal" name="paymentMethod" requiredd onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                        <label htmlFor="paypal">Paypal</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" id="Indian Bank" value="Indian Bank" name="paymentMethod" requiredd onChange={(e)=>setPaymentMethod(e.target.value)}></input>
                        <label htmlFor="Indian Bank">Indian Bank</label>
                    </div>
                    <div>
                        <button className="primmary block" type="submit">Continue</button>
                    </div>
                </div>
            </form>
        </div>
    )
}