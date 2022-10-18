import React from "react";
import  image from "../assets/image/breath.png";
import Header from "../component/header";
import Footer from "../component/footer";
import "../component/header.css";
import "../App.css"

const Home=()=>{

    return(
        <>
        <Header/>
        <h1>lorem in the country are good for others</h1>
        <img src={image}></img>

        <Footer/>
        </>
    )
}
export default Home;