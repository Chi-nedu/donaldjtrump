import Link from 'next/link'
import style from './style.module.css'
import { FaTwitter } from "react-icons/fa";
import { SiRumble } from "react-icons/si";
import { GiTeePipe } from "react-icons/gi";

const styled = {
    marginTop: "4rem",
    backgroundImage: "url('/images/trumpBanner.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}

function Hero() {
  return (
    <div className={style.heroCOntainer} style={styled}>
        <div className={`${style.cont} container m-auto`}>
            <p className={style.text1}>"THEY’RE NOT AFTER ME,</p>
            <p className={style.text1}>THEY’RE AFTER YOU</p>
            <p className={style.text1}>…I’M JUST STANDING</p>
            <p className={style.text1}>IN THE WAY!”</p>
            <p className='text-white text-[1.3rem] py-[1rem] w-[60%] font-[200]'>DONALD J. TRUMP, 45th President of the United States</p>
            <div className={style.linkCOntainer}>
                <Link className={style.link} href={'/donate'}>CONTRIBUTE</Link>
                <Link className={style.link1} href={'/join'}>VOLUNTEER</Link>
            </div>
            <div className={style.socials}>
                <a href='https://truthsocial.com/@realDonaldTrump' className='hover:text-red transition-600 duration-200 text-white text-[1.2rem]'><GiTeePipe /></a>
                <a href='https://rumble.com/c/DonaldTrump' className='hover:text-red-600 transition duration-200 text-white text-[1.2rem]'><SiRumble /></a>
                <a href='https://twitter.com/TrumpWarRoom' className='hover:text-red-600 transition duration-200 text-white text-[1.2rem]'><FaTwitter /></a>
            </div>
        </div>
    </div>
  )
}

export default Hero