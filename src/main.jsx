import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Landingpage from './LandingPage/Landingpage.jsx'
import Contactpage from './Contactfolder/Contactpage.jsx'
import AboutUs from './Aboutusfolder/AboutUs.jsx'
import FAQS from './FAQsFolder/FAQS.jsx'
import SignUp from './auth/signup.jsx'
import Otp from './auth/otp.jsx'
import SignupLayout from './Signupfolder/SignupLayout.jsx'

const router = createBrowserRouter([
  {
    path: "/",element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Landingpage/> },
      { path: "/AboutUs", element: <AboutUs/> },
      { path: "/Contactpage", element: <Contactpage/>},
      { path: "/FAQS", element: <FAQS/>},
      // { path: "/FAQS", element: <Otp/>},
      // { path: "/FAQS", element: <SignUp/>},
    ],
  },

  {
    path: "/auth",
    element:<SignupLayout/>,
    children:[
      {index:true , element:<SignUp/>}
    ]

  }
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
