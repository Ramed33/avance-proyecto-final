import React from "react";
import { PostCheckoutContainer, SubTitleCheckout, TitleCheckout } from "./styles";

const PostCheckout = () => {
    
    return (
        <PostCheckoutContainer>
                <TitleCheckout>Thank you for shopping at  Bodega Web</TitleCheckout>
                <SubTitleCheckout>We are currently processing your order to send it to the address you indicated.</SubTitleCheckout>    
        </PostCheckoutContainer>
        
    );
};

export default PostCheckout;