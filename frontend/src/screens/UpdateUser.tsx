import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { detailsUser, registerAction, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { userInfo } from '../store';
import { UserRegisterState } from '../reducers/userReducers';
import { getUser, UserState } from './SigninScreen';

export default function UpdateUser() : JSX.Element{
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

    const userSignin = useSelector<getUser,UserState>(state => state.userSignin);
    const {userInfo, loading, error} = userSignin;
    
type Inputs = {
    name: string;
    email: string;
    Oldpassword: string;
    Newpassword: string;
    confirmPassword: string;
  };

    const { register, handleSubmit, getValues, formState: { errors },setValue } = useForm<Inputs>(({ mode: 'onChange' }));

    useEffect(() => {
        const name = userInfo.name;
        const email = userInfo.email;
    
        setValue('name', name);
        setValue('email', email);
      }, [setValue, userInfo.email, userInfo.name]);

    const submitHandler: SubmitHandler<Inputs> = ({ name, email, Oldpassword, Newpassword}) => {
        dispatch(updateUserProfile({userId : userInfo._id,name, email, Oldpassword, Newpassword}));
      };

      if(!loading){
        console.log(userInfo)
      }
    // useEffect(() => {
    //     if (userInfo) {
    //         navigate('/');
    //     }
    //     if (error) {
    //         console.log(error)
    //     }
    // }, [navigate, userInfo, error]);
    return (
        <div className='bg-amber-100 flex flex-col justify-center w-full col-span-10'>
              {loading && <LoadingBox></LoadingBox>}
                   {error && <MessageBox variant='danger'>{error}</MessageBox>}
                   <form className='w-6/12 mx-auto rounded-lg bg-orange-400 p-8 px-8'
                        // onSubmit={handleSubmit(submitHandler)}
                        // onSubmit={handleSubmit(submitHandlerWrapper(submitHandler))}
                        onSubmit={handleSubmit(submitHandler)}
                    >
                        <h2 className='text-4xl text-white font-bold text-center'>Update </h2>
                        <div className='flex flex-col text-white py-2'>
                            <label htmlFor='name'>Name</label>
                            <input className='rounded-lg text-black bg-white mt-2 p-2  focus:border-orange-400 focus:outline-none'
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
                        <div className='flex flex-col text-white py-2'>
                            <label>Email</label>
                            <input className='rounded-lg text-black bg-white mt-2 p-2  focus:border-orange-400 focus:outline-none' type="email"
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
                        <div className='flex flex-col text-white py-2'>
                            <label>Old Password</label>
                            <input className='p-2 rounded-lg text-black bg-white mt-2 focus:border-orange-400 focus:outline-none' type="password"
                                {...register('Oldpassword', {
                                    required: 'Please enter password',
                                    minLength: { value: 6, message: 'password is more than 5 chars' },
                                })}
                                autoFocus
                            />
                            {errors.Oldpassword && (
                                <div className="text-red-500 ">{errors.Oldpassword.message}</div>
                            )}
                        </div>
                        <div className='flex flex-col text-white py-2'>
                            <label>New Password</label>
                            <input className='p-2 rounded-lg text-black bg-white mt-2 focus:border-orange-400 focus:outline-none' type="password"
                                {...register('Newpassword', {
                                    required: 'Please enter password',
                                    minLength: { value: 6, message: 'password is more than 5 chars' },
                                })}
                                autoFocus
                            />
                            {errors.Newpassword && (
                                <div className="text-red-500 ">{errors.Newpassword.message}</div>
                            )}
                        </div>
                        <div className='flex flex-col text-white py-2'>
                            <label>Confirm Password</label>
                            <input className='p-2 rounded-lg text-black bg-white mt-2 focus:border-orange-400 focus:outline-none' type="password"
                                {...register('confirmPassword', {
                                    required: 'Please enter confirm password',
                                    validate: (value) => value === getValues('Newpassword'),
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
                        <div className='flex justify-between text-white py-2'>
                            Already have an account? {' '}
                            <Link className='text-white hover:font-semibold' to={`/signin`}>Sign-In</Link>
                        </div>
                        <div className='flex flex-row justify-center'>
                        <button className='w-1/4 my-5 py-2 bg-slate-500 shadow-lg shadow0-slate-600/50 hover:shadow-slate-600/40 text-white font-bold text-xl rounded-lg'>Update</button>
                         </div>
                    </form>
        </div>
    
    )
}

// export default RegisterScreen;