
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addClientAction} from '../actions/clientActions';
import { ClientState } from '../reducers/clientReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

interface Client {
  _id: Number;
  name: string;
  clientImage: File;
  email:string;
  address:string;
  phone:string;
}
interface AddallClientsState {
   
    loading: boolean;
    error: string | null;
    clients: Client[];
  }
  interface AddClientStateWithAllClients extends ClientState  {
    addClient: AddallClientsState;
      
    }
export default function AddSolarClient() : JSX.Element{

    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    
    
      const [open, setOpen] = useState(false);
      const [clientImage, setClientImage] = useState<FileList | null>(null);

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [address, setAddress] = useState('');
      const [phone, setPhone] = useState('');
      
      const addClient = useSelector<AddClientStateWithAllClients, AddallClientsState>((state) => state.addClient);
      const { loading, error, clients } = addClient;
     
      useEffect(() => {
        console.log(clients);
      }, [clients]);
    
      const navigate = useNavigate();
    
      const insertHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
          const formData = new FormData();
    
          if (clientImage && clientImage.length > 0) {
            formData.append('clientImage', clientImage[0]);
          }
          formData.append('name', name);
          formData.append('email', email);
          formData.append('address', address);
          formData.append('phone', phone);
         
          


          dispatch(addClientAction(formData));
        //   navigate('/batteries');
        
      };
    
    //   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     insertHandler();
    //   };
    

    // const submitHandler = () =>{
    //     console.log('hello')
    // }
  return (


<div className='bg-cyan-800  flex flex-col justify-center w-full col-span-10'>
      <form className='w-11/12 mx-auto rounded-lg bg-cyan-900 p-8 px-8' onSubmit={insertHandler} >
        <h2 className='text-4xl text-white font-bold text-center'>Add Client</h2>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='address'>Address</label>
          <input
            id='address'
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='phone'>Phone</label>
          <input
            id='phone'
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='file'>Add Image</label>
          <input
            id='file'
           
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='file'
            
            onChange={e => setClientImage(e.target.files)}

              
              
          
          />
        </div>
        <div className='flex justify-between text-gray-400 py-2'>
         
          {/* <Link className='text-teal-500 hover:font-semibold' to={`/signin`}>Sign-In</Link> */}
        </div>
        <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">
          Add Client
        </button>
        
      </form>
    </div>
  );
}



