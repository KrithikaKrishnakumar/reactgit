
import React from 'react'
import {useState} from "react";
const Statenum=()=>
{
    const [data,setData]=useState(0)
    const handleReduce=()=>
    {
        setData(data-1)
    }
    const handleAdd =()=>{
        setData(data+1)
    }
return(
    <>
    <button onClick={handleReduce}>-</button>
    <button>{data}</button>
    <button onClick={handleAdd}>+</button>
    </>
);
}
export default Statenum