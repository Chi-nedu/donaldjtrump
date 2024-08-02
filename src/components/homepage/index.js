import MainLayout from "../layout/mainLayout"
import JoinTheMove from './jointhemove'
import Rally from "./rally"
import Hero from "./hero"
import Socials from './socials'
import Shop from './shop'
import Video from './video'

function Index() {
  return (
    <MainLayout>
        <Hero/>
        <JoinTheMove/>
        <Rally/>
        <Video/>
        <Shop/>
        <Socials/>
    </MainLayout>
  )
}

export default Index