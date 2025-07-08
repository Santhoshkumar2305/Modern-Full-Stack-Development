import { Children, StrictMode,lazy,Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Atom} from 'react-loading-indicators'
// import Home from './Home.jsx'
// import About from './About.jsx'
// import Users from './Users.jsx'
// import Contact from './Contact.jsx'
// import Help from './Help.jsx'
// import Mobile from './Mobile.jsx'


const Home = lazy(()=> import('./Home.jsx'));
const About = lazy(()=> import('./About.jsx'));
const Users = lazy(()=> import('./Users.jsx'));
const Contact = lazy(()=> import('./Contact.jsx'));
const Help = lazy(()=> import('./Help.jsx'));
const Mobile = lazy(()=> import('./Mobile.jsx'));


const allUrls = createBrowserRouter([{
  path:"/",
  element:<App></App>,
  children:[{
    path:"/",
    element:<Suspense fallback={<Atom color="#32cd32" size="medium" text="" textColor=""/>}> <Home></Home> </Suspense>
    },{
    path:"/about",
    element:<Suspense fallback={<Atom color="#32cd32" size="medium" text="" textColor=""/>}> <About></About> </Suspense>
  },{
    path:"/users",
    element:<Suspense fallback={<Atom color="#32cd32" size="medium" text="" textColor=""/>}> <Users></Users> </Suspense>
  },{
    path:"/contact",
    element:<Suspense fallback={<Atom color="#32cd32" size="medium" text="" textColor=""/>}> <Contact></Contact> </Suspense>
  },{
    path:"/help",
    element:<Suspense fallback={<Atom color="#32cd32" size="medium" text="" textColor=""/>}> <Help></Help> </Suspense>
  },{
    path:"mobilepage/:mobile",
    element:<Suspense fallback={<Atom color="#32cd32" size="medium" text="" textColor=""/>}> <Mobile></Mobile> </Suspense>
  },{
    path:"*",
    element:<div>404 Page Not Found</div>
  }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allUrls}></RouterProvider>
  </StrictMode>,
)
