
import './App.css';
import Navbar from './Navbar';
import { useState } from 'react';
import Password from './Password';
import Textform from './Textform';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // const [alert, setalert] = useState()
  // const showAlert =(message,type)=>{
    // setalert({
    //   msg:message,
    //   type:type
    // })
    // setTimeout(()=>{
    //   setalert(null);}
    //   ,1500
    // );

  // }
  const [mode, setmode] = useState("light")
  const togglemode=()=>{
    if (mode === "dark"){
      setmode("light");
      document.body.style.backgroundColor ="white"
      document.body.style.color ="black"
document.body.style.transition="0.4s"
      document.getElementById("textarea").style.backgroundColor ="white"
      document.getElementById("textarea").style.color="black"
      // showAlert()

      // setalert({
      //   msg:"Light mode has enabled",
      //   type:"success"
      // })
    }
    else {
      setmode("dark"); 
      // showAlert()
      document.body.style.backgroundColor ="rgb(4,4,31)"
      document.body.style.color ="white"
      document.body.style.transition="0.4s"
      document.getElementById("textarea").style.backgroundColor="rgb(34, 33, 33)"
      document.getElementById("textarea").style.color="white"
      // setalert({
      //   msg:"Dark mode has enabled",
      //   type:"success"
      // })

    }
  }
    return ( 
      <BrowserRouter>
        <Navbar title = {"Textutils"} home ='Home' mode = {mode} togglemode ={togglemode}  />       
        <div className="lertDiv container"></div>
        {/* <Navbar title = {"Textutils"} home ='Home' mode = {mode} togglemode ={togglemode} showAlert = {showAlert } />       
        <div className="lertDiv container"></div> */}
        <Routes>
              {/* <Route path='/Home' home ="Main" element ={<Home/>}></Route> */}
              <Route exact path="/" element={<Textform title= "Props from main file i.e App.js" />} />
              <Route exact path="/Textform" element={<Textform title= "Props from main file i.e App.js" />} />
              {/* <Route exact path="/Textform" element={<Textform title= "Props from main file i.e App.js" showAlert = {showAlert }/>} /> */}
              <Route exact path="/Password" element={<Password />} />
        </Routes>
      </BrowserRouter>
    );
}
export default App;