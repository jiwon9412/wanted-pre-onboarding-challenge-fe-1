import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Join from "./pages/Join";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/join' element={<Join />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
