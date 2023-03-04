import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
        <Header />
        <div className='w-full min-h-[90vh] grid grid-cols-12'>
          <NavBar />
          </div>
    </div>
  )
}
