import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Layout from './componets/Layout'
import Home from './componets/Home'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Faculties from './componets/Faculties';
import FacultyDetail from './componets/FacultyDetail';
import FacultyAdd from './componets/FacultyAdd';
import FacultyEdit from './componets/FacultyEdit';
import About from './componets/About';
import Contact from './componets/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/faculties' element={<Faculties />}></Route>
          <Route path='/faculty/:id' element={<FacultyDetail />}></Route>
          <Route path='/faculty/add' element={<FacultyAdd />}></Route>
          <Route path='/faculty/edit/:id' element={<FacultyEdit />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter >
  </>
);

reportWebVitals();
