// import  from 'react'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/Authentication/SignIn";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
