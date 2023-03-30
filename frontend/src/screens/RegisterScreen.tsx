import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { registerAction } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { userInfo } from '../store';
import { UserRegisterState } from '../reducers/userReducers';


// export default function RegisterScreen() {

    // const RegisterScreen: React.FC = () => {
export default function RegisterScreen() : JSX.Element{
    interface UserState {
        loading: boolean;
        error: string | null;
        userInfo: userInfo;
      }

    interface getUser extends UserRegisterState  {
    userRegister: UserState;
    }

    
type Inputs = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

    // const {
    //     handleSubmit,
    //     register,
    //     getValues,
    //     formState: { errors },
    // } = useForm();
    const { register, handleSubmit, getValues, formState: { errors } } = useForm<Inputs>(({ mode: 'onChange' }));

    const userRegister = useSelector<getUser, UserState>((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    // const submitHandler = ({ name, email, password }: {name:string, email: string, password: string}) => {
    //     dispatch(registerAction(name, email, password));
    // };
    const submitHandler: SubmitHandler<Inputs> = ({ name, email, password }) => {
        dispatch(registerAction(name, email, password));
      };
//     const submitHandlerWrapper = (submitHandler: typeof submitHandler) =>
//   (data: SubmitHandler<FieldValues>) => {
//     const { name, email, password } = data;
//     submitHandler({ name, email, password });
//   };

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
        if (error) {
            console.log(error)
        }
    }, [navigate, userInfo, error]);
    return (
        <div className='col-span-5 absolute top-0 left-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
                <div className='hidden sm:block'>
                    <img className='w-full h-full object-cover' src="./solar-panels.jpg" alt="" />
                </div>
                <div className='bg-white  flex flex-col justify-center'>
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant='danger'>{error}</MessageBox>}
                    <form className='max-w-[400px] w-full mx-auto rounded-lg bg-orange-400 p-8 px-8'
                        // onSubmit={handleSubmit(submitHandler)}
                        // onSubmit={handleSubmit(submitHandlerWrapper(submitHandler))}
                        onSubmit={handleSubmit(submitHandler)}
                    >
                        <h2 className='text-4xl text-white font-bold text-center'>Create </h2>
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
                            <label>Password</label>
                            <input className='p-2 rounded-lg text-black bg-white mt-2 focus:border-orange-400 focus:outline-none' type="password"
                                {...register('password', {
                                    required: 'Please enter password',
                                    pattern: {
                                        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i,
                                        message: 'Password should be contain one: upper case, lower case, new number, no white space, minimum 8 chars',
                                    },
                                    // minLength: { value: 6, message: 'password is more than 5 chars' },
                                })}
                                autoFocus
                            />
                            {errors.password && (
                                <div className="text-red-500 ">{errors.password.message}</div>
                            )}
                        </div>
                        <div className='flex flex-col text-white py-2'>
                            <label>Confirm Password</label>
                            <input className='p-2 rounded-lg text-black bg-white mt-2 focus:border-orange-400 focus:outline-none' type="password"
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
                        <div className='flex justify-between text-white py-2'>
                            Already have an account? {' '}
                            <Link className='text-white hover:font-semibold' to={`/signin`}>Sign-In</Link>
                        </div>
                        <button className='w-full my-5 py-2 bg-green-500 shadow-lg shadow-green-500/50 hover:shadow-green-500/40 text-white  font-semibold rounded-lg'>Register</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

// export default RegisterScreen;