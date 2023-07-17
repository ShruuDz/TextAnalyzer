// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import NameForm from './components/NameForm';
// import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react';

// import { Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    },1000);
  }

  // const removeBodyClass = () =>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-info')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  // }

  const toggleMode = () =>{
    // toggleMode = (cls)
    // removeBodyClass();
    // document.body.classList.add('bg-'+cls)

    if (mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#243743';
      showAlert("Dark Mode Enable","danger");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light Mode Enable","info");
    }
  }

  return (
   <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-5">
      {/* <Routes> */}

         {/* <Route exact path='/' element={ */}
         <TextForm heading="Enter Your Text to Analyze" mode={mode} showAlert={showAlert} />
         {/* } /> */}
        {/* <Route exact path='/home' element={
        <TextForm heading="Enter Your Text to Analyze" mode={mode} showAlert={showAlert} />} /> */}
        {/* <Route exact path='/about' element={<About mode={mode}/>} /> */}
      {/* </Routes> */}
    </div>
  </>

  );
}

export default App;
