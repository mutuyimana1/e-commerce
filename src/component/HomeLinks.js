import React from 'react';
// import photo from "../images/cart-image.JPG";
import header from "../component/styles/homelinks.css";

const HomeLinks = () => {

    return (
        <>
            <div className="Box-container">
                <div className='links-container'>
                    <div>
                        <ul className="links-list">

                            <button> <li className="btn"><a href="/Home" className="link">All Categories</a></li></button>
                            <li className="alink"><a href="/electronics" className="link">Electonics</a>
                                <span className='angle-right-icon'><i class="fa-solid fa-angle-right"></i></span>
                            </li>
                            <li className="alink"><a href="/decor" className="link">Decorations </a>
                                <span className='angle-right-icon'><i class="fa-solid fa-angle-right"></i></span>
                            </li>
                            <li className="alink"><a href="/men" className="link">Men's Clothing </a>
                                <span className='angle-right-icon'><i class="fa-solid fa-angle-right"></i></span>
                            </li>
                            <li className="alink"><a href="/women" className="link">Women's Clothing</a>
                                <span className='angle-right-icon'><i class="fa-solid fa-angle-right"></i></span>
                            </li>
                            <li className="alink"><a href="/baby" className="link">Baby Toys</a>
                                <span className='angle-right-icon'><i class="fa-solid fa-angle-right"></i></span>
                            </li>
                            <li className="alink"><a href="/sports" className="link">Sports</a>
                                <span className='angle-right-icon'><i class="fa-solid fa-angle-right"></i></span>
                            </li>
                            <button> <li className="btn"><a href="/Home" className="link">More</a></li></button>

                        </ul>
                    </div>

                    <div style={{ width: "70%" }}>
                        <img className='cart-image' ></img>
                    </div>

                </div>

            </div>
        </>
    )
}
export default HomeLinks