import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './Pages/Home'
import TodoAdd from './components/TodoAdd'


function App() {

  return (
    <div className="App">
      <div><TodoAdd /></div>
      <div><Home /></div>
    </div>
  )
}

export default App;


