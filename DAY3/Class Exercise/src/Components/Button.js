// import '../Assets/Style.css';
import React,{useState} from 'react'
const Button=()=>
{
    const[data,setData]=useState(false)
    const handleShow=()=>
    {
        setData(!data)
    }
    return(
    <>
    <p>{data?'Hi!,How are you!':''}</p>
    <button onClick={handleShow} className={data?'Hide Component':'Show Component'}>Submit</button>
    </>
    );
}
export default Button;