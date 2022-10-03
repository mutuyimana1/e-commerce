import React from "react";
import "./header.css"



const Header = ()=>{
    return(
        <>
            <>
          <section className="Head" >
            <div className="container d-flex">
             <div className="left row">
                <i className="fa fa-phone"></i>
                <label>+250785214483</label>
                <i className="fa fa-envelope"></i>
                <label>XXX@gmail.com</label>
                </div>   
                <div className="right row RText">
                    <label>Theme FQ's</label>
                    <label>Need helps</label>
                    <span></span>
                    <label htmlFor="">EN</label>
                    <span></span>
                    <label htmlFor="">USD</label>
                </div>
            </div>
          </section>
            </>

            </>
    );
};
export default Header;