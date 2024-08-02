import Link from 'next/link'
import style from './style.module.css'
import Image from 'next/image'

function Index() {
  return (
    <div className={style.external}>
        <div className={style.container}>
            <div className={`container mx-auto ${style.mainContainer}`}>
                <div className={style.texts}>
                    <h1 className={style.heading1}>Agenda47</h1>
                    <h1 className={style.heading1}>Platform</h1>
                    <p className={style.p}>America needs determined Republican Leadership at every level of Government to address the core threats to our very survival: Our disastrously Open Border, our weakened Economy, crippling restrictions on American Energy Production, our depleted Military, attacks on the American System of Justice, and much more.
                        To make clear our commitment, we offer to the American people the 2024 GOP Platform to Make America Great Again! It is a forward-looking Agenda that begins with the following twenty promises that we will accomplish very quickly when we win the White House and Republican Majorities in the House and Senate.</p>
                    <Link className={style.platLink} href={'/platform'}>PLATFORM</Link>
                </div>
                <div>
                    <div className={style.image}>
                        <Image
                            src={'/images/rally.jpeg'}
                            fill
                            alt={"rally"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Index