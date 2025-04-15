import React, { useState } from "react";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { CheckoutButton, CheckoutContainer, Form, FormInput, FormTitle, NavbarLink, PCheckout, TitleCheckout } from "./styles";

const Checkout = () => {
    const cart = useSelector(state=>state.cart.itemList);
    const [show] = useState(false);

    const [formaddress, setFormAddress] = useState(false);
    
    const [address, setAddress] = useState({
        address: "",
        stat: "",
        city:"",
    })

    const [formpay, setFormPay] = useState(false);

    const [pay, setPay] = useState({
        firstname: "",
        lastname: "",
        payment:"",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Address", address);
        console.log("Form Payment", pay);
        console.log("FormAddress", formaddress);
        console.log("FormPay", formpay);
    }

    const handleAddressInput = (e) => {
        setAddress({...address, address: e.target.value})
    }

    const handleStateInput = (e) => {
        setAddress({...address, stat: e.target.value})
    }

    const handleCityInput = (e) => {
        setAddress({...address, city: e.target.value})
    }

    const handleFirstNameInput = (e) => {
        setPay({...pay, firstname: e.target.value})
    }

    const handleLastNameInput = (e) => {
        setPay({...pay, lastname: e.target.value})
    }

    const handlePaymentInput = (e) => {
        setPay({...pay, payment: e.target.value})
    }

    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 500);
    }

    return (
        <CheckoutContainer>
            <div>
                <TitleCheckout>Shopping cart summary</TitleCheckout>
                <PCheckout>Total items: {cart.reduce((acumulador,actual) => acumulador + actual.quantity, 0)}</PCheckout>
                <PCheckout>Total due: {(cart.reduce((acumulador,actual) => acumulador + actual.totalPrice, 0)).toFixed(2)}</PCheckout>
            </div>
            <div>
                <FormTitle>Shipping address</FormTitle>
                <Form onSubmit={handleSubmit}>
                    <FormInput type="text" id="address" name="address" 
                           placeholder="Your address.." onChange={handleAddressInput}
                           value={address.address}>
                    </FormInput>
                    <FormInput type="text" id="state" name="state" 
                           placeholder="Your state.." onChange={handleStateInput}
                           value={address.stat}>
                    </FormInput>
                    <FormInput type="text" id="city" name="city" 
                           placeholder="Your city.." onChange={handleCityInput}
                           value={address.city}>    
                    </FormInput>
                    <FormInput type="submit" value="Set address"
                           onClick={()=>setFormAddress(Swal.fire
                                                            ({
                                                             title: "Confirm address?",
                                                             text: "Are you sure?",
                                                             icon: "warning",
                                                             showDenyButton: "No",
                                                             showCancelButton: true,
                                                            }).then(answer=>{
                                                                if (answer.isConfirmed){
                                                                    Swal.fire("Address confirmed", "success")
                                                                    console.log(answer.value)
                                                                }else if (answer.isDenied){
                                                                    Swal.fire("Address not confirmed", "info")
                                                                    console.log(answer)
                                                                }else {
                                                                    Swal.fire("Error", "Ocurrió algo inesperado", "error")
                                                                    console.log(answer)
                                                                }
                                                             })
                                                             )}>
                    </FormInput>   
                </Form>    
            </div>
            <div>
                <FormTitle>Payment method</FormTitle>
                <Form onSubmit={handleSubmit}>
                    <FormInput type="text" id="fname" name="firstname" 
                           placeholder="Your name.." onChange={handleFirstNameInput}
                           value={pay.firstname}>
                    </FormInput>
                    <FormInput type="text" id="lname" name="lastname" 
                           placeholder="Your last name.." onChange={handleLastNameInput}
                           value={pay.lastname}>
                    </FormInput>
                    <FormInput type="text" id="payment" name="payment" 
                           placeholder="Your payment.." onChange={handlePaymentInput}
                           value={pay.payment}>
                    </FormInput>
                    <FormInput type="submit" value="Submit"
                           onClick={()=>setFormPay(Swal.fire
                            ({
                                title: "Confirm payment?",
                                text: "Are you sure?",
                                icon: "warning",
                                showDenyButton: "No",
                                showCancelButton: true,
                               }).then(answer=>{
                                   if (answer.isConfirmed){
                                       Swal.fire("Payment confirmed", "success")
                                       console.log(answer.value)
                                   }else if (answer.isDenied){
                                       Swal.fire("Payment not confirmed", "info")
                                       console.log(answer)
                                   }else {
                                       Swal.fire("Error", "Ocurrió algo inesperado", "error")
                                       console.log(answer)
                                   }
                                })
                                )}>
                    </FormInput>  
                </Form>    
            </div>
            {
            !show && formaddress && formpay &&  
            address.address && address.stat && address.city &&
            pay.firstname && pay.lastname && pay.payment &&
            <div>
                <CheckoutButton>
                    <NavbarLink to={{pathname:"/postcheckout"}} onClick={refreshPage}>Confirm purchase</NavbarLink>    
                </CheckoutButton>    
            </div>
            }        
        </CheckoutContainer>
        
    );
};

export default Checkout;