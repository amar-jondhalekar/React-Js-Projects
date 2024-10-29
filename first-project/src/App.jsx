import Navigation from "./components/Navigation";
import SideNav from "./components/SideNav";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return(
    <div>
      <Navigation/>
      <div className="main_container">
      <SideNav/>
      <MainSection/>
      <MainSection/>
      <MainSection/>
      <MainSection/>
      <MainSection/>
      <MainSection/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;