import Nav from "../common/nav"
import Footer from '../common/footer'
import Head from "next/head"

export const metadata = {
  title: "Donald J. Trump",
  description: "Making sure Americans are living the American dream. ",
};

function MainLayout({children}) {
  return (
    <>
        {children}
        <Nav/>
        <Footer/>
    </>
  )
}

export default MainLayout