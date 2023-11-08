import '../Assets/style.css';
import React,{useState} from 'react'
const Statebool=()=>
{
    const[data,setData]=useState(false)
    const handleShow=()=>
    {
        setData(!data)
    }
    return(
    <>
    <p>{data? "Hi!":" "}</p>
    <button onClick={handleShow} className={data?'green':'red'}>Submit</button>
    </>
    );
}
export default Statebool;