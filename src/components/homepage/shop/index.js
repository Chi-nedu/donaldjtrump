import Link from 'next/link'
import style from './style.module.css'
import Image from 'next/image'

function Index() {
  return (
    <div className={style.external}>
        <div className={style.container}>
            <div className={`container mx-auto ${style.mainContainer}`}>
                <div className={style.horizontalLinw}></div>
                <div className={style.secondCOntainer}>
                    {/* <div className={style.products}> */}
                        <a href='https://secure.winred.com/trump-national-committee-jfc/storefront/maga-47-red-hat/details/?_gl=1*dfwqet*_gcl_au*ODE4OTk3NjAwLjE3MjE5NTgxNjc.&_ga=2.159486077.1575218864.1722479466-989311686.1721958167'>
                            <div className={style.product}>
                                <div className={style.productImage}>
                                    <Image
                                        src={'/images/redhat.png'}
                                        alt=''
                                        fill/>
                                </div>
                                <p className={style.productText}>MAGA 47 Red Hat</p>
                            </div>
                        </a>
                        <a href='https://secure.winred.com/trump-national-committee-jfc/storefront/make-america-great-again-red-flag/details/?_gl=1*1gpnq6v*_gcl_au*ODE4OTk3NjAwLjE3MjE5NTgxNjc.&_ga=2.127651917.1575218864.1722479466-989311686.1721958167'>
                            <div className={style.product}>
                                <div className={style.productImage}>
                                    <Image
                                        src={'/images/flag.png'}
                                        alt=''
                                        fill/>
                                </div>
                                <p className={style.productText}>Make America Great Again Red Flag</p>
                            </div>
                        </a>
                        <a href='https://secure.winred.com/trump-national-committee-jfc/storefront/never-surrender-black-premium-cotton-t-shirt/details/?_gl=1*dfwqet*_gcl_au*ODE4OTk3NjAwLjE3MjE5NTgxNjc.&_ga=2.159486077.1575218864.1722479466-989311686.1721958167'>
                            <div className={style.product}>
                                <div className={style.productImage}>
                                    <Image
                                        src={'/images/mug.png'}
                                        alt=''
                                        fill/>
                                </div>
                                <p className={style.productText}>Never Surrender Black Premium Cotton T-Shirt</p>
                            </div>
                        </a>
                    {/* </div> */}
                        <div className='flex justify-normal items-center h-full'>
                            <Link className={style.platLink} href={'https://secure.winred.com/trump-national-committee-jfc/storefront/'}>SHOP NOW</Link>

                        </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Index