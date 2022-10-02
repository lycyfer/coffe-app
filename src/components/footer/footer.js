import './footer.css'
import logo from '../../resources/mainImg/Vector2.svg'
import logoSecond from '../../resources/mainImg/VectorC.svg'
import {Link} from 'react-router-dom'

function Footer() {

    return(
        <div className="footer__link">
                <div className="footer__main__link">
                    <img src={logo} alt="" />
                    <Link className="menu_item__link" to="/" >Coffee house</Link>
                    <Link className="menu_item__link" to="/OurCoffe" >Our coffee</Link>
                    <Link className="menu_item__link" to="/ForYourPleasure" >For your pleasure</Link>
                </div>
                <div className="aboba">
                    <div className="footer__spawn__line"></div>
                     <img src={logoSecond} alt="" className="logo__second"/>
                    <div className="footer__spawn__line"></div>
                </div>
        </div>
    )
}

export default Footer