import { ActionCreators, store } from "@store";
import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { Provider, useDispatch } from "react-redux";
import "./styles.scss";
import { Footer } from "./components/core/footer/Footer";
import { Header } from "./components/core/header/Header";

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActionCreators.fetchRates(123));
  }, []);
  return <div>test</div>;
}

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer />
    </Provider>
  );
}

export default hot(App);
