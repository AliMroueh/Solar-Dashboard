import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ClientState } from '../reducers/clientReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { updateClientAction, getAllClientsAction } from '../actions/clientActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useForm } from 'react-hook-form';

interface Client {
    _id: string;
    name: string;
    clientImage: File;
    email:string;
    address:string;
    phone:Number;
  }
  interface UpdateallClientsState {
     
      loading: boolean;
      error: any[] | null;
      clients: Client[];
    }

interface UpdateClientStateWithAllClients extends ClientState {
  updateClient: UpdateallClientsState;
}

export default function UpdateSolarClient() {
  const { register, handleSubmit,  formState: { errors } } = useForm(({ mode: 'onChange' }));
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const location = useLocation();
  const Name = new URLSearchParams(location.search).get('name') ?? '';
  const Email = new URLSearchParams(location.search).get('email') ?? '';
  const Address = new URLSearchParams(location.search).get('address') ?? '';
  const Phone = new URLSearchParams(location.search).get('phone') ?? '';
  
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

  const [open, setOpen] = useState(false);
  const [clientImage, setClientImage] = useState<FileList | null>(null);

  const [name, setName] = useState(Name);
  const [email, setEmail] = useState(Email);
  const [address, setAddress] = useState(Address);
  const [phone, setPhone] = useState(Phone);
  const updateClient = useSelector<UpdateClientStateWithAllClients, UpdateallClientsState>((state) => state.updateClient);
  const { loading, error, clients } = updateClient;
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const updateHandler = (data: any) => {
    // e.preventDefault();
    const formData = new FormData();

    if (clientImage && clientImage.length > 0) {
      formData.append('clientImage', clientImage[0]);
    }
    formData.append('name', name);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('phone', phone);

    
    dispatch(updateClientAction(String(id), formData));

    


   
    
     navigate('/AdminClients');

  };

  return (
    <div className='bg-cyan-800  flex flex-col justify-center w-full col-span-10'>
      {loading && <LoadingBox></LoadingBox>}
      {error && (
        <div>
          {error.map((err) => (
            <MessageBox key={err.msg} variant="danger">
              {err.msg}
            </MessageBox>
          ))}
        </div>
      )}
      <form className='w-11/12 mx-auto rounded-lg bg-cyan-900 p-8 px-8' onSubmit={handleSubmit(updateHandler)} >
        <h2 className='text-4xl text-white font-bold text-center'>Update Client</h2>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            // required
            {...register('name', { required: true,  maxLength: 255 })}
          />
          {errors.name && (<p className="text-red-500">This field is required and cannot exceed 255 characters.</p>)}
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='email'
            // value={email}
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
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='address'>Address</label>
          <input
            id='address'
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
            // value={address}
            // onChange={(e) => setAddress(e.target.value)}
            // required
            {...register('address', { required: true,  maxLength: 255 })}
          />
          {errors.address && (<p className="text-red-500">This field is required and cannot exceed 255 characters.</p>)}
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='phone'>Phone</label>
          <input
            id='phone'
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
            // required
            {...register('phone', { required: true,  maxLength: 999999999999999 })}
          />
          {errors.phone && (<p className="text-red-500">This field is required and cannot exceed 20 characters.</p>)}
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='file'>Add Image</label>
          <input
            id='file'
           
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='file'
            
            // onChange={e => setClientImage(e.target.files)}
            {...register('clientImage', { required: true })}

              
              
          
          />
           {errors.clientImage && ( <p className="text-red-500">This field is required.</p>)}
        </div>
        <div className='flex justify-between text-gray-400 py-2'>
         
          {/* <Link className='text-teal-500 hover:font-semibold' to={`/signin`}>Sign-In</Link> */}
        </div>
        <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">
          Update Client
        </button>
        
      </form>
    </div>
  );
}



