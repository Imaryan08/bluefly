import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./components/Context";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <ChakraProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ChakraProvider>
      </Context>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();