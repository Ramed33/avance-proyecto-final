import { BuyProduct, PriceProduct, ImageProduct, SectionProduct, TitleProduct } from "./styles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/shoppingCart.slice";

const ProductItem = ({data}) => {
    let {id, image, title, price} = data;
    const dispatch = useDispatch();

    return (
    <SectionProduct>
        <ImageProduct src={image} alt={title}/>
        <TitleProduct>{title}</TitleProduct>
        <PriceProduct>$ {price}</PriceProduct>
        <BuyProduct onClick={() => dispatch(addToCart({id, image, title, price}))}>Add</BuyProduct>
    </SectionProduct>
    );
};

export default ProductItem;