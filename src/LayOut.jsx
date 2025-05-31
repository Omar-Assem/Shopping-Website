import { Outlet } from "react-router-dom"
import Header from "./(Side)/Header"
import Footer from "./(Side)/Footer"

const LayOut = () => {
  return (
    <>
    <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default LayOut
