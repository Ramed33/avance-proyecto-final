import styled from "styled-components";

const ContainerProduct = styled.article`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    background-color: #9c9c9c;
`;

const TitleProduct = styled.h1`
    padding: 1rem;
    font-size: x-large;
`;

export {
    ContainerProduct,
    TitleProduct
}