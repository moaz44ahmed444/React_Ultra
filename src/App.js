import React, { Component } from "react";
import Contact from "./Component/Contact"
import Index from "./Component/Index";
import Navbar from "./Component/Navbar"
import { BrowserRouter , Route , Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Index/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
     </BrowserRouter>
    );
  }
}

export default App;