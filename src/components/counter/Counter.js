import React,{useState} from 'react'

function Counter() {
    let [count , setcount] = useState(0);
    const increment = ()=>{
        count ++;
        setcount(count)
    }
    var reset = () =>{
        setcount(0);
    }
    var decrement = () =>{
        count--;
        setcount(count)
        
    }
  return (
    <div>
        <h3>{`Count is: ${count}`}</h3>
        <button onClick={increment}>Button1(add) </button>
        <button onClick={reset}>Button2(equal to) </button>
        <button onClick={decrement}>Button3(subtract) </button>
    </div>
  )
}

export default Counter