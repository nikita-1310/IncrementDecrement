import { useState } from 'react'
import './Increment.css'
const Increment = () => {
    const [val, setVal] = useState(0);

    const incr =()=>{
        setVal(val + 1)

    }
    const decr =()=>{
        setVal(val -1)
    }

  return (
    <>
        <div className="header">
            <h1>Increment / Decrement Using <span>useState Hook</span></h1>
        </div>
        <div className="ans">
            <h2>{val}</h2>
        </div>
        <div className="button">
            <button className='btn1' onClick={incr}>+</button>
            <button className='btn2' onClick={decr}>-</button>
        </div>
        
    </>
  )
}

export default Increment