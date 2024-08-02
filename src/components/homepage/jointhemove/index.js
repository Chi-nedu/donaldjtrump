"use client"
import { toast, ToastContainer } from 'react-toastify';
import style from './style.module.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

function Index() {
    const notify = (message) => toast(message) 
    const [data, setdata] = useState({
        email: "",
        zip: ""
    })

    const onChangeHanler = (e, data1)=>{
        data1 === "email"? setdata({
            ...data, 
            email: e.target.value
        }):
        setdata({
            ...data, 
            zip: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        notify("You have successfully joined the Trump-Vance movement")
        setdata({
            email: "",
            zip: ""
        })
    }

  return (
    <div className={style.container}>
        <div className='container mx-auto'>
        <div className={style.container2}>
            <p className={style.joinMovement}>Join Our movement</p>
            <form className={style.form} onSubmit={(e)=>handleSubmit(e)}>
                <input className={style.input1} value={data.email} onChange={(e)=>onChangeHanler(e, "email")} type='email' placeholder='ENTER YOUR EMAIL'/>
                <input className={style.input2} value={data.zip} onChange={(e)=>onChangeHanler(e, "zip")} type='text' placeholder='ZIP'/>
                <button className={style.submit} disabled={!data.email && !data.zip} type='submit'><IoIosArrowRoundForward /></button>
            </form>
        </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Index