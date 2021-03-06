import React,{useState} from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const toggleMode = ()=> {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const [mode, setMode] = useState('dark'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);},1000);
  }
  
  return (
    <>
    {/* <Router> */}
      <div style={{backgroundColor: mode==='dark'?'#042743':'white'}}  const componentDidMount= {document.body.style.backgroundColor = mode==='light'?'white':'#042743'}>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter text below to analyze" mode={mode}/>
          {/* <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}/> */}
          {/* <About  style={{backgroundColor: mode==='dark'?'#042743':'white'}}/> */}
          {/* <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}/>}/>
            <Route exact path="/about" element={<About  style={{backgroundColor: mode==='dark'?'#042743':'white'}}/>}/>
          </Routes> */}
        </div>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
