import React, { useState } from 'react';
import ControlledPizzaForm from './components/ControlledPizzaForm';
import './App.css';

function App() {

  return (
    <div className="app">
      <p>My Pizza app</p>
       <ControlledPizzaForm />
    </div>
  );
}

export default App;