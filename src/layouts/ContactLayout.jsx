import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ContactLayout = () => {
  return (
    <div>
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      <nav>
        <Link to='faq'>FAQ</Link>
        <Link to = 'form'>FORM</Link>
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default ContactLayout