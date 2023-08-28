import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm" ;
import React from "react";


function App() {

  const [ mode, setMode] = useState('light');
  const [ alert, setAlert] = useState(null);


  const showAlert=(message, type)=>{
    setAlert({
      
      msg:message,
      type:type
    })
    setTimeout(() => {
       showAlert(null);
    }, 3000);

  }
  

  const toggleMode = () => {
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='black' ;
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtil - Dark mode" ;

      
    } else {
      setMode('light');
      document.body.style.backgroundColor='white' ;
      showAlert("Light mode has been enabled","success")
      
      document.title="TextUtil - light mode"
    }
  }
  return (
      <>
   
      
      <Navbar title="TextUtil" mode={ mode } toggleMode={toggleMode} />
       <Alert alert = {alert}/>
      <div className="container my-3" >
            {/* <About /> */}
          
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={ mode }/> 
         
      </div>
    
      </>
    
  );
}

export default App;
