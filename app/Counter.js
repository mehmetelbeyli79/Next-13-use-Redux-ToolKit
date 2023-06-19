"use client";
import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {incrementByAmount,increment,decrement, selectCount} from './GlobalState/Features/counter/counterSlice';
import {selectName} from './GlobalState/Features/naming/nameSlice';
function Counter() {
    const value=useSelector(selectCount);
    const isim=useSelector(selectName);
    const dispatch=useDispatch();
    const [amount, setAmount] = useState(2);
  return (
    <div>
        <h1>{value}</h1>
        <h1>{isim}</h1>
        <button onClick={()=>dispatch(increment())}>Arttır</button>
        <button onClick={()=>dispatch(decrement())}>Azalt</button>
        <button onClick={()=>dispatch(incrementByAmount(amount))}>Gorece</button>
    </div>
  )
}

export default Counter