import styled from "styled-components";

const ContainerCartItem = styled.article`
    box-sizing: border-box;
    background-color: #f1f1f1;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
`;

const ImageCartItem = styled.img`
    width: 150px;
    height: 200px;
    margin: 1% auto;
    display: block;    
`;


const TitleCartItem = styled.h4`
    text-align: center;
`;

const PriceCartItem = styled.h5`
    text-align: center;
`;

const TitleCartQuantity = styled.h3`
    text-align: center;
`;

const TitleCartTotalPrice = styled.h3`
    text-align: center;
`;

const RemoveProduct = styled.button`
    width: 20%;
    margin: auto;
    display: block;
    border-radius: 20px;
    cursor: pointer;
    background-color: #f0f8ff;
    font-weight: 500;
`;

const ButtonContainer = styled.div`
    width: 18%;
    margin: auto;
    padding: 1rem;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ButtonPlus = styled.button`
    cursor: pointer;
    border-radius: 20px 0 0 20px;
    background-color: #9c9c9c;
    font-size: 1rem;
`;

const ButtonMinus = styled.button`
    cursor: pointer;
    border-radius: 0 20px 20px 0;
    background-color: #9c9c9c;
    font-size: 1rem;
`;

const ButtonRemove = styled.button`
    cursor: pointer;
    background-color: #9c9c9c;
    font-size: 1rem;
`;

export {
    ContainerCartItem, 
    ImageCartItem,
    TitleCartItem,
    PriceCartItem,
    RemoveProduct,
    ButtonContainer,
    ButtonPlus,
    ButtonMinus,
    ButtonRemove,
    TitleCartQuantity,
    TitleCartTotalPrice,    
}