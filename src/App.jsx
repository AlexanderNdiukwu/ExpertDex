
import { Outlet } from "react-router-dom"
import AboutUs from "./Aboutusfolder/AboutUs"
import Contactpage from "./Contactfolder/Contactpage"
import Landingpage from "./LandingPage/Landingpage"
import Navbar from "./NavSelection/Navbar"
import Footer from "./Footer/Footer"


function App() {


  return (

    <div className="relative">

      <div className='relative h-0 '>
            <Navbar/>
        </div>
      {/* <Landingpage/> */}
      {/* <AboutUs/> */}
      {/* <Contactpage/> */}
      <Outlet/>

        <div className='lg:px-[163px] px-[17.5px] py-10 '>
            <Footer/>
        </div>
 
    </div>
  
  )
}

export default App
