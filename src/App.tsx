import React from "react";
import { hot } from "react-hot-loader/root";
import "./styles.scss";
import { Icon, Img, Svg } from "@components";

function App() {
  return (
    <div>
      <Img name="test.jpeg" />
      <Icon name="home" />
      <Svg href="test.svg" />
    </div>
  );
}

export default hot(App);
