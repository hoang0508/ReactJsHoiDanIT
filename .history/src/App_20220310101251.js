// import logo from "./logo.svg";
import "./App.css";
import "react-image-lightbox/style.css";
// import AddNewProduct from "./components/Form/AddNewProduct";
import Product from "./components/Products/Product";
// import Home from "./components/TodoApp/Home";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Navigation/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
      {/* <AddNewProduct /> */}
    </>
  );
};

export default App;
