import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { signin } from '../actions/userActions';
import { useForm } from 'react-hook-form';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // const [email,setEmail] = useState('');
    // const [password, setPassword] = useState('')

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo, loading, error} = userSignin;

    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();

    const submitHandler = ({email,password}) => {
        // e.preventDefault();
        // TODO: signin action
        dispatch(signin(email, password));
    };
    useEffect(() => {
        if(userInfo){
            navigate('/');
        }
    }, [navigate, userInfo]);
    return (

    //     <div className='col-span-5'>
    //     <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
    //     <div className='hidden sm:block'>
    //         <img className='w-full h-full object-cover' src="./T-cell-1.jpg" alt="" />
    //     </div>

    //     <div className='bg-cyan-800 flex flex-col justify-center'>
    //         <form className='max-w-[400px] w-full mx-auto rounded-lg bg-cyan-900 p-8 px-8'  onSubmit={submitHandler}>
    //             <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>
    //     {loading && <LoadingBox></LoadingBox>}
    //     {error && <MessageBox variant='danger'>{error}</MessageBox>}
    //             <div className='flex flex-col text-gray-400 py-2'>
    //                 <label>Email</label>
    //                 <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" 
    //                 required
    //                 onChange={(e) => setEmail(e.target.value)}/>
    //             </div>
    //             <div className='flex flex-col text-gray-400 py-2'>
    //                 <label>Password</label>
    //                 <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" 
    //                 required
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 />
    //             </div>
    //             <div className='flex justify-between text-gray-400 py-2'>
    //                 {/* <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
    //                 <p>Forgot Password</p> */}
    //                 Don't have an account? {' '}
    //              <Link className='text-teal-500 hover:font-semibold' to={`/register`}>Create</Link>
    //             </div>
    //             <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGNIN</button>
                
    //         </form>
    //     </div>
    // </div>
    // </div>
    <div className='col-span-5 absolute top-0 left-0'>
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        
    <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src="./T-cell-1.jpg" alt="" />
    </div>

    <div className='bg-cyan-800 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto rounded-lg bg-cyan-900 p-8 px-8'  onSubmit={handleSubmit(submitHandler)}>
            <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>
    {loading && <LoadingBox></LoadingBox>}
    {error && <MessageBox variant='danger'>{error}</MessageBox>}
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Email</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" 
                {...register('email', {
                    required: 'Please enter email',
                    pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                        message: 'Please enter valid email',
                    },
                    })}
                id="email"
                autoFocus
                ></input>
                 {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Password</label>
                <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                type="password" 
                {...register('password', {
                    required: 'Please enter password',
                    minLength: { value: 6, message: 'password is more than 5 chars' },
                  })}
                id="password"
                autoFocus
                // onChange={(e) => setPassword(e.target.value)}
                ></input>
                {errors.password && (
        <div className="text-red-500 ">{errors.password.message}</div>
      )}
            </div>
            <div className='flex justify-between text-gray-400 py-2'>
                {/* <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                <p>Forgot Password</p> */}
                Don't have an account? {' '}
             <Link className='text-teal-500 hover:font-semibold' to={`/register`}>Create</Link>
            </div>
            <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Login</button>
            
        </form>
    </div>
</div>
</div>
    )
}
