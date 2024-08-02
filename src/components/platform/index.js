import MainLayout from "../layout/mainLayout"
import Socials from '../homepage/socials'
import Hero from './hero'
function Index() {
  return (
    <MainLayout>
        <Hero />
        <Socials/>
    </MainLayout>
  )
}

export default Index


{/* <div className={style.redBox}>
                        <h1>READ THE OFFICIAL 2024 Republican Party Platform  
                            <a className='underline' href='https://rncplatform.donaldjtrump.com/?_gl=1*261vw5*_gcl_au*ODE4OTk3NjAwLjE3MjE5NTgxNjc.&_ga=2.126595149.1575218864.1722479466-989311686.1721958167'>HERE</a>
                        </h1>
                        <p>President Trump’s 20 CORE PROMISES</p>
                        <p>TO MAKE AMERICA GREAT AGAIN!</p>
                    </div>
                    .redBox{
                      @apply bg-[var(--dark-red)] w-[]
                  } */}