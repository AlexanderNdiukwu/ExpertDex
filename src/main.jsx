import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Landingpage from './LandingPage/Landingpage.jsx'
import Contactpage from './Contactfolder/Contactpage.jsx'
import AboutUs from './Aboutusfolder/AboutUs.jsx'
import FAQS from './FAQsFolder/FAQS.jsx'

const router = createBrowserRouter([
  {
    path: "/",element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Landingpage/> },
      { path: "/AboutUs", element: <AboutUs/> },
      { path: "/Contactpage", element: <Contactpage/>},
      { path: "/FAQS", element: <FAQS/>},
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
