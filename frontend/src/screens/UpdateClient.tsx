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
import { UPDATE_CLIENT_RESET } from '../constants/clientConstants';
import { RootState } from '../store';
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
      success: boolean;
    }

interface UpdateClientStateWithAllClients extends ClientState {
  updateClient: UpdateallClientsState;
}

export default function UpdateSolarClient() {
  const { register, handleSubmit,  formState: { errors },setValue } = useForm(({ mode: 'onChange' }));
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const name = query.get('name') ?? '';
    const email = query.get('email') ?? '';
    const address = query.get('address') ?? '';
    const phone = query.get('phone') ?? '';

    setValue('name', name);
    setValue('email', email);
    setValue('address', address);
    setValue('phone', phone);
  }, [location.search, setValue]);

  // const Name = new URLSearchParams(location.search).get('name') ?? '';
  // const Email = new URLSearchParams(location.search).get('email') ?? '';
  // const Address = new URLSearchParams(location.search).get('address') ?? '';
  // const Phone = new URLSearchParams(location.search).get('phone') ?? '';
  
  // const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
  const dispatch: ThunkDispatch<RootState, null, AnyAction>= useDispatch();
  const [open, setOpen] = useState(false);
  const [clientImage, setClientImage] = useState<FileList | null>(null);

  // const [name, setName] = useState(Name);
  // const [email, setEmail] = useState(Email);
  // const [address, setAddress] = useState(Address);
  // const [phone, setPhone] = useState(Phone);
  const updateClient = useSelector<UpdateClientStateWithAllClients, UpdateallClientsState>((state) => state.updateClient);
  const { loading, error, clients, success } = updateClient;
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if(success){
     navigate('/AdminClients');
     dispatch({type: UPDATE_CLIENT_RESET})
    };
  }, [success, navigate, dispatch])


  const updateHandler = (data: any) => {
    // e.preventDefault();
    const formData = new FormData();

    if (data.clientImage && data.clientImage.length > 0) {
      formData.append('clientImage', data.clientImage[0]);
    }
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('address', data.address);
    formData.append('phone', data.phone.toString());

    
    dispatch(updateClientAction(String(id), formData));

    


   
  

  };

  return (
    <div className='flex flex-col bg-amber-100 justify-center w-full col-span-10'>
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
      <form className='w-6/12 mx-auto rounded-lg bg-orange-400 p-8 px-8' onSubmit={handleSubmit(updateHandler)} >
        <h2 className='text-4xl text-white font-bold text-center'>Update Client</h2>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='name' className='font-bold text-white'>Name</label>
          <input
            id='name'
            className='rounded-lg bg-white mt-2 p-2 text-black focus:outline-none'
            type='text'
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            // required
            {...register('name', { required: true,  maxLength: 255 })}
          />
          {errors.name && (<p className="text-red-700 font-medium">This field is required and cannot exceed 255 characters.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='email' className='font-bold text-white'>Email</label>
          <input
            id='email'
            className='rounded-lg bg-white mt-2 p-2 text-black focus:outline-none'
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
          {errors.email?.type === 'required' && <p className="text-red-700 font-medium">This field is required.</p>}
          {errors.email?.type === 'pattern' && <p className="text-red-700 font-medium">Invalid email address.</p>}
          {errors.email?.type === 'maxLength' && <p className="text-red-700 font-medium">Cannot exceed 255 characters.</p>}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='address' className='font-bold text-white'>Address</label>
          <input
            id='address'
            className='rounded-lg bg-white mt-2 p-2 text-black focus:outline-none'
            type='text'
            // value={address}
            // onChange={(e) => setAddress(e.target.value)}
            // required
            {...register('address', { required: true,  maxLength: 255 })}
          />
          {errors.address && (<p className="text-red-700 font-medium">This field is required and cannot exceed 255 characters.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='phone' className='font-bold text-white'>Phone</label>
          <input
            id='phone'
            className='rounded-lg bg-white mt-2 p-2 text-black focus:outline-none'
            type='text'
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
            // required
            {...register('phone', { required: true,  maxLength: 999999999999999 })}
          />
          {errors.phone && (<p className="text-red-700 font-medium">This field is required and cannot exceed 20 characters.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='file' className='font-bold text-white'>Add Image</label>
          <input
            id='file'
           
            className='rounded-lg bg-white mt-2 p-2 text-black focus:outline-none'
            type='file'
            
            // onChange={e => setClientImage(e.target.files)}
            {...register('clientImage', { required: true })}

              
              
          
          />
           {errors.clientImage && ( <p className="text-red-700 font-medium">This field is required.</p>)}
        </div>
        {/* <div className='flex justify-between text-gray-400 py-2'>
         
          <Link className='text-teal-500 hover:font-semibold' to={`/signin`}>Sign-In</Link>
        </div> */}
           <div className='flex flex-row justify-center'>
     <button className='w-1/4 my-5 py-2 bg-slate-500 shadow-lg shadow0-slate-600/50 hover:shadow-slate-600/40 text-white font-bold text-xl rounded-lg' type="submit">
          Update
        </button>
     </div>
        
      </form>
    </div>
  );
}



