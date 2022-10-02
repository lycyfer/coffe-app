import OurCoffeHeaderItem from "../ourCoffeHeaderItem/ourCoffeHeaderItem"
import AboutOurGoodsItem from "../aboutOurGoodsItem/aboutOurGoodsItem"
import Footer from "../footer/footer"

function TestFourth({ data }) {


    return (
        <div>
            <OurCoffeHeaderItem/>
            <AboutOurGoodsItem data = {data}/>
            <Footer/>
        </div>

    )
}

export { TestFourth }