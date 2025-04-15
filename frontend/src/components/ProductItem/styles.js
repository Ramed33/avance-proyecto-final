import styled from "styled-components";

const SectionProduct = styled.section`
    background-color: #f0f0f0;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
`;

const ImageProduct = styled.img`
    width: 200px;
    height: 200px;
    margin: 1% auto;
    display: block;    
`;

const TitleProduct = styled.h4`
    text-align: center;
    font-size: medium;
    font-weight: 500;
`;

const PriceProduct = styled.p`
    text-align: center;
    text-justify:distribute;
    font-size: small;
    font-weight: 700;
`;

const BuyProduct = styled.button`
    width: 50%;
    margin: 1% auto;
    display: block;
    border-radius: 20px;
    cursor: pointer;
    background-color: #9c9c9c;
    font-weight: 500;
`;

export {
    SectionProduct,
    ImageProduct,
    TitleProduct,
    PriceProduct,
    BuyProduct
}