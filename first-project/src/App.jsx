import Navigation from "./components/Navigation";
import SideNav from "./components/SideNav";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import "./App.css"
import Child from "./components/FromChildToParent/Parent";
import Parent from "./components/FromParentToChild/Parent";
import UseStateHook from "./components/useStateHook/useStateHook";
import UseEffectHook from "./components/UseEffectHook/UseEffectHook";
import UseReducerHook from "./components/UseReducerHook.jsx/UseReducerHook";
import UseRefHook from "./components/UseRefHook/UseRefHook";

function App() {
  function clickMe(){
    console.log('hey!!!');
  }
  const array = [1, 2, 3, 4, 5, 6, 7];
  return(
    <>
    <div>
    {/* <UseStateHook/> */}
    {/* <UseEffectHook/> */}
    <UseReducerHook/>
    <UseRefHook/>
      {/* <Navigation/> */}
      <div className="main_container"> 
      {/* <SideNav/>
      <MainSection/>
      <MainSection/>
      <MainSection/>
      <MainSection/>
      <MainSection/>
      <MainSection/> */}
      </div>
      {/* <Footer/>
      <Child/>
      <Parent/> */}
    </div>
    <div>
      Second Parent
      {/* checking js code execution directly in jsx */}
      {/* <h2 onClick={() => {
        console.log('Hi');
      }}> Click </h2> */}
      {/* <h1 onClick={clickMe}>
        ClickMe!
      </h1> */}
      
      {/* <ul>
        {array.map((value, index) => (
            <li key={index}> {value} </li>
          ))}
      </ul> */}
      
    </div>
    </>
  )
}

export default App;