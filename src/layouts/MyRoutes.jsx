import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MyRoutes = () => {
  return (
    <div>
        <header className='bg-cyan-50 py-4'>
          <section className='flex justify-between items-center max-w-5xl mx-auto '>
          <span className='text-3xl font-bold'>Logo</span>
          <nav className='flex gap-5 font-medium'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>
          </nav>
        </section>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default MyRoutes