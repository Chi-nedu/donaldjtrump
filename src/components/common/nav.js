"use client"
import Image from 'next/image'
import style from './style.module.css'
import Link from 'next/link'
import { useState } from 'react'

function Nav() {
    const [toggle, settoggle] = useState(false)

  return (
    <div className={`${style.nav}`}>
        <p className={style.uppermostfloor}>
            Text trump to 88022
        </p>
        <div className={`${style.mainNav} container m-auto`} >
            <Link href={'/'}>
            <div className={style.logoImage}>
                <Image
                    fill
                    src={'/images/logo.png'}
                    alt=''/>
            </div>
            </Link>

            <div className={style.navLinks1}>
                <ul className={style.navBig}>
                    <Link href={'/platform'} className={style.navLinkBig1}>
                        <li>PLATFORM</li>
                    </Link>
                    <Link href={'https://www.donaldjtrump.com/news'} className={style.navLinkBig1}>
                        <li>NEWS</li>
                    </Link>
                    <Link href={'https://www.donaldjtrump.com/events'} className={style.navLinkBig1}>
                        <li>EVENTS</li>
                    </Link>
                    <Link href={'https://trumpforce47.com/#form-top'} className={style.navLinkBig1}>
                        <li>GET INVOLVED</li>
                    </Link>
                </ul>
                <ul className={style.coloredBtn}>
                    <Link href={'/donate'} >
                        <li className={style.seclink1}>Contribute</li>
                    </Link>
                    <a target='_blank' href={'https://secure.winred.com/trump-national-committee-jfc/storefront/?_gl=1*uttyfp*_gcl_au*ODE4OTk3NjAwLjE3MjE5NTgxNjc.&_ga=2.120517896.1454960112.1722252855-989311686.1721958167'}>
                        <li className={style.seclink2}>shop</li>
                    </a>
                </ul>
                <button onClick={()=>settoggle(!toggle)} className={!toggle? style.toggle: style.toggleClose}>
                    <div className={style.box1}></div>
                    <div className={style.box2}></div>
                    <div className={style.box3}></div>
                </button>
            </div>
        </div>
        <div className={`${!toggle? style.navActive: undefined} ${style.miniNav}`}>
            <ul>
                <Link href={'/platform'} >
                    <li className={style.link1B}>Platform</li>
                </Link>
                <a target='_blank' href={'https://www.donaldjtrump.com/news'}>
                    <li className={style.link1B}>news</li>
                </a>
                <a target='_blank' href={'https://www.donaldjtrump.com/events'}>
                    <li className={style.link1B}>events</li>
                </a>
                <ul>
                    <a target='_blank' href={'https://trumpforce47.com/#form-top'}>
                        <li className={style.link1B}>Get involved</li>
                    </a>
                    <Link href={'https://trumpforce47.com/#form-top'}>
                        <li className={style.link2B}>trump force 47</li>
                    </Link>
                    <a target='_blank' href={'https://trumpforce47.com/#form-top'}>
                        <li className={style.link2B}>protect the vote</li>
                    </a>
                </ul>
            </ul>
            <ul className={style.coloredBtn2}>
                <Link href={'/donate'} >
                    <li className={style.seclink11}>Contribute</li>
                </Link>
                <Link  href={'https://secure.winred.com/trump-national-committee-jfc/storefront/?_gl=1*uttyfp*_gcl_au*ODE4OTk3NjAwLjE3MjE5NTgxNjc.&_ga=2.120517896.1454960112.1722252855-989311686.1721958167'}>
                    <li className={style.seclink22}>shop</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Nav