import React from 'react'
import NavBar from './NAVBAR'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Task from './Task'


function App() {
  return (
    <div>
      <NAVBAR/>
      <Routes>
        <Route path="/"   element={<Home/>}/>
         <Route path="/about"   element={<About/>}/>
          <Route path="/task"   element={<Task/>}/>
      </Routes>
      
    </div>
  )
}

export default App