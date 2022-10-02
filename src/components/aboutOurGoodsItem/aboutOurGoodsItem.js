import coffe from '../../resources/goodsPageImg/coffee-839233_1920.png'
import logoSecond from '../../resources/mainImg/VectorC.svg'
import { Link } from 'react-router-dom'
import { Component } from 'react'

import './aboutOurGoodsItem.css'



class AboutOurGoodsItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            buttonsData: [
                { name: 'all', lable: 'all' },
                { name: 'Brazil', lable: 'Brazil' },
                { name: 'Kenya', lable: 'Kenya' },
                { name: 'Columbia', lable: 'Columbia' }
            ],
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({
            term: term
        })
        this.props.onUpdateSearch(term)
    }

    render() {
        // const { buttonsData, term } = this.state;
        const elem = this.props.data.map(item => {
            console.log(item.name)
            return (
                <div className="aboutOurGoodsItem__item">
                    <img className='aboutOurGoodsItem__img' src={item.img} alt="" />
                    <div className='aboutOurGoodsItem__modul'>
                        <div className='aboutOurGoodsItem__title'>About it</div>
                        <div className='Popa__item'>
                            <div className="spawn__line_aboutOurGoods"></div>
                            <img src={logoSecond} alt="" className="logo__second" />
                            <div className="spawn__line_aboutOurGoods"></div>
                        </div>
                        <div className='aboutOurGoodsItem__country'><span>Country: </span>{item.country}</div>
                        <div className='aboutOurGoodsItem__text'><span>Description: </span>{item.descr}</div>
                        <div className='aboutOurGoodsItem__value'><span>Price:</span>{item.value}</div>
                    </div>
                </div>
            )
        })
        return (
            <div className="aboutOurGoodsItem">
                {elem}
            </div>
        )
    }


}


export default AboutOurGoodsItem;