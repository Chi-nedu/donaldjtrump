"use client"
import style from './style.module.css'
import MainLayout from '../layout/mainLayout'
import Image from 'next/image'
import Socials from '../homepage/socials'

function Index() {
  return (
    <MainLayout>
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
          <button className={`${style.buttons} ${false? style.bgBlack: undefined}`}>$20.24 - CLICK THIS AMOUNT IF YOU'RE SUPPORTING PRESIDENT TRUMP IN 2024!</button>
          <button className={`${style.buttons} ${false? style.bgBlack: undefined}`}>$47 - DONATE THIS AMOUNT IF YOU THINK DONALD J. TRUMP IS THE GREATEST PRESIDENT OF ALL TIME!</button>
          <button className={`${style.buttons} ${false? style.bgBlack: undefined}`}>$100</button>
          <button className={`${style.buttons} ${false? style.bgBlack: undefined}`}>$250</button>
          <button className={`${style.buttons} ${false? style.bgBlack: undefined}`}>$500</button>
          <button className={`${style.buttons} ${false? style.bgBlack: undefined}`}>$1,000</button>
          <button className={`${style.buttons} ${true? style.bgBlack: undefined}`}>$3,300</button>
          <input className={style.input2} type='text' placeholder='other'/>
          <p className={style.paragraph}>Your contribution will benefit Trump National Committee JFC.</p>
          {/* ////////////////////////////////////////////////////////// */}
          <div className={`${style.kamala} ${false? style.unkamala: undefined}`}>
            <label>
              <div className={style.inLine}>
                <input className='inline' type='checkbox'/>
                <p className='text-[var(--dark-blue)] text-[0.8rem] inline'>I would like to cover the processing fee so 100% of my donation goes to Trump National Committee JFC</p>
              </div>
            </label>
          </div>
          <div className={style.inLine}>
            
            <p className='inline text-center'><RiCheckboxBlankFill className='inline'/> 𝐅𝐑𝐎𝐌 𝐓𝐑𝐔𝐌𝐏: 𝐏𝐋𝐄𝐀𝐒𝐄! 𝐎𝐍𝐋𝐘 𝐁𝐄𝐂𝐀𝐔𝐒𝐄 𝐎𝐅 𝐘𝐎𝐔 𝐖𝐄’𝐕𝐄 𝐌𝐀𝐃𝐄 𝐈𝐓 𝐓𝐇𝐈𝐒 𝐅𝐀𝐑. 𝐈𝐓 𝐖𝐈𝐋𝐋 𝐁𝐄 𝐁𝐄𝐂𝐀𝐔𝐒𝐄 𝐎𝐅 𝐘𝐎𝐔 𝐓𝐇𝐀𝐓 𝐖𝐄 𝐖𝐈𝐍 𝐁𝐀𝐂𝐊 𝐓𝐇𝐄 𝐖𝐇𝐈𝐓𝐄 𝐇𝐎𝐔𝐒𝐄! 𝐂𝐀𝐍 𝐈 𝐂𝐎𝐔𝐍𝐓 𝐎𝐍 𝐘𝐎𝐔𝐑 𝐒𝐔𝐒𝐓𝐀𝐈𝐍𝐄𝐃 𝐒𝐔𝐏𝐏𝐎𝐑𝐓?</p>
          </div>
          <div className='flex justify-center items-center flex-wrap gap-2'>
              <button className={`${style.btn2} ${false? style.bgRed: undefined}`}>Yes, count me in!</button>
              <button className={`${style.btn2} ${true? style.bgRed: undefined}`}>No, donate once.</button>
          </div>
          <p className={`underline ${style.paragraph}`}>Make this a monthly recurring donation </p>
          {/* the div below has an isertion */}
          <div className={`${style.kamala} ${true? style.unkamala: undefined}`}>
            <label>
            <div className={style.inLine}>
              <input className='inline' type='checkbox'/>
              <h1 className='inline'>⬅️ 𝐊𝐀𝐌𝐀𝐋𝐀 𝐉𝐔𝐒𝐓 𝐑𝐀𝐈𝐒𝐄𝐃 $𝟐𝟓𝟎 𝐌𝐈𝐋𝐋𝐈𝐎𝐍, 𝐁𝐔𝐓 𝐅𝐄𝐀𝐑 𝐍𝐎𝐓! 𝐈 𝐀𝐌 𝐃𝐎𝐍𝐀𝐋𝐃 𝐓𝐑𝐔𝐌𝐏. 𝐖𝐈𝐓𝐇 𝐘𝐎𝐔𝐑 𝐒𝐔𝐏𝐏𝐎𝐑𝐓, 𝐖𝐄 𝐖𝐈𝐋𝐋 𝐌𝐀𝐊𝐄 𝐀𝐌𝐄𝐑𝐈𝐂𝐀 𝐆𝐑𝐄𝐀𝐓 𝐀𝐆𝐀𝐈𝐍! 𝐓𝐇𝐄 𝐃𝐄𝐌𝐎𝐂𝐑𝐀𝐓 𝐂𝐎𝐍𝐕𝐄𝐍𝐓𝐈𝐎𝐍 𝐁𝐄𝐆𝐈𝐍𝐒 𝐎𝐍 𝐀𝐔𝐆𝐔𝐒𝐓 𝟏𝟗𝐓𝐇. 𝐖𝐈𝐋𝐋 𝐘𝐎𝐔 𝐏𝐋𝐄𝐃𝐆𝐄 𝐓𝐎 𝐃𝐎𝐍𝐀𝐓𝐄 𝐎𝐍𝐄 𝐌𝐎𝐑𝐄 𝐓𝐈𝐌𝐄 𝐓𝐎 𝐌𝐀𝐊𝐄 𝐈𝐓 𝐎𝐔𝐑 𝐁𝐄𝐒𝐓 𝐅𝐔𝐍𝐃𝐑𝐀𝐈𝐒𝐈𝐍𝐆 𝐃𝐀𝐘 𝐄𝐕𝐄𝐑?</h1>
            </div>
            <p className='w-full block text-[0.7rem] pt-[1rem] text-[var(--dark-blue)]'>Donate same amount as above same day of next month</p>
          
            </label>
          </div>
          <p>The wallets for payment would be here</p>
          {/* <form>
            <p>Enter your contact information</p>
            <div>
              <div>
                <input type='text' placeholder='First Name*'/>
                <input type='text' placeholder='Last Name*'/>
              </div>
              <input type='email' placeholder='Email*'/>
              <div>
                <input type='text' placeholder='Address*'/>
                <input type='text' placeholder='Zip*'/>
              </div>
              <div>
                <input type='text' placeholder='City*'/>
                <input type='text' placeholder='State*'/>
              </div>
              <input type='tel' placeholder='Mobile*'/>
              
            </div>
            <p>By providing your phone number, you are consenting to receive calls and recurring SMS/MMS messages, including autodialed and automated calls and texts, to that number from each of the participating committees in Trump National Committee JFC Inc. (“TNC”), a joint fundraising committee of Donald J. Trump for President 2024, Inc. (“DJTFP”), the principal campaign committee of Donald J. Trump, and the Republican National Committee (“RNC”). Msg & data rates may apply. Terms & conditions/privacy policy apply. <a target='_blank' href={"https://txtterms.co/88022-2/"}>txtterms.co/88022-2</a></p>
            <p>Campaign finance law requires us to collect your employment information.</p>
            <div>
                <input type='text' placeholder='Employer*'/>
                <input type='text' placeholder='Occupation*'/>
              </div> */}
          {/* put the drypto details below so that we can work with that now */}
            {/* <input type='submit' value={'Donate'}/>
            <p>By clicking "Donate" I accept WinRed's <a href='https://winred.com/terms/donor-terms/' target='_blank'>terms of use</a> and <a href='https://winred.com/privacy' target='_blank'>privacy policy</a>.</p>
            <p>${24.78} now</p>
          </form> */}
          
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

import { RiCheckboxBlankFill } from "react-icons/ri";