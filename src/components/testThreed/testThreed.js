
import OurGoodsHeader from "../ourGoodsHeader/ourGoodsHeader"
import AboutOurGoods from "../aboutOurGoods/aboutOurGoods"
import Footer from "../footer/footer";


function TestThreed({ data, onUpdateSearch, filter, onFilterSelect }) {


    return (
        <div>
            <OurGoodsHeader />
            <AboutOurGoods data={data} onUpdateSearch = {onUpdateSearch} filter = {filter} onFilterSelect = {onFilterSelect}/>
            <Footer />
        </div>

    )
}

export { TestThreed }