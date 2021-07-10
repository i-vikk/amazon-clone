import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <nav className="header">
            
            {/* Amazon - Logo */}
            <Link to="/">
            <img className="header__logo"
            src="https://i.pinimg.com/564x/3f/fa/f1/3ffaf182c9aa11559e1592a50cf41718.jpg"
            alt="" />
            </Link>
            {/* Search-Box */}
            <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
            </div>
            
            {/* 3 Links */}
            <div className="header__nav">
            <Link to="/login" className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne">Hello Vivek</span>
            <span className="header__optionLineTwo">Sign In</span>
            </div>
            </Link>

            <Link to="/" className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span></div>
            </Link>
            <div>

            <Link to="/" className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo ">Prime</span>
            </div>
            </Link>
            </div>
            {/* Basket Icon with No.*/}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </Link>
            </div>
        </nav>
    )
}

export default Header
