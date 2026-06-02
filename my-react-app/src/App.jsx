import React from 'react'
import './app2.css'
const App = () => {
  return (
    <div>
        <div id='nav'>
        <Link to="/">
            <li>home</li>
            </Link>
           <Link to="/about"> <li>about</li> 
           </Link>
            <Link to="/task"> <li>task</li>
            </Link>
        </div>
    </div>
  )
}

export default App