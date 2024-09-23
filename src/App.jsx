import React from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,BrowserRouter, RouterProvider} from 'react-router-dom'
import MyRoutes from './layouts/MyRoutes'
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/contact/Faq'
import Form from './pages/contact/Form'
import ContactLayout from './layouts/ContactLayout'
import NoPage from './pages/NoPage'

const App = () => {

    const routes =createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MyRoutes/>}>
                <Route index element={<Home/>} />
                <Route path='about' element={<About/>} />
                <Route path='contact' element={<ContactLayout/>}>
                    <Route path='faq' element={<Faq/>} />
                    <Route path='form' element={<Form/>} />
                </Route>

                <Route path='*' element={<NoPage/>}/>
            </Route>
        )
    )

  return (
    <div>
        <RouterProvider router={routes}/>
    </div>
  )
}

export default App