import telka from '../../resources/coffePageImg/girl-865304_1920.jpg'
import logoSecond from '../../resources/mainImg/VectorC.svg'
import {Link} from 'react-router-dom'
import { Component } from 'react'

import './aboutOurBeans.css'


class AboutOurBeans extends Component {

    constructor(props) {
        super(props)
        this.state = {
            buttonsData: [
                {name: 'all', lable: 'all'},
                {name: 'Brazil', lable: 'Brazil'},
                {name: 'Kenya', lable: 'Kenya'},
                {name: 'Columbia', lable: 'Columbia'}
            ],
            term: '',
            id: 0
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
        const {buttonsData} = this.state;
        const elem = this.props.data.map(item => {
            return (
                <Link className='aboutOurGoods__list__item' to="/1" onClick={(e) => this.props.deleteItem(item.id ,e.preventDefault)}> 
                    <img src={item.img} alt="" className='aboutOurGoods__photo' />
                    <div className='item__descr'>{item.name}</div>
                    <div className='item__country'>{item.country}</div>
                    <div className='item__value'>{item.value}</div>
                    <div>{item.id}</div>
                </Link>
            )
        })
        const btns = buttonsData.map(({name, lable}) => {
            const active = this.props.filter === name;
            const clazz =  active ? 'aboutOurBeans__button-light' : 'aboutOurBeans__button' 
            return (
                <button className={clazz} onClick={() => this.props.onFilterSelect(name)}>{lable}</button>
            )
        })
        return (
            <div className="aboutOurBeans">
                <div className="aboutOurBeans__item">
                    <img className='aboutOurBeans__img' src={telka} alt="" />
                    <div className='aboutOurBeans__modul'>
                        <div className='aboutOurBeans__title'>About our beans</div>
                        <div className='Popa'>
                            <div className="spawn__line_aboutOurBeans"></div>
                            <img src={logoSecond} alt="" className="logo__second" />
                            <div className="spawn__line_aboutOurBeans"></div>
                        </div>
                        <p className='aboutOurBeans__text'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br></br>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.<br></br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br></br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face</p>
                    </div>
                </div>
                <div className='line'></div>
                <div className='filter'>
                    <div className='aboutOurBeans__input'>
                        <div className='aboutOurBeans__lable'>Lookiing for</div>
                        <input onChange={this.onUpdateSearch} className='change__input' type="text" placeholder='start typing here...' />
                    </div>
                    <div className='aboutOurBeans__filter'>
                        <div className='aboutOurBeans__lable'>Or Filter</div>
                        {btns}
                    </div>
                </div>
                <div className='aboutOurBeans__list'>
                    {elem}
                </div>
            </div>
        )
    }

   
}


export default AboutOurBeans;