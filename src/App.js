import React from "react";
import {Slide,Dashboard,ChatManagement,Statistic,Settings} from './Components'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter >
     <Slide>
     <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/dashboard" element={<Dashboard />}/> 
      <Route path="/statistic" element={<Statistic />}/> 
      <Route path="/chat" element={<ChatManagement />}/> 
      <Route path="/settings" element={<Settings />}/> 
     </Routes>
     </Slide>
     </BrowserRouter>
    </>
  );
}

export default App;
