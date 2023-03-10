import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addSolarAction} from '../actions/solarActions';
import { SolarState } from '../reducers/solarReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useForm } from 'react-hook-form';

interface Solar {
  _id: Number;
  type: string;
  solarImage: File;
  strengh:string;
  description:string;
}
interface AddallSolarsState {
   
    loading: boolean;
    error: string | null;
    Solar: Solar[];
  }
  interface AddSolarStateWithAllSolars extends SolarState  {
    addSolar: AddallSolarsState;
    }
export default function AddSolarPanels() : JSX.Element{
  const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    
    
      const [open, setOpen] = useState(false);
      const [solarImage, setSolarImage] = useState<FileList | null>(null);

      const [type, setType] = useState('');
      const [strength, setStrength] = useState('');
      const [description, setDescription] = useState('');
    
      
      const addSolar = useSelector<AddSolarStateWithAllSolars, AddallSolarsState>((state) => state.addSolar);
      const { loading, error, Solar } = addSolar;
    
      useEffect(() => {
        console.log(Solar);
      }, [Solar]);
    
      const navigate = useNavigate();
    
      const insertHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
          const formData = new FormData();
    
          if (solarImage && solarImage.length > 0) {
            formData.append('solarImage', solarImage[0]);
          }
          formData.append('type', type);
          formData.append('strength', strength);
          formData.append('description', description);
          dispatch(addSolarAction(formData));
        
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
            // onChange={(e) => setType(e.target.value)}
            maxLength={25}
              required
              {...register('type', { required: true, maxLength: 25 })}
            />
            {errors.type && <p>This field is required and cannot exceed 25 characters.</p>}
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='strength'>Strength</label>
          <input
            id='strength'
            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='number'
            value={strength}
            // onChange={(e) => setStrength(e.target.value)}
            min={100}
              max={999}
              required
              {...register('capacity', { required: true, min: 100, max: 999 })}
            />
            {errors.capacity && <p>This field is required and must be between 100 and 999.</p>}
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='Description'>Description</label>
          <input
            id='Description'
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
            value={description}
            // onChange={(e) => setDescription(e.target.value)}
            maxLength={255}
            required
            {...register('description', { required: true, maxLength: 255 })}
          />
          {errors.description && <p>This field is required and cannot exceed 255 characters.</p>}
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='file'>Add Image</label>
          <input
            id='file'
          //  name='solarImage'
           type="file"
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            // onChange={e => setSolarImage(e.target.files)}
            {...register('solarImage', { required: true })}
            />
            {errors.solarImage && <p>This field is required.</p>}
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



