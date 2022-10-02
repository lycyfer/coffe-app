import './ourBest.css'

const OurBest = ({ data }) => {
    const elem = data.map(item => {
        console.log(item.name)
        if(item.best === true) {
            return (
                <div className='ourBest__list__item'>
                    <img src={item.img} alt="" className='chandgeIMG' />
                    <div className='item__descr'>{item.name}</div>
                    <div className='item__value'>{item.value}</div>
                </div>
    
            )
        } else {
            return console.log('hi')
        }
        
    })
    return (
        <div className='ourBest'>
            <h2 className='ourBest__title'>Our Best</h2>
            <div className='outBest__list'>
                {elem}
            </div>
        </div>

    )
}
export default OurBest