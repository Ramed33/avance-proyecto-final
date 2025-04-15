import "@testing-library/jest-dom";
import { render } from "../../app/mockedStoreWrapper";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Checkout from "../../pages/Checkout"

describe("Initial Page", () => {
    test('renders App', () => {
        const { getByText } = render(
          <Provider store={store}>
            <Checkout />
          </Provider>
        );
      
        expect(getByText(/Shopping cart summary/i)).toBeInTheDocument();
    });
});