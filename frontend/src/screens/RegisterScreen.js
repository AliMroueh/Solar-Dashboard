import React, { useEffect, useState } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
import { useForm } from 'react-hook-form';
import { registerAction } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function RegisterScreen(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [name, setName] = useState('');
    // const [confirmpassword, setConfirmPassword] = useState('');
    // const [email,setEmail] = useState('');
    // const [password, setPassword] = useState('')

    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors },
      } = useForm();

    const userRegister = useSelector(state => state.userRegister);
    const {userInfo, loading, error} = userRegister;

    const submitHandler = ({name,email,password}) => {
        // TODO: signin action
        // if(password !== confirmpassword){
        //     alert('Password and confirm password are not match');
        // }else{
        dispatch(registerAction(name, email, password));
        // }
    };

    useEffect(() => {
        if(userInfo){
            navigate('/');
        }
        if(error){
            console.log(error)
        }
    }, [navigate, userInfo,error]);
    return (
    <div className='col-span-5 absolute top-0 left-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src="./gettyimages-1216445906_web.jpg" alt="" />
        </div>        
        <div className='bg-cyan-800  flex flex-col justify-center'>
        {loading && <LoadingBox></LoadingBox> }
        {error && <MessageBox variant='danger'>{error}</MessageBox>}
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-cyan-900 p-8 px-8'  
            onSubmit={handleSubmit(submitHandler)}
            >
                <h2 className='text-4xl text-white font-bold text-center'>Create </h2>
                <div className='flex flex-col text-gray-400 py-2'>
                            <label htmlFor='name'>Name</label>
                            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                            type="text"
                            id='name' 
                            autoFocus
                            {...register('name', {
                                required: 'Please enter name',
                            })}
                            />
                    {errors.name && (
                    <div className="text-red-500">{errors.name.message}</div>
                    )}
                    </div>
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
                    />
                    {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                    )}
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" 
                    {...register('password', {
                        required: 'Please enter password',
                        minLength: { value: 6, message: 'password is more than 5 chars' },
                    })}
                    autoFocus
                    />
                    {errors.password && (
                    <div className="text-red-500 ">{errors.password.message}</div>
                    )}
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Confirm Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" 
                    {...register('confirmPassword', {
                        required: 'Please enter confirm password',
                        validate: (value) => value === getValues('password'),
                        minLength: {
                        value: 6,
                        message: 'confirm password is more than 5 chars',
                        },
                    })}
                    />
                    {errors.confirmPassword && (
                    <div className="text-red-500 ">
                        {errors.confirmPassword.message}
                    </div>
                    )}
                    {errors.confirmPassword &&
                    errors.confirmPassword.type === 'validate' && (
                        <div className="text-red-500 ">Password do not match</div>
                    )}
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                Already have an account? {' '}
                    <Link className='text-teal-500 hover:font-semibold' to={`/signin`}>Sign-In</Link>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Register</button>
                
            </form>
        </div>
        </div>
    </div>
    )
}
