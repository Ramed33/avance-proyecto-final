import ProductItem from "../ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { TitleProduct, ContainerProduct } from "./styles";
import { useEffect } from "react";
import {getProducts} from '../../state/shoppingProducts.slice'
import StatusCode from "../../state/statusCode";

const ShoppingProducts = () => {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    if (status === StatusCode.LOADING){
        return <p>Loading...</p>
    }

    if (status === StatusCode.ERROR){
        return <p>Something went wrong!!! Try again later</p>
    }

    return (
        <article>
            <TitleProduct>Products</TitleProduct>
            <ContainerProduct>
                {
                    products.map(product => (
                        <ProductItem 
                            key={product.id} 
                            data={product}
                        />
                    ))
                }
            </ContainerProduct>
        </article>
    )
}

export default ShoppingProducts;