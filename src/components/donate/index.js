"use client"
import style from './style.module.css'
import MainLayout from '../layout/mainLayout'
import Image from 'next/image'
import Socials from '../homepage/socials'
import { RiCheckboxBlankFill } from "react-icons/ri";
import { FaBtc, FaClipboard, FaCopy, FaDollarSign } from 'react-icons/fa';
import { FaLitecoinSign } from 'react-icons/fa6'
import { IoCopy, IoCopyOutline } from 'react-icons/io5'
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';


const initialValues = {
  amount: 0,
  processing_fee: false,
  donate_once: false,
  donate_one_more: false,
  copied: "",
  first_name: "",
  last_name: "",
  email: "",
  address: '',
  Zip: "",
  city: "",
  state: "",
  Mlbile: "",
  retired: false,
  employer: "",
  Occupation: "",
  
}

function Index() {
  const notify = (message) => toast(message) 

  const [form, setform] = useState(initialValues)

  const copyToClipBoard = (data)=>{
    setform({...form, copied: data})
    if (data ===  "ltc") {
      console.log("MQtAsySVJBstEyDpy6LVkGAgdxoRykhH6a")
    } else if (data === "btc") {
      console.log("3BbuxqfJXEDBgGaB11ECnDDCbEhu3PhBsM")
    } else if (data === "usdt") {
      console.log("0x1dA72619fEDd7c600BFA9d1CEaFf19C1dbFBf537")
    }

    // form here copy thedata top users clipboard
  }

  const submitofrm = (e) =>{
    e.preventDefault()
    

    setform(initialValues)
    notify("Thanks for your donation, you would receive a confirmation email, once your donation is confirmed")
  }
  return (
    <MainLayout>
        <ToastContainer />

      <div className='container px-[1rem] py-[5rem] m-auto'>
        <div className='relative w-full aspect-video max-w-[40rem] m-auto'>
          <Image  
            src={'/images/trump.png'}
            alt=''
            fill/>
        </div>
        <div className='relative w-full aspect-square max-w-[40rem] m-auto'>
          <Image  
            src={'/images/donald.png'}
            alt=''
            fill/>
        </div>
        <h1 className={style.deleft}>The Left thinks that if they bury me with enough witch hunts and intimidate my family and associates that I’ll eventually throw up my hands and give up on our America First movement.</h1>
        <h2 className={style.deleft}>Let me be as clear as possible:</h2>
        <p className={style.never}>I WILL NEVER STOP FIGHTING FOR YOU.</p>
        <p className={style.deleft}>As the never-ending witch hunts heat up, please make a contribution to defend the MAGA movement:</p>
        <div className={style.Image2}>
          <Image  
            src={'/images/sign.png'}
            alt=''
            fill/>
        </div>
        <p className={style.deleft}>Donald J. Trump 45th President of the United States</p>
        <p className={style.never2}>SAVE AMERICA!</p>
        <div>
          {/* the query below should depend on what we are doing okay */}
          <button className={`${style.buttons} ${form.amount === 20.24? style.bgBlack: undefined}`} onClick={()=>setform({...form, amount: 20.24})}>$20.24 - CLICK THIS AMOUNT IF YOU&apos;RE SUPPORTING PRESIDENT TRUMP IN 2024!</button>
          <button className={`${style.buttons} ${form.amount === 47 ? style.bgBlack: undefined}`} onClick={()=>setform({...form, amount: 47})}>$47 - DONATE THIS AMOUNT IF YOU THINK DONALD J. TRUMP IS THE GREATEST PRESIDENT OF ALL TIME!</button>
          <button className={`${style.buttons} ${form.amount === 100? style.bgBlack: undefined}`} onClick={()=>setform({...form, amount: 100})}>$100</button>
          <button className={`${style.buttons} ${form.amount === 250 ? style.bgBlack: undefined}`} onClick={()=>setform({...form, amount: 250})}>$250</button>
          <button className={`${style.buttons} ${form.amount === 500 ? style.bgBlack: undefined}`} onClick={()=>setform({...form, amount: 500})}>$500</button>
          <button className={`${style.buttons} ${form.amount === 1000 ? style.bgBlack: undefined}`} onClick={()=>setform({...form, amount: 1000})}>$1,000</button>
          <button className={`${style.buttons} ${form.amount === 3300 ? style.bgBlack: undefined}`} onClick={()=>setform({...form, amount: 3300})}>$3,300</button>
          <input className={style.input2} type='text' value={form.amount} onChange={(e)=>setform({...form, amount: e.target.value})} placeholder='other'/>
          <p className={style.paragraph}>Your contribution will benefit Trump National Committee JFC.</p>
          {/* ////////////////////////////////////////////////////////// */}
          <div className={`${style.kamala} ${form.processing_fee? style.unkamala: undefined}`} >
            <label>
              <div className={style.inLine}>
                <input className='inline' checked={form.processing_fee} onChange={()=>setform({...form, processing_fee: !form.processing_fee})} type='checkbox'/>
                <p  className='text-[var(--dark-blue)] text-[0.8rem] inline'>I would like to cover the processing fee so 100% of my donation goes to Trump National Committee JFC</p>
              </div>
            </label>
          </div>
          <div className={style.inLine}>
            
            <p className='inline text-center'><RiCheckboxBlankFill className='inline'/> 𝐅𝐑𝐎𝐌 𝐓𝐑𝐔𝐌𝐏: 𝐏𝐋𝐄𝐀𝐒𝐄! 𝐎𝐍𝐋𝐘 𝐁𝐄𝐂𝐀𝐔𝐒𝐄 𝐎𝐅 𝐘𝐎𝐔 𝐖𝐄’𝐕𝐄 𝐌𝐀𝐃𝐄 𝐈𝐓 𝐓𝐇𝐈𝐒 𝐅𝐀𝐑. 𝐈𝐓 𝐖𝐈𝐋𝐋 𝐁𝐄 𝐁𝐄𝐂𝐀𝐔𝐒𝐄 𝐎𝐅 𝐘𝐎𝐔 𝐓𝐇𝐀𝐓 𝐖𝐄 𝐖𝐈𝐍 𝐁𝐀𝐂𝐊 𝐓𝐇𝐄 𝐖𝐇𝐈𝐓𝐄 𝐇𝐎𝐔𝐒𝐄! 𝐂𝐀𝐍 𝐈 𝐂𝐎𝐔𝐍𝐓 𝐎𝐍 𝐘𝐎𝐔𝐑 𝐒𝐔𝐒𝐓𝐀𝐈𝐍𝐄𝐃 𝐒𝐔𝐏𝐏𝐎𝐑𝐓?</p>
          </div>
          <div className='flex justify-center items-center flex-wrap gap-2'>
              <button onClick={()=>setform({...form, donate_once: true})} className={`${style.btn2} ${form.donate_once === true? style.bgRed: undefined}`}>Yes, count me in!</button>
              <button onClick={()=>setform({...form, donate_once: false})} className={`${style.btn2} ${form.donate_once === false? style.bgRed: undefined}`}>No, donate once.</button>
          </div>
          <p className={`underline ${style.paragraph}`}>Make this a monthly recurring donation </p>
          {/* the div below has an isertion */}
          <div className={`${style.kamala} ${form.donate_one_more? style.unkamala: undefined}`}>
            <label>
            <div className={style.inLine}>
              <input className='inline' checked={form.donate_one_more} onChange={()=>setform({...form, donate_one_more: !form.donate_one_more})} type='checkbox'/>
              <h1 className='inline'>⬅️ 𝐊𝐀𝐌𝐀𝐋𝐀 𝐉𝐔𝐒𝐓 𝐑𝐀𝐈𝐒𝐄𝐃 $𝟐𝟓𝟎 𝐌𝐈𝐋𝐋𝐈𝐎𝐍, 𝐁𝐔𝐓 𝐅𝐄𝐀𝐑 𝐍𝐎𝐓! 𝐈 𝐀𝐌 𝐃𝐎𝐍𝐀𝐋𝐃 𝐓𝐑𝐔𝐌𝐏. 𝐖𝐈𝐓𝐇 𝐘𝐎𝐔𝐑 𝐒𝐔𝐏𝐏𝐎𝐑𝐓, 𝐖𝐄 𝐖𝐈𝐋𝐋 𝐌𝐀𝐊𝐄 𝐀𝐌𝐄𝐑𝐈𝐂𝐀 𝐆𝐑𝐄𝐀𝐓 𝐀𝐆𝐀𝐈𝐍! 𝐓𝐇𝐄 𝐃𝐄𝐌𝐎𝐂𝐑𝐀𝐓 𝐂𝐎𝐍𝐕𝐄𝐍𝐓𝐈𝐎𝐍 𝐁𝐄𝐆𝐈𝐍𝐒 𝐎𝐍 𝐀𝐔𝐆𝐔𝐒𝐓 𝟏𝟗𝐓𝐇. 𝐖𝐈𝐋𝐋 𝐘𝐎𝐔 𝐏𝐋𝐄𝐃𝐆𝐄 𝐓𝐎 𝐃𝐎𝐍𝐀𝐓𝐄 𝐎𝐍𝐄 𝐌𝐎𝐑𝐄 𝐓𝐈𝐌𝐄 𝐓𝐎 𝐌𝐀𝐊𝐄 𝐈𝐓 𝐎𝐔𝐑 𝐁𝐄𝐒𝐓 𝐅𝐔𝐍𝐃𝐑𝐀𝐈𝐒𝐈𝐍𝐆 𝐃𝐀𝐘 𝐄𝐕𝐄𝐑?</h1>
            </div>
            <p className='w-full block text-[0.7rem] pt-[1rem] text-[var(--dark-blue)]'>Donate same amount as above same day of next month</p>
          
            </label>
          </div>
          <div>
            <p className={`${style.headerThing}`}>Make payment of ${form.amount} into any of the following wallets</p>
            <div className='py-[1rem] shadow-lg rounded-lg p-[1rem] relative overflow-hidden'>
              <p  className={style.crypto}>BTC <FaBtc className={style.icon1}/></p>
              <p onClick={()=>copyToClipBoard("btc")} className={style.copyDOct}><IoCopy className={form.copied === "btc"? style.copied: undefined}/> 3BbuxqfJXEDBgGaB11ECnDDCbEhu3PhBsM</p>
            </div>
            <div className='py-[1rem] shadow-lg rounded-lg p-[1rem] relative overflow-hidden'>
              <p className={style.crypto}>LTC <FaLitecoinSign className={style.icon1}/></p>
              <p onClick={()=>copyToClipBoard("ltc")} className={style.copyDOct}><IoCopy className={form.copied === "ltc"? style.copied: undefined}/> MQtAsySVJBstEyDpy6LVkGAgdxoRykhH6a</p>
            </div>
            <div className='py-[1rem] shadow-lg rounded-lg p-[1rem] relative overflow-hidden'>
              <p className={style.crypto}>USDT <FaDollarSign className={style.icon1}/></p>
              <p onClick={()=>copyToClipBoard("usdt")} className={style.copyDOct}> <IoCopy className={form.copied === "usdt"? style.copied: undefined}/>0x1dA72619fEDd7c600BFA9d1CEaFf19C1dbFBf537</p>
            </div>
          </div>

          <form className={style.form12} onSubmit={(e)=>submitofrm(e)}>
            <p className={`${style.headerThing}`}>Enter your contact information</p>
            <div className={style.formSubmit}>
              <div className={`${style.borderb}`}>
                <input type='text' value={form.first_name} onChange={(e)=>setform({...form, first_name: e.target.value})} placeholder='First Name*'/>
                <input value={form.last_name} onChange={(e)=>setform({...form, last_name: e.target.value})} className={`${style.borderl}`} type='text' placeholder='Last Name*'/>
              </div>
              <input value={form.email} onChange={(e)=>setform({...form, email: e.target.value})} className={`${style.borderb} py-[0.2rem] pl-[0.5rem]`} type='email' placeholder='Email*'/>
              <div className={`${style.borderb}`}>
                <input value={form.address} onChange={(e)=>setform({...form, address: e.target.value})} type='text' placeholder='Address*'/>
                <input value={form.Zip} onChange={(e)=>setform({...form, Zip: e.target.value})} type='text' className={`${style.borderl}`} placeholder='Zip*'/>
              </div>
              <div className={`${style.borderb}`}>
                <input value={form.city} onChange={(e)=>setform({...form, city: e.target.value})} type='text' placeholder='City*'/>
                <input value={form.state} onChange={(e)=>setform({...form, state: e.target.value})} type='text' className={`${style.borderl}`} placeholder='State*'/>
              </div>
              <input value={form.Mlbile} onChange={(e)=>setform({...form, Mlbile: e.target.value})} className={`py-[0.2rem] pl-[0.5rem]`}  type='tel' placeholder='Mobile*'/>
              
            </div>
            <p className={style.consent}>By providing your phone number, you are consenting to receive calls and recurring SMS/MMS messages, including autodialed and automated calls and texts, to that number from each of the participating committees in Trump National Committee JFC Inc. (“TNC”), a joint fundraising committee of Donald J. Trump for President 2024, Inc. (“DJTFP”), the principal campaign committee of Donald J. Trump, and the Republican National Committee (“RNC”). Msg & data rates may apply. Terms & conditions/privacy policy apply. <a target='_blank' href={"https://txtterms.co/88022-2/"}>txtterms.co/88022-2</a></p>
            <p className={style.consent}>Campaign finance law requires us to collect your employment information.</p>
            <div className={`${style.kamala} text-center ${form.retired? style.unkamala: undefined}`}>

            <label>
              <div className={style.inLine}>
                <input className='inline' checked={form.retired} onChange={()=>setform({...form, retired: !form.retired})} type='checkbox'/>
                <p className='text-red-600 text-[1rem] font-[600] inline'>I'm retired</p>
              </div>
            </label>
          </div>
            {!form.retired && <div className={style.formSubmit}>
                <input value={form.employer} onChange={(e)=>setform({...form, employer: e.target.value})} type='text' className={`py-[0.5rem] pl-[0.5rem] `} placeholder='Employer*'/>
                <input value={form.Occupation} onChange={(e)=>setform({...form, Occupation: e.target.value})} type='text' className={`py-[0.5rem] pl-[0.5rem] ${style.borderl}`} placeholder='Occupation*'/>
              </div>}
          {/* put the drypto details below so that we can work with that now */}
            <input type='submit' className={style.submit_button} disabled={form.amount < 1 || !form.first_name || !form.last_name || !form.email || !form.address || !form.Zip || !form.city || !form.state || !form.Mlbile } value={'Donate'}/>
            <p className={style.consent}>By clicking "Donate" I accept WinRed's <a href='https://winred.com/terms/donor-terms/' target='_blank'>terms of use</a> and <a href='https://winred.com/privacy' target='_blank'>privacy policy</a>.</p>
          </form>
          
            <p className={style.paragraph}>By providing your phone number, you are consenting to receive calls and recurring SMS/MMS messages, including autodialed and automated calls and texts, to that number from each of the participating committees in Trump National Committee JFC Inc. (“TNC”), a joint fundraising committee of Donald J. Trump for President 2024, Inc. (“DJTFP”), the principal campaign committee of Donald J. Trump, and the Republican National Committee (“RNC”). Msg & data rates may apply. Terms & conditions/privacy policy apply. <a target='_blank' className='text-red-600 underline font-[600]' href={"https://txtterms.co/88022-2/"}>txtterms.co/88022-2</a></p>
            <p className={style.paragraph}>Contributions or gifts to TNC are not tax deductible. All contributions are subject to the limits and prohibitions of the Federal Election Campaign Act. Contributions from corporations, foreign nationals (i.e., without “green cards”), federal government contractors, and other federally impermissible sources are strictly prohibited. Contributions made in the name of, or refunded by, any other person are unlawful.</p>
            <p className={style.paragraph}>By contributing you understand and acknowledge that the recipient committees may use your contributed funds for any reason, as determined in their sole discretion, consistent with their obligations under federal election law. No statement contained in any solicitation should be reasonably understood or construed as a promise, earmark, or other designation to make any specific use of funds you contribute.</p>
            <p className={style.paragraph}>Contributions to TNC are subject to federal contribution limits and source prohibitions. Contributions from corporations, foreign nationals (i.e., without “green cards”), federal government contractors, and other federally impermissible sources are prohibited. Contributions made in the name of, or refunded by, any other person are prohibited by law.</p>
            <p className={style.paragraph}>Contributions to TNC from individuals (multicandidate PACs) will be allocated according to the following formula:</p>
            <p className={style.paragraph}>1. 90% to DJTFP, which will designate the funds first to its general election account and then to its recount account, up to a maximum of $3,300 ($5,000) per election; and</p>
            <p className={style.paragraph}>2. 10% to the RNC, up to a maximum of $413,000 ($150,000) per year.</p>
            <p className={style.paragraph}>Any contribution exceeding the legal amount that may be contributed to any committee will be distributed to the remaining participating committee to the extent permitted by federal law and according to the allocation method set forth above. Any contribution that would cause a contributor to exceed any applicable federal contribution limit or otherwise not be permissible under FECA and FEC regulations will be refunded to the contributor. Contributors may specify a different allocation than the one set forth above.</p>
            <p className={style.paragraph}>Federal law requires us to use our best efforts to collect and report the name, mailing address, occupation, and name of employer of each individual whose aggregate contributions exceed $200 in an election cycle or calendar year, as applicable.</p>
            <p className={style.paid}>Paid for by Trump National Committee JFC, a joint fundraising committee of Donald J. Trump for President 2024, Inc. and the Republican National Committee.</p>
            <p className={`${style.headerThing} text-center w-full`}>Contributions to WinRed are not deductible as charitable donations for federal income tax purposes.</p>
            <p className={`${style.headerThing}`}>Contribution rules</p>
            <ul className={style.listLast}>
              <li>I am a U.S. citizen or lawfully admitted permanent resident (i.e., green card holder).</li>
              <li>This contribution is made from my own funds, and funds are not being provided to me by another person or entity for the purpose of making this contribution</li>
              <li>I am making this contribution with my own personal credit card and not with a corporate or business credit card or a card issued to another person.</li>
              <li>I am at least eighteen years old. I am not, nor am I making this contribution on behalf of, a corporation, labor organization, national bank, foreign national without a green card, a federal contractor, or any other federally impermissible source.</li>
            </ul>
        </div>

      </div>
      <Socials/>
    </MainLayout>
  )
}

export default Index



  