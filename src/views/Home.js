import React from "react";
import image from "../assets/image/breath.png";
import Header from "../component/header";
import Footer from "../component/footer";
import "../component/header.css";
import "../App.css";
import HomeLinks from "../component/HomeLinks";
import { Outlet } from "react-router-dom";
import HomeProduct from "../component/HomeProduct";

const Home = () => {
  return (
    <>
      <h1 className="home-h1">OUR PRODUCTS That We Provide:</h1>
      <HomeProduct />
      <h1 className="home-h1">OUR FEATURES PRODUCTS:</h1>
      <HomeProduct />
    </>
  );
};
export default Home;
