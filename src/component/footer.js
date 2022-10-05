import React from "react";
import mtnfooter from "../assets/image/mtn.png";
import visafooter from "../assets/image/visa.png";
import masterfooter from "../assets/image/mastercard.jpg";
import "./footer.css";

const Footer=()=>{
    const d = new Date();
let year=d.getFullYear()
    return(
        <div className="footer-container">
           <div className="logo-column">
              <h4>Logo</h4> 
              <h3 className="footer-title">Location</h3>
              <p>Street No. 12, Newyork 12,
                <span>info@Retailers'shop.com</span>
              </p>
               
           </div>
           <div className="contactus-column">
               <h3 className="footer-title">Contact-us</h3>
               <p>Kigali Rwanda</p>
               <p><a href="tel:+250-785-322-071">tel:+250-785-322-071</a>
               <a href="mailto:webmaste@example.com">retaliersshop.com</a>
               
               </p>
           </div>
           <div className="account-column">
               <h3 className="footer-title">My Account</h3>
               <p><a href="#">Login</a></p>
               <p><a href="#">Sign up</a></p>
               <p><a href="#">My Cart</a></p>
               <p><a href="#">About-us</a></p>
           </div>
           <div className="company-column">
               <h3 className="footer-title">Shop</h3>
               <p><a href="#">About Us </a></p>
               <p><a href="#">Retailers</a></p>
               <p><a href="#">partners</a></p>
               <p><a href="#">Orders</a></p>
           </div>
           <div className="company-column">
               <h3 className="footer-title">Terms and Condition</h3>
               <p><a href="#">Policies</a></p>
               <p><a href="#">Help center</a></p>
               <p><a href="#">privacy</a></p>
               <p><a href="#">Support</a></p>
            
           </div>
           
          <div className="logo-footer">
            
            </div>
            
           <h2>We Accept:</h2>
        
           <img src={mtnfooter} alt="logo footer" className="logo-img"/>
           <img src={visafooter} alt="logo footer" className="logo-img"/>
           <img src={masterfooter} alt="logo footer" className="logo-img"/>


<div className="copy">
           <p>copyright &copy;{year} Retailers Shop,Inc.All Rights Resrved{""}</p>
           </div>
           </div>

        
    )
}
export default Footer;
