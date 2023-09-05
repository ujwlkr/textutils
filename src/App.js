import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React, { useState } from "react";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(7 34 61)";
      showalert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success"); //yha pe success capital me nhi likh skte shi se nhi chlta
    }
  };
  return (
    <>
      {/* <Navbar title="Textutils2" aboutText="About Textutils"/> */}
      {/* <Navbar title="Textutils2" /> */}
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />} /> 
          {/*always a good idea to use exact*/}
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <Textform
                  showalert={showalert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
