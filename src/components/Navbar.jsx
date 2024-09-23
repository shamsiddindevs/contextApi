import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header className="py-5 bg-slate-200 ">
    <nav className="flex justify-between max-w-5xl mx-auto items-center ">
        <span><Link to="/" className="text-3xl text-red-500 font-bold">Logo</Link></span>
        <ul className="flex gap-4 items-center font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Navbar