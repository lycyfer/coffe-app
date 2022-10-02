

import OurCoffeHeader from "../ourCoffeHeader/ourCoffeHeader"
import AboutOurBeans from "../aboutOurBeans/aboutOurBeans"
import Footer from "../footer/footer";

function TestSecond({ data, onUpdateSearch, filter, onFilterSelect, deleteItem }) {


    return (
        <div>
            <OurCoffeHeader />
            <AboutOurBeans data={data} onUpdateSearch = {onUpdateSearch} filter = {filter} onFilterSelect = {onFilterSelect} deleteItem = {deleteItem}/>
            <Footer />
        </div>

    )
}

export { TestSecond }