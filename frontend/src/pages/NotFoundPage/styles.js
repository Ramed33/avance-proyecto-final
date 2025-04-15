import styled from "styled-components";

const TitleNotFound = styled.h1`
    font-size: 2rem;
    color: #010101;
    text-align: center;
    @media screen and (min-width: 1200px) {
    font-size: 5rem;
  }
`;

const NotFoundContainer = styled.article`
    background-color: #9c9c9c;
`;

export {
    TitleNotFound,
    NotFoundContainer,
}