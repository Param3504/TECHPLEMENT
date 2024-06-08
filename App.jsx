
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header";
import Quotes from "./Components/Quotes";

import './App.css'
import FetchItems from "./Components/FetchData";

function App() {

  

  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      <Quotes ></Quotes>
     
    </>
  )
}

export default App
