import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

export default function Home() {
//   const apiKey = 'YOUR_API_KEY';
// const siteId = 'YOUR_SITE_ID';

// fetch(`https://monitoringapi.solaredge.com/site/${siteId}/overview.json?api_key=${apiKey}`)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
  return (
    <div>
        <Header />
        <div className='w-full min-h-[90vh] grid grid-cols-12'>
          <NavBar />
          </div>
    </div>
  )
}
