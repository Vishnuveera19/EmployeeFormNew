import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layoutcomp from './components/Layoutcomp';
import ServiceCard from './components/servicecard';
import BasicDateCalendar from './NAttendance/Nattendance';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
     <Route path="/" element={<App/>}>
     <Route path="/" element={<Layoutcomp/>}/>
     <Route path='/home' element={<ServiceCard/>}></Route>
     <Route path='/calendar' element ={<BasicDateCalendar/>}></Route> 
     
     </Route>
   </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
