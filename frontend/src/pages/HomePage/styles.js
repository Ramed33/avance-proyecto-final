import styled from "styled-components";
import {Link} from "react-router-dom";

const TitleHome = styled.h1`
    font-size: 3rem;
    color: #010101;
    text-align: center;
    @media screen and (min-width: 1200px) {
    font-size: 5rem;
  }
`;

const HomeContainer = styled.article`
    background-color: #9c9c9c;
`;

const HomeButtonsContainer = styled.div`
    background-color: #f1f1f1;
    margin: auto;
    padding: 30px;
    border-radius: 5px;
    max-width: 30rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;    
`;

const HomeLink = styled(Link)`
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    color: #010101;
`;

export {
    TitleHome,
    HomeContainer,
    HomeButtonsContainer,
    HomeLink,
}