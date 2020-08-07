import React from "react";
import Home from "./Home/";
import GlobalStyle from "./styles/global";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      
      <GlobalStyle />
      <Home></Home>
      <ToastContainer />
    </>
  );
}

export default App;
