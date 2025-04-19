import { useState } from 'react';
import './App.css';
import Home from './Home';
import Courses from './courses';
import Apply from './applay';
import Teachers from './techers';
import About from './about';

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [show, setshow] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home show={show} setshow={setshow} />} />
        <Route path='/courses' element={<Courses show={show} setshow={setshow} />} />
        <Route path='/apply' element={<Apply />} />
        <Route path="/teachers" element={<Teachers show={show} setshow={setshow} />} />
        <Route path="/about" element={<About show={show} setshow={setshow} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
