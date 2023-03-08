import React from 'react'

export default function SolarPanels() {
    const submitHandler = () =>{
        console.log('hello')
    }
  return (
    <div className='bg-cyan-800  flex flex-col justify-center w-full col-span-10'>
    <form className='w-11/12 mx-auto rounded-lg bg-cyan-900 p-8 px-8'  onSubmit={submitHandler}>
        <h2 className='text-4xl text-white font-bold text-center'>Create Account</h2>
        <div className='flex flex-col text-gray-400 py-2'>
                    <label>Name</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" 
                    required   
                    />
                </div>
        <div className='flex flex-col text-gray-400 py-2'>
            <label>Email</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" 
            required
            />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" 
            required
            />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" 
            required
            // onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </div>
        <div className='flex justify-between text-gray-400 py-2'>
        Already have an account? {' '}
         {/* <Link className='text-teal-500 hover:font-semibold' to={`/signin`}>Sign-In</Link> */}
        </div>
        <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Register</button>
        
    </form>
</div>
  )
}
