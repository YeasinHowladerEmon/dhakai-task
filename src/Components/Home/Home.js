import React from "react";
import MainSidebar from "../MainSidebar/MainSidebar";
import ProductNav from "../ProductNav/ProductNav";
import "../Share/AllStyle/Home.css";
import Product from "./Products";

const Home = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <ProductNav />
      <Product />
      </div>
    </>
  );
};

export default Home;
