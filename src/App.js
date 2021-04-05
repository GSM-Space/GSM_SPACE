import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Provider } from "mobx-react";
import stores from "stores";

const App = () => {
  return (
    <Provider store={stores}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
