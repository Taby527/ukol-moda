import React from "react";
import { render } from "react-dom";
import "./style.css";
import Header from "./components/header/Header";
import Dresses from "./components/dresses/Dresses";
import Shoes from "./components/shoes/Shoes";
import Accessories from "./components/accessories/Accessories";
import Footer from "./components/footer/Footer";

const App = () => (
  <div className="container">
    <Header title="Móda" />
    <Dresses />
    <Shoes />
    <Accessories />
    <Footer year="2022" author="Czechitas" />
  </div>
);

render(<App />, document.querySelector("#app"));
