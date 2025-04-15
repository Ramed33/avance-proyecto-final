import styled from "styled-components";
import {NavLink} from "react-router-dom";

const ContainerCart = styled.article`
    display: flexbox;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    background-color: #9c9c9c;
    margin: auto;
    color: #010101;
    padding: 1rem;
`;

const CartEmpty = styled.h1`
    color: #010101;
    padding: 1rem;
    font-size: 2rem;
`;

const CartInfo = styled.h3`
    color: #010101
    font-weight: 400;
`;

const ClearCart = styled.button`
    width: 50%;
    margin: 1% auto;
    display: block;
    border-radius: 15px;
    cursor: pointer;
    background-color: #f1f1f1;
    font-size: 1.5rem;
    font-weight: 500;
`;

const NavbarLink = styled(NavLink)`
    color:#010101;
    font-size: 1.8rem;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    &:hover,
    &:focus{
        color: #f1f1f1;
    }
    &:active{
        color: red;
    };
`;

export {
    ContainerCart,
    CartEmpty,
    CartInfo,
    ClearCart,
    NavbarLink
}