import React from 'react'
import {useState} from 'react'
const Statestring=()=>
{
    const[data,setData]=useState("Hello")
    const handleGreet=()=>{
        setData("Hi")
        console.log("State updated")
    }
    return(
        <>
        <p>{data}</p>
        <button onClick ={handleGreet}>Greet!</button>
        </>
    );
}
export default Statestring;