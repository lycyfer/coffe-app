import { Component } from "react";
import './header.css';
// import desk from '../../resources/mainImg/desk-791178_1920.png'
import logo from '../../resources/mainImg/Vector1.svg'
import logoSecond from '../../resources/mainImg/Vector.svg'
import {Link} from 'react-router-dom'

class Header extends Component {


    render() {
    
        return (
            <div className="header__block">
                <div className="link__items">
                    <div className="link__main">
                        <img src={logo} alt="" />
                        <Link className="menu_item" to="/" >Coffee house</Link>
                        <Link className="menu_item" to="/OurCoffe" >Our coffee</Link>
                        <Link className="menu_item" to="/ForYourPleasure" >For your pleasure</Link>
                    </div>
                </div>
                <div className="titi">
                    <h1 className="header__title">Everything You Love About Coffee</h1>
                    
                    <div className="aboba">
                        <div className="spawn__line"></div>
                         <img src={logoSecond} alt="" className="logo__second"/>
                        <div className="spawn__line"></div>
                    </div>
                    <p className="header__title__second">We makes every day full of energy and taste Want to try our beans?</p>
                </div>
                <button className="button__more">More</button>
            </div>
        )
    }
}

export default Header;