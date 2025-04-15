import {NavLink} from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer= styled.nav`
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const Image = styled.img`
    width: 4.5rem;
`;

export const NavbarLink = styled(NavLink)`
    color:#010101;
    font-size: 1.2rem;
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