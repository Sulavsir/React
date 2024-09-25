import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import "./components/styles/footer.css"

function App() {
  return (
   <div className='App'>
    <Outlet />
   </div>
  );
}

export default App;
