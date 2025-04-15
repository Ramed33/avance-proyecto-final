import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { getProducts } from "../../state/shoppingProducts.slice";
import { fireEvent, store, render, screen, waitFor } from "../../app/mockedStoreWrapper";
import ShoppingProducts from "../ShoppingProducts/index"
import ProductItem from "../ProductItem";
import { Provider } from "react-redux";


const productData = {"id": 1, 
                     "price": 109.95
                    }  

const mock = new MockAdapter(axios);
const mockNetworkRequests = () => {
  mock.onGet("https://fakestoreapi.com/products").reply(200, productData);
};
const unMockNetworkRequests = () => {
  mock.resetHistory();
};

describe("Products slice", () => {
beforeEach(() => {
    mockNetworkRequests();
  });
afterEach(() => {
    unMockNetworkRequests();
  });

  it("should fetch a product", async () => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products`
    );
    expect(data).toEqual(productData);
  });
});

