"use client";
import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {nameChange,selectName} from './GlobalState/Features/naming/nameSlice';
function Counter() {
    const value=useSelector(selectName);
    const dispatch=useDispatch();
    const [amount, setAmount] = useState(2);
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>dispatch(nameChange("Ahmet"))}>Gorece</button>
    </div>
  )
}

export default Counter