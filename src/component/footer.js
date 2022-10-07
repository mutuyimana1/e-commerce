import React from "react";
import mtnfooter from "../assets/image/mtn.png";
import visafooter from "../assets/image/visa.png";
import masterfooter from "../assets/image/mastercard.jpg";
import logfooter from "../assets/image/log.PNG";
import "./footer.css";

const Footer=()=>{
    const d = new Date();
let year=d.getFullYear()
    return(
        <div className="footer">
 <div className="footer-container">
           <div className="logo-column">
           <img src={logfooter} alt="logo footer" className="log-img"/><br></br>
               
           </div>
           <div className="contactus-column">
               <h3 className="footer-title">Contact-us</h3><br></br>
               <p>Kigali Rwanda</p>
               <p><a href="tel:+250-785-322-071">tel:+250-785-322-071</a></p>
               <p><a href="mailto:webmaste@example.com">info@retaliersshop.com</a></p>
               <p><a href="#">Street No. 12m Newyork 12,</a></p>
           </div>
           <div className="account-column">
               <h3 className="footer-title">My Account</h3><br></br>
               <p><a href="#">Login</a></p>
               <p><a href="#">Sign up</a></p>
               <p><a href="#">My Cart</a></p>
               <p><a href="#">About-us</a></p>
           </div>
           <div className="company-column">
               <h3 className="footer-title">Shop</h3><br></br>
               <p><a href="#">About Us </a></p>
               <p><a href="#">Retailers</a></p>
               <p><a href="#">partners</a></p>
               <p><a href="#">Orders</a></p>
           </div>
           <div className="company-column">
               <h3 className="footer-title">Terms and Condition</h3><br></br>
               <p><a href="#">Policies</a></p>
               <p><a href="#">Help center</a></p>
               <p><a href="#">privacy</a></p>
               <p><a href="#">Support</a></p>
            
           </div>
           
          {/* <div className="logo-footer">
            
            </div> */}
      
           </div>
           <div className="footer-logo">
        
            <h2>We Accept:</h2>
          
            
            <div className="logo-img-container">
            <img src={mtnfooter} alt="logo footer" className="logo-img"/>
           <img src={visafooter} alt="logo footer" className="logo-img"/>
           <img src={masterfooter} alt="logo footer" className="logo-img"/>
            </div>
         
            </div>
          

           <h6>copyright &copy;{year} Retailers Shop,Inc.All Rights Resrved{""}</h6>
        </div>
       
        
    )
}
export default Footer;
