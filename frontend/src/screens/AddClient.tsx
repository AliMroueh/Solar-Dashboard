
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addClientAction} from '../actions/clientActions';
import { ClientState } from '../reducers/clientReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useForm } from 'react-hook-form';
import { ADD_NEW_CLIENT_RESET } from '../constants/clientConstants';
import { RootState } from '../store';

export interface Client {
  _id: Number;
  name: string;
  clientImage: File;
  email:string;
  address:string;
  phone:Number;
}
interface AddallClientsState {
   
    loading: boolean;
    error: any[] | null;
    clients: Client[];
    success: boolean;
  }
  interface AddClientStateWithAllClients extends ClientState  {
    addClient: AddallClientsState;
      
    }
export default function AddSolarClient() : JSX.Element{
  const { register, handleSubmit,  formState: { errors } } = useForm(({ mode: 'onChange' }));
    // const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    const dispatch: ThunkDispatch<RootState, null, AnyAction>= useDispatch();
    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    
      // const [open, setOpen] = useState(false);
      // const [clientImage, setClientImage] = useState<FileList | null>(null);

      // const [name, setName] = useState('');
      // const [email, setEmail] = useState('');
      // const [address, setAddress] = useState('');
      // const [phone, setPhone] = useState<number>(0);
      
      const addClient = useSelector<AddClientStateWithAllClients, AddallClientsState>((state) => state.addClient);
      const { loading, error, clients, success } = addClient;
      const navigate = useNavigate();
     
      useEffect(() => {
        if(success){
          dispatch({type: ADD_NEW_CLIENT_RESET})
          navigate('/AdminClients')
        }
     }, [clients]);
      
    
      
      // function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
      //   const newValue = parseInt(e.target.value);
      //   setPhone(newValue);
      // }
      // e: React.FormEvent<HTMLFormElement>
      const insertHandler = (data: any) => {
        // e.preventDefault();
          const formData = new FormData();
    
          if (data.clientImage && data.clientImage.length > 0) {
            formData.append('clientImage', data.clientImage[0]);
          }
          formData.append('name', data.name);
          formData.append('email', data.email);
          formData.append('address', data.address);
          formData.append('phone', data.phone.toString());
         
          


          dispatch(addClientAction(formData));
          
         
      };

      // if(!loading && !error){
      //   navigate('/AdminClients');
      // }
    
    //   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     insertHandler();
    //   };
    

    // const submitHandler = () =>{
    //     console.log('hello')
    // }
  return (


<div className='flex flex-col justify-center w-full col-span-10'>
{loading && <LoadingBox></LoadingBox>}

{error && (
  <div>
    {typeof error === 'object' ? error.map((err) => (
      <MessageBox key={err.msg} variant="danger">

        {err.msg}
      </MessageBox>
    ))
  : <MessageBox variant='danger'>{error}</MessageBox>
  }
  </div>
)}
      <form className='w-6/12 mx-auto rounded-lg bg-orange-400 p-8 px-8' onSubmit={handleSubmit(insertHandler)} >
        <h2 className='text-4xl text-white font-bold text-center'>Add Client</h2>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            className='rounded-lg bg-white mt-2 p-2 text-black focus:outline-none'
            type='text'
        
            // onChange={(e) => setName(e.target.value)}
            // required
            {...register('name', { required: true,  maxLength: 255 })}
          />
          {errors.name && (<p className="text-red-500">This field is required and cannot exceed 255 characters.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            className='rounded-lg bg-white mt-2 p-2 text-black focus:outline-none'
            type='email'
          
            // onChange={(e) => setEmail(e.target.value)}
            // required
            {...register('email', { 
              required: true, 
              pattern: EMAIL_REGEX,
              maxLength: 255 
            })}

          />
          {errors.email?.type === 'required' && <p className="text-red-500">This field is required.</p>}
          {errors.email?.type === 'pattern' && <p className="text-red-500">Invalid email address.</p>}
          {errors.email?.type === 'maxLength' && <p className="text-red-500">Cannot exceed 255 characters.</p>}
  
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='address'>Address</label>
          <input
            id='address'
            className='rounded-lg bg-white mt-2 p-2 text-black focus:outline-none'
            type='text'
           
            // onChange={(e) => setAddress(e.target.value)}
            // required
            {...register('address', { required: true,  maxLength: 255 })}
          />
          {errors.address && (<p className="text-red-500">This field is required and cannot exceed 255 characters.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='phone'>Phone</label>
          <input
            id='phone'
            className='rounded-lg bg-white mt-2 p-2 text-black  focus:outline-none'
            type='text'
           
            // onChange={(e) => setPhone(e.target.value)}
            // required
            {...register('phone', { required: true,  maxLength: 999999999999999 })}
          />
          {errors.phone && (<p className="text-red-500">This field is required and cannot exceed 20 characters.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='file'>Add Image</label>
          <input
            id='file'
           
            className='p-2 rounded-lg bg-white mt-2 text-black focus:border-orange-400 focus:bg-gray-600 focus:outline-none'
            type='file'
            
            // onChange={e => setClientImage(e.target.files)}

            {...register('clientImage', { required: true })}
              
          
          />
          {errors.clientImage && ( <p className="text-red-500">This field is required.</p>)}
        </div>
        {/* <div className='flex justify-between text-gray-400 py-2'>
         
          <Link className='text-teal-500 hover:font-semibold' to={`/signin`}>Sign-In</Link>
        </div> */}
          <div className='flex flex-row justify-center'>
     <button className='w-1/4 my-5 py-2 bg-slate-500 shadow-lg shadow0-slate-600/50 hover:shadow-slate-600/40 text-white font-bold text-xl rounded-lg' type="submit">
          Add Client
        </button>
     </div>
        
        
      </form>
    </div>
  );
}



