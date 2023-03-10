import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addInverterAction} from '../actions/inverterActions';
import { InverterState } from '../reducers/inverterReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

interface Inverter {
  _id: Number;
  type: string;
  inverterImage: File;
  strengh:string;
  description:string;
}
interface AddallInvertersState {
   
    loading: boolean;
    error: string | null;
    inverters: Inverter[];
  }
  interface AddInverterStateWithAllInverters extends InverterState  {
    addInverter: AddallInvertersState;
      
    }
export default function AddSolarInverter() : JSX.Element{

    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    
    
      const [open, setOpen] = useState(false);
      const [inverterImage, setInverterImage] = useState<FileList | null>(null);

      const [type, setType] = useState('');
      const [strength, setStrength] = useState('');
      const [description, setDescription] = useState('');
    
      
      const addInverter = useSelector<AddInverterStateWithAllInverters, AddallInvertersState>((state) => state.addInverter);
      const { loading, error, inverters } = addInverter;
    
      useEffect(() => {
        console.log(inverters);
      }, [inverters]);
    
      const navigate = useNavigate();
    
      const insertHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
          const formData = new FormData();
    
          if (inverterImage && inverterImage.length > 0) {
            formData.append('inverterImage', inverterImage[0]);
          }
          formData.append('type', type);
          formData.append('strength', strength);
          formData.append('description', description);
          dispatch(addInverterAction(formData));
        
        
      };
    
  
  return (


<div className='bg-cyan-800  flex flex-col justify-center w-full col-span-10'>
      <form className='w-11/12 mx-auto rounded-lg bg-cyan-900 p-8 px-8' onSubmit={insertHandler} >
        <h2 className='text-4xl text-white font-bold text-center'>Add Solar Panel</h2>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='type'>Type</label>
          <input
            id='type'
            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
           value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='strength'>Strength</label>
          <input
            id='strength'
            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
            value={strength}
            onChange={(e) => setStrength(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='Description'>Description</label>
          <input
            id='Description'
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='file'>Add Image</label>
          <input
            id='file'
           name='inverterImage'
           type="file"
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            onChange={e => setInverterImage(e.target.files)}
                    />
        </div>
        <div className='flex justify-between text-gray-400 py-2'>
          Already have an account?{' '}
          {/* <Link className='text-teal-500 hover:font-semibold' to={`/signin`}>Sign-In</Link> */}
        </div>
        <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">
          Add Solar
        </button>
        
      </form>
    </div>
  );
}



