import {useDispatch,useSelector} from "react-redux"
import { onIncreament,onDecreament } from "./counterSlice"
import { useState } from "react"

const CounterView =()=>{

    const [numberIncrement,setIncrementNumber] = useState(1)
    const [numberDecrement,setDecrementNumber] = useState(1)
    const dispatch = useDispatch()

    const counterData = useSelector((state)=>state.counter.numOfCount)
    return (
        <div>
            <h1>COUNTER :{counterData}</h1>
            <div>
            <input value={numberIncrement} onChange={(e)=>setIncrementNumber(e.target.value)} type="number"/>
            <button onClick={()=>dispatch(onIncreament(parseInt(numberIncrement)))}>Click me to Increase the number</button>
            </div>
            <div>
            <input value={numberDecrement} onChange={(e)=>setDecrementNumber(e.target.value)} type="number"/>
            <button onClick={()=>dispatch(onDecreament(parseInt(numberDecrement)))}>Click me to Decrease the number</button>
            </div>
        </div>
    )
}

export default CounterView