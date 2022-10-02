import {Link} from 'react-router-dom';
import logo from '../../resources/mainImg/Vector1.svg'
import './ourGoodsHeader.css'

function OurGoodsHeader() {
        return(
            <div className="goodsHeader__block">
                <div className="goodsLink__items">
                    <div className="goodsLink__main">
                        <img src={logo} alt="" />
                        <Link className="menu_item" to="/" >Coffee house</Link>
                        <Link className="menu_item" to="/OurCoffe" >Our coffee</Link>
                        <Link className="menu_item" to="/ForYourPleasure" >For your pleasure</Link> 
                    </div>
                </div>
                <h1 className="goodsHeader__title">For your pleasure</h1>
            </div>
        )
    
}

export default OurGoodsHeader;