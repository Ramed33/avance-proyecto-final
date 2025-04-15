import styled from "styled-components";

const RegisterContainer = styled.article`
    gap: 1rem;
    background-color: #9c9c9c;
    color: #010101;
`;

const Form = styled.form`
    background-color: #010101;
    margin: auto;
    padding: 30px;
    border-radius: 5px;
    width: var(--container-width-md);
    max-width: 30rem;
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
        color: var(--color-bg-variant);
    }

    &:valid {
        font-size: 1rem;
        color: var(--color-bg-variant);
    }
`;

const FormTitle = styled.h1`
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RegisterButton = styled.button`
    margin: auto;
    display: block;
    margin-top: 1rem;
    font-size: 1.25rem;
    padding: 1rem;
    border-radius: 3px;
    background-color: #f1f1f1;
    cursor: pointer;
`;

export {
    RegisterContainer,
    Form,
    FormInput,
    FormTitle,
    RegisterButton,
}