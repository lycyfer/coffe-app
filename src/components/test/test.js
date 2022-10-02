import Header from "../header/header";
import AboutUS from "../aboutUs/aboutUs";
import OurBest from "../ourBest/ourBest";
import Footer from "../footer/footer";


function Test({data}) {
  
    return (
      <div className="App">
        <Header/>
        <AboutUS/>
        <OurBest data = {data}/>
        <Footer/>
      </div>
    )
  }
  
  export {Test};