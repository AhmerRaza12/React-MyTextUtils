
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import React,{useState} from 'react'
import Textform from './components/Textform';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="#363333eb";
      showalert("Dark mode has been enabled","success");
      document.title="Textutils- Dark mode";
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white";
      showalert("Light mode has been enabled","success")
    }
  }
  return (
     <>
{/* /* //     <Router> */}
     
<Navbar title="TextUtils" mode={mode} togglemode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
          {/* {/* <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={} */}
            <Textform showalert={showalert}heading="Enter your text below" mode={mode}/> 
          {/* </Route>
         </Routes> */}
</div>
    {/* // </Router> */}
    </>
  );
}

export default App;
