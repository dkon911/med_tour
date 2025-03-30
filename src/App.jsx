import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}


export default App
