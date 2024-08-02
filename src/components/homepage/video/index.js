import style from './style.module.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Index() {
  return (
    <div className='px-[1rem] py-[6rem] text-white bg-black'>
        <div className='container'>
            <p className={style.heading}>I AM <b>YOUR VOICE</b>. AMERICA FIRST!</p>
            <div>
                <div className={style.image1}></div>

                <div className={style.centerDiv}>
                    <a href=''>
                        <div className={style.image2}></div>
                    </a>
                    <div>
                        <h1>President Donald J.Trump Declares War on Cartels</h1>
                        <p>Joe Bidn prepares to ake his first-ever  trip to the southern border that he delibraty erased, President Trump  announced that when he is president again, it will be the official policy of the United States to take down the drug cartels just as we took down ISIS.</p>
                    </div>
                    <div>
                        <a href='https://www.facebook.com/sharer/sharer.php?u=https://rumble.com/v240yku-president-donald-j.-trump-declares-war-on-cartels.html'><FaFacebookF /></a>
                        <a href='http://twitter.com/share?url=https://rumble.com/v240yku-president-donald-j.-trump-declares-war-on-cartels.html'><FaTwitter /></a>
                    </div>
                </div>
                
                <div className={style.image3}></div>
            </div>
        </div>
    </div>
  )
}

export default Index