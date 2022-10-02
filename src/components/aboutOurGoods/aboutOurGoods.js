import coffe from '../../resources/goodsPageImg/coffee-839233_1920.png'
import logoSecond from '../../resources/mainImg/VectorC.svg'
import {Link} from 'react-router-dom'
import { Component } from 'react'

import './aboutOurGoods.css'



class AboutOurGoods extends Component {

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
        const { buttonsData, term } = this.state;
        const elem = this.props.data.map(item => {
            console.log(item.name)
            return (
                <Link className='aboutOurGoods__list__item' to = "/3"> 
                    <img src={item.img} alt="" className='aboutOurGoods__photo' />
                    <div className='item__descr'>{item.name}</div>
                    <div className='item__country'>{item.country}</div>
                    <div className='item__value'>{item.value}</div>
                </Link>
            )
        })
        const btns = buttonsData.map(({ name, lable }) => {
            const active = this.props.filter === name;
            const clazz = active ? 'aboutOurGoods__button-light' : 'aboutOurGoods__button'
            return (
                <button className={clazz} onClick={() => this.props.onFilterSelect(name)}>{lable}</button>
            )
        })
        return (
            <div className="aboutOurGoods">
                <div className="aboutOurGoods__item">
                    <img className='aboutOurGoods__img' src={coffe} alt="" />
                    <div className='aboutOurGoods__modul'>
                        <div className='aboutOurGoods__title'>About our goods</div>
                        <div className='Popa'>
                            <div className="spawn__line_aboutOurGoods"></div>
                            <img src={logoSecond} alt="" className="logo__second" />
                            <div className="spawn__line_aboutOurGoods"></div>
                        </div>
                        <p className='aboutOurGoods__text'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible<br></br>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. .<br></br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br></br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face</p>
                    </div>
                </div>
                <div className='line'></div>
                <div className='filter'>
                    {/* <div className='aboutOurBeans__input'>
                        <div className='aboutOurBeans__lable'>Lookiing for</div>
                        <input onChange={this.onUpdateSearch} className='change__input' type="text" placeholder='start typing here...' />
                    </div> */}
                    {/* <div className='aboutOurBeans__filter'>
                        <div className='aboutOurBeans__lable'>Or Filter</div>
                    </div> */}
                </div>
                <div className='aboutOurGoods__list'>
                    {elem}
                </div>
            </div>
        )
    }


}


export default AboutOurGoods;