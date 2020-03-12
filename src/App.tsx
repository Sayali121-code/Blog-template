import React from "react";
import { Provider } from "react-redux";
import "./App.scss";
import { store } from "./store/index";
import { Routes } from "./Routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
