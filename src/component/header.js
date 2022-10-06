import React, { useState } from "react";
import "./header.css";
import {Link} from "react-router-dom"
import user from "../assets/user.png";
import cart from "../assets/cart.png";
import order from "../assets/order.png";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const Header = ()=>{
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '30rem',
    height:"40px",
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '',
      border:'1px solid black',
      
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
    // const [MobileMenu,setMobileMenu]=useState(false)
    return(
        <>
            <>
          <section className="Head" >
            <div className="container d-flex">  
                <div className="right row RText">
                    <label>Theme FQ's</label>
                    <label>Need helps</label>
                    <span></span>
                    <label htmlFor="">EN</label>
                    <span></span>
                    <label htmlFor="">USD</label>
                </div>
                <div className="left row">
                <i className="fa fa-phone"></i>
                <label>+250785214483</label>
                <i className="fa fa-envelope"></i>
                <label>XXX@gmail.com</label>
                </div> 
            </div>
          </section>
            </>
          {/* ---------------------Navbar-------------- */}
          <header className="header">
            <div className="navbar">
                <div className="Logo">
                  <h3>RetailerShop</h3>
                </div>
                <section className="Search">
                 <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <button className="search-btn">Search</button>
          </Search>
          </section>
          <div className="icon">
          <a href="#"><img src={user}></img><h4>Login</h4></a> 
          <a href="#"><img src={cart}></img><h4>Cart</h4></a>
          <a href="#"><img src={order}></img><span></span><h4 >order</h4></a>
          </div>           
          
            </div>
            <ul className="links-container">
              <li className="link-item"><a href="#" className="link">Home</a></li>
              <li className="link-item"><a href="#" className="link">ContactUs</a></li>
              <li className="link-item"><a href="#" className="link">Shipping</a></li>
            </ul>
          </header>
       
            </>
    );
};
export default Header;