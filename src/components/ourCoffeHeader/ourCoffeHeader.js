// import { Component } from "react";
import {Link} from 'react-router-dom';
import logo from '../../resources/mainImg/Vector1.svg'
import './ourCoffeHeader.css'

function OurCoffeHeader() {
        return(
            <div className="coffeHeader__block">
                <div className="coffelink__items">
                    <div className="coffelink__main">
                        <img src={logo} alt="" />
                        <Link className="menu_item" to="/" >Coffee house</Link>
                        <Link className="menu_item" to="/OurCoffe" >Our coffee</Link>
                        <Link className="menu_item" to="/ForYourPleasure" >For your pleasure</Link> 
                    </div>
                </div>
                <h1 className="coffeheader__title">Our Coffe</h1>
            </div>
        )
    
}

export default OurCoffeHeader;