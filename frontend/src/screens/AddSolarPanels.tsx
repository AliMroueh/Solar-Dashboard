import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addSolarAction} from '../actions/solarActions';
import { SolarState } from '../reducers/solarReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useForm } from 'react-hook-form';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

interface Solar {
  _id: Number;
  type: string;
  solarImage: File;
  strengh:Number;
  description:string;
}
interface AddallSolarsState {
   
    loading: boolean;
    error: any[] | null;
    Solar: Solar[];
  }
  interface AddSolarStateWithAllSolars extends SolarState  {
    addSolar: AddallSolarsState;
    }
export default function AddSolarPanels() : JSX.Element{
  const { register, handleSubmit,  formState: { errors } } = useForm(({ mode: 'onChange' }));
    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    
    
      const [open, setOpen] = useState(false);
      const [solarImage, setSolarImage] = useState<FileList | null>(null);

      const [type, setType] = useState('');
      const [strength, setStrength] = useState<number>(3);
      const [description, setDescription] = useState('');
    
      
      const addSolar = useSelector<AddSolarStateWithAllSolars, AddallSolarsState>((state) => state.addSolar);
      const { loading, error, Solar } = addSolar;
    
      useEffect(() => {
        console.log(Solar);
      }, [Solar]);
    
      const navigate = useNavigate();
    
      function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = parseInt(e.target.value);
        setStrength(newValue);
      }

      const insertHandler = (data: any) =>  {
      
        // e.preventDefault();
          const formData = new FormData();
    
          if (data.solarImage && data.solarImage.length > 0) {
            formData.append('solarImage', data.solarImage[0]);
          }
          formData.append('type', data.type);
          formData.append('strength', data.strength.toString());
          formData.append('description', data.description);
      

          dispatch(addSolarAction(formData));
          console.log(data);
  

          navigate('/AdminSolarPanels');
          setType('');
          setStrength(0);
          setDescription('');
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
      <form className='w-11/12 mx-auto rounded-lg bg-cyan-900 p-8 px-8' onSubmit={handleSubmit(insertHandler)} >
        <h2 className='text-4xl text-white font-bold text-center'>Add Solar Panel</h2>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='type'>Type</label>
          <input
            id='type'
            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
            required
              {...register('type', { required: true,  maxLength: 25 })}
            />
            {errors.type && (<p className="text-red-500">This field is required and cannot exceed 25 characters.</p>)}
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='strength'>Strength</label>
          <input
            id='strength'
            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='number'
            min={100}
            max={999}
            required
            {...register('strength', { required: true, min: 100, max: 999 })}
            />
           {errors.strength &&( <p className="text-red-500">This field is required and must be between 100 and 999.</p>)}
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='Description'>Description</label>
          <input
            id='Description'
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
            maxLength={255}
            required
            {...register('description', { required: true, maxLength: 255 })}
          />
         {errors.description && ( <p className="text-red-500">This field is required and cannot exceed 255 characters.</p>)}
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='file'>Add Image</label>
          <input
            id='file'
           type="file"
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            {...register('solarImage', { required: true })}
            />
          {errors.solarImage && ( <p className="text-red-500">This field is required.</p>)}
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



