import {useState} from 'react'
import home from './home'
const App = () => {
  const[count,setCount]= useState(0)
  function fun1(){
    setCount(count+1)
  }
  function fun2(){
    setCount(count -1)
  }
  return (
    <div>
<h2>{count}</h2>
<button onClick={fun1} >click+</button>
<button onClick={fun2}>click-</button>
<style>
 
</style>
    </div>
  )
}

export default App;