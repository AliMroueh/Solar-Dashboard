import React from 'react'

export default function SolarPanels() {
    const submitHandler = () =>{
        console.log('hello')
    }
  return (
    <div className='bg-cyan-800  flex flex-col justify-start w-full col-span-10 p-5'>
        
            <button className='w-auto p-4 bg-gray-900 text-slate-200 rounded-md self-end'>Add Panels</button>
       
        <table className='shadow-2x1 font-[Poppins] border-2 border-cyan-200 mt-4 w-full'>
          <thead className='text-white'>
            <tr>
          <th className='py-3 bg-cyan-800'>Hospital cases</th>
          <th className='py-3 bg-cyan-800'>Propable cases</th>
          <th className='py-3 bg-cyan-800'>Propable death</th>
          <th className='py-3 bg-cyan-800'>Confirm cases</th>
          <th className='py-3 bg-cyan-800'>Confirm death</th>
          <th className='py-3 bg-cyan-800'>Total cases</th>
          <th className='py-3 bg-cyan-800'>Total deaths</th>
          <th className='py-3 bg-cyan-800'>case 0-9</th>
          <th className='py-3 bg-cyan-800'>case 80-older</th>
          </tr>
          </thead>
          <tbody>
            <tr className='hover:bg-cyan-100 bg-cyan-300 cursor-pointer duration-300'>
              <td className='py-3 px-6'>smith</td>
              <td className='py-3 px-6'>3</td>
              <td className='py-3 px-6'>sm</td>
              <td className='py-3 px-6'>yoga</td>
              <td className='py-3 px-6'>boga</td>
              <td className='py-3 px-6'>boga</td>
              <td className='py-3 px-6'>boga</td>
              <td className='py-3 px-6'>boga</td>
              <td className='py-3 px-6'>boga</td>
            </tr>
          </tbody>
        </table>
</div>
  )
}
