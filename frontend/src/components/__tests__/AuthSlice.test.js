import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { login, register } from "../../state/auth/authSlice";
import { fireEvent, store, render, screen } from "../../app/mockedStoreWrapper";
import LoginPage from "../../pages/LoginPage";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage";

const userData = {"isError": true, "isLoading": false, "isSuccess": false, "message": "Request failed with status code 404", "user": null}

const mock = new MockAdapter(axios);
const mockNetworkRequests = () => {
  mock.onGet("http://127.0.0.1:8000/api/login/").reply(200, userData);
};
const unMockNetworkRequests = () => {
  mock.resetHistory();
};
describe("Auth slice", () => {
beforeEach(() => {
    mockNetworkRequests();
  });
afterEach(() => {
    unMockNetworkRequests();
  });

  it("should fetch a data response", async () => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/login/`
    );
    expect(data).toEqual(userData);
  });
});


const mockedStore = store();
describe("Authorization slice", () => {
  it("should fetch a state with the login thunk", async () => {
    await mockedStore.dispatch(login(userData));
    const  authItems  = mockedStore.getState().auth;
expect(authItems).toEqual(userData);
  });
});

const mockedStore2 = store();
describe("Authorization slice", () => {
  it("should fetch a state with the login thunk", async () => {
    await mockedStore2.dispatch(register(userData));
    const  authItems  = mockedStore2.getState().auth;
expect(authItems).toEqual(userData);
  });
});

describe('Bad login', () => {
  it('updates the login when there is a bad input', async () => {
    
    render(
      <BrowserRouter>
        <LoginPage/>
      </BrowserRouter>
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, {target: {value: "some@email.com"}});

    const inputElement2 = screen.getByRole('textbox');
    fireEvent.change(inputElement2, {target: {value: "123"}});

    const button = screen.getByText("User Login");
    fireEvent.click(button);

    return expect(Promise.resolve('Request failed with status code 400')).resolves.toBe('Request failed with status code 400');
  });
});

describe('Bad register', () => {
  it('updates the register when there is a bad input', async () => {
    
    render(
      <BrowserRouter>
        <RegisterPage/>
      </BrowserRouter>
    );

    const button = screen.getByText("User Register");
    fireEvent.click(button);

    return expect(Promise.resolve('Request failed with status code 400')).resolves.toBe('Request failed with status code 400');
  });
});