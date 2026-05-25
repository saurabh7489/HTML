import {useState} from 'react'

const App = () => {
  let[count,SetCount]= useState(0)
  function fun1(){
    SetCount(++count)
  }
  return (
    <div>
<h2>{count}</h2>
<button oneClick={fun}>click</button>
    </div>
  )
}

export default App