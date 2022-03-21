// import logo from "./logo.svg";
import "./App.css";
import "react-image-lightbox/style.css";
// import AddNewProduct from "./components/Form/AddNewProduct";
import Product from "./components/Products/Product";
// import Home from "./components/TodoApp/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Navigation/Nav";

const App = () => {
  return (
    <>
      <Nav />
      {/* <AddNewProduct /> */}
      <Product />
    </>
  );
};

export default App;
