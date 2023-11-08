import {BadgeCheck} from 'lucide-react';
import React,{useState} from 'react';
import {toast, Toaster } from 'react-hot-toast';

import '../Assets/style1.css';
const Form1=()=>{
    const [form,setForm]=useState({
        name:'Krithi',
        email:'abc12@gmai.com',
        phone:7418918448,
        username:'Krithika',
        password:'2124'

    })
    const handlechange=(e)=>{
        setForm({...form,[e.target.id]:e.target.value})
        console.log('event triggered')
       
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(form)
        toast.success('Successfully Registered!')
    }
    return(
        <>
      
                <h1 align="center">STUDENT DETAILS</h1>
            <form className="f1" onSubmit={(handlesubmit)}>
                <input type= "text" name="name" id="name" placeholder="Name" className="fx1" onChange={handlechange}  value={form.name}/>
                <input type= "email" name="" id="email" placeholder="Email" className="fx1" onChange={handlechange} value={form.email}/>
                <input type= "number" name="" id="phone" placeholder="Phone" className="fx1" onChange={handlechange} value={form.phone}/>
                <input type= "password" name="" id="password" placeholder="Password" className="fx1" onChange={handlechange} value={form.password}/>
                   
                   <button className='mybtn' type="submit" onClick={handlesubmit}><BadgeCheck /> Register </button>
        
            </form>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>

        </>
    )
}
export default Form1;