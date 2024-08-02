"use client"
import { toast, ToastContainer } from 'react-toastify';
import style from './style.module.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiTeePipe } from "react-icons/gi";
import { SiRumble } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';
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
        <div className={`container m-auto ${style.mainCOnatiner}`}>
            <div className={style.flexBox}>
                <div>
                    <p className={style.joinMovement}>Join Our movement</p>
                    <form className={style.form} onSubmit={(e)=>handleSubmit(e)}>
                        <input className={style.input1} value={data.email} onChange={(e)=>onChangeHanler(e, "email")} type='email' placeholder='ENTER YOUR EMAIL'/>
                        <input className={style.input2} value={data.zip} onChange={(e)=>onChangeHanler(e, "zip")} type='text' placeholder='ZIP'/>
                        <button className={style.submit} disabled={!data.email && !data.zip} type='submit'><IoIosArrowRoundForward /></button>
                    </form>
                </div>
                <div>
                    <p className={style.joinMovement}>Follow us.</p>
                    <div className='flex gap-[0.4rem] items-center'>
                        <a className={style.socials} target='_blank' href='https://truthsocial.com/@realDonaldTrump'><GiTeePipe /></a>
                        <a className={style.socials} target='_blank' href='https://rumble.com/c/DonaldTrump'><SiRumble /></a>
                        {/* replace this with ourwtitter hanle */}
                        <a className={style.socials} target='_blank' href='https://twitter.com/TrumpWarRoom'><FaTwitter /></a>
                    </div>
                </div>
            </div>
            <hr className={'border-opacity-25 opacity-20 mb-[1rem]'}/>
            <div className={style.footer2}>
                <p className={style.paid}>paid for by Donald J Trump for president 2024, Inc.</p>
                <ul className={style.linkCOntainer}>
                    <Link href={'/'}>Privacy policy</Link>
                    <Link href={'/'}>Terms and conditions</Link>
                    <Link href={'/'}>Press</Link>
                    <Link href={'/'}>Careers</Link>
                    <Link href={'/'}>Powered by Nucleus</Link>
                </ul>
            </div>
            <p className={style.lastman}>The appearance of U.S. Department of Defense personnel or other visual information does not imply or constitute DoD endorsement.</p>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Index