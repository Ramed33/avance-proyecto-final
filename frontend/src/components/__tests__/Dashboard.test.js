import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Dashboard from "../../pages/Dashboard";

  describe("Initial Page", () => {
    test('renders App', () => {
        const { getByText } = render(
          <Provider store={store}>
            <Dashboard />
          </Provider>
        );
      
        expect(getByText(/Please Login/i)).toBeInTheDocument();
    });
});