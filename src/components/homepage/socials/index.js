import style from './style.module.css'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { SiRumble } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { GiTeePipe } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";

function Index() {
  return (
    <div className={style.container}>
        <div className={`container mx-auto`}>
            <div className={style.container_Box}>
                <div className={style.redBox}></div>
                <div className={style.socialsBox}>
                    <a className={style.socialLink} href='https://truthsocial.com/@realDonaldTrump'><GiTeePipe /></a> 
                    <a className={style.socialLink} href='https://rumble.com/c/DonaldTrump'><SiRumble /></a> 
                    <a className={style.socialLink} href='https://twitter.com/TrumpWarRoom'><FaTwitter /></a> 
                    <a className={style.socialLink} href='https://www.tiktok.com/@realdonaldtrump'><AiFillTikTok /></a> 
                    <a className={style.socialLink} href='https://www.facebook.com/DonaldTrump/'><FaFacebookF /></a> 
                    <a className={style.socialLink} href='https://www.instagram.com/realdonaldtrump/'><IoLogoInstagram /></a> 
                    <a className={style.socialLink} href='https://www.youtube.com/channel/UCAql2DyGU2un1Ei2nMYsqOA'><FaYoutube /></a> 
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index