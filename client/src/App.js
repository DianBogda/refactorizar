import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from './views/Main';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Main />} />
        <Route path="/product/:_id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
