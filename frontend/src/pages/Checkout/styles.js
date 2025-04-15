import styled from "styled-components";
import {NavLink} from "react-router-dom";

const CheckoutContainer = styled.article`
    gap: 1rem;
    background-color: #9c9c9c;
    color: #010101;
`;

const TitleCheckout = styled.h1` 
`;

const SubTitleCheckout = styled.h2` 
`;

const PCheckout = styled.p`
    font-size: x-large;
    font-weight: normal;
`;

const Form = styled.form`
    background-color: #010101;
    margin: auto;
    padding: 30px;
    border-radius: 5px;
    max-width: 21rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
`;

const FormInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 3px;
    background-color: #FFFFFF;
    color: #010101;

    &::placeholder {
        font-size: 1rem;
    }

    &:valid {
        font-size: 1rem;
    }
`;

const FormTitle = styled.h1`
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CheckoutButton = styled.button`
    margin: auto;
    display: block;
    margin-top: 5rem;
    font-size: 2rem;
    padding: 2rem;
    background-color: #f1f1f1;
    border-radius: 15px;
`;

const NavbarLink = styled(NavLink)`
    color:#010101;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    &:hover,
    &:focus{
        color: blue;
    }
    &:active{
        color: red;
    };
`;

export {
    CheckoutContainer,
    TitleCheckout,
    SubTitleCheckout,
    PCheckout,
    Form,
    FormInput,
    FormTitle,
    CheckoutButton,
    NavbarLink,
}