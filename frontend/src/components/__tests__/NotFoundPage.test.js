import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import NotFoundPage from "../../pages/NotFoundPage";

  describe("Initial Page", () => {
    test('renders App', () => {
        const { getByText } = render(
          <Provider store={store}>
            <NotFoundPage />
          </Provider>
        );
      
        expect(getByText(/Page not found/i)).toBeInTheDocument();
    });
});