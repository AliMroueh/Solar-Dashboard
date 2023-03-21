import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addInverterAction} from '../actions/inverterActions';
import { InverterState } from '../reducers/inverterReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useForm } from 'react-hook-form';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

interface Inverter {
  _id: Number;
  type: string;
  inverterImage: File;
  strengh:Number;
  description:string;
}
interface AddallInvertersState {
   
    loading: boolean;
    error: any[]| null;
    inverters: Inverter[];
  }
  interface AddInverterStateWithAllInverters extends InverterState  {
    addInverter: AddallInvertersState;
      
    }
export default function AddSolarInverter() : JSX.Element{
  const { register, handleSubmit,  formState: { errors } } = useForm(({ mode: 'onChange' }));
    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    
    
      const [open, setOpen] = useState(false);
      const [inverterImage, setInverterImage] = useState<FileList | null>(null);

      const [type, setType] = useState('');
      const [strength, setStrength] = useState<number>(3);
      const [description, setDescription] = useState('');
    
      
      const addInverter = useSelector<AddInverterStateWithAllInverters, AddallInvertersState>((state) => state.addInverter);
      const { loading, error, inverters } = addInverter;
    
      useEffect(() => {
        console.log(inverters);
      }, [inverters]);
    
      const navigate = useNavigate();

      
      const insertHandler = (data: any) =>  {
      
        // e.preventDefault();
          const formData = new FormData();
    
          if (data.inverterImage && data.inverterImage.length > 0) {
            formData.append('inverterImage', data.inverterImage[0]);
          }
          formData.append('type', data.type);
          formData.append('strength', data.strength.toString());
          formData.append('description', data.description);
      

          dispatch(addInverterAction(formData));
          console.log(data);

          navigate('/AdminSolarInverter');
          setType('');
          setStrength(0);
          setDescription('');
      };
    
  
  return (


<div className='  flex flex-col justify-center w-full col-span-10'>

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
      <form className='w-6/12 mx-auto rounded-lg bg-orange-400 p-8 px-8'  onSubmit={handleSubmit(insertHandler)} >
        <h2 className='text-4xl text-white font-bold text-center'>Add Solar Inverter</h2>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='type'>Type</label>
          <input
            id='type'
            className='rounded-lg text-black bg-white mt-2 p-2  focus:border-orange-400 focus:bg-yellow-400 focus:outline-none'
            type='text'
      
            {...register('type', { required: true,  maxLength: 25 })}
          />
          {errors.type && (<p className="text-red-500">This field is required and cannot exceed 25 characters.</p>)}
      </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='strength'>Strength</label>
          <input
            id='strength'
            className='rounded-lg text-black bg-white mt-2 p-2 focus:border-orange-400 focus:bg-yellow-400 focus:outline-none'
            type='text'
            min={1}
            {...register('strength', { required: true,min:1 })}
            />
           {errors.strength &&( <p className="text-red-800">This field is required and must be between 100 and 999.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='Description'>Description</label>
          <input
            id='Description'
            className='p-2 rounded-lg text-black bg-white mt-2 focus:border-orange-400 focus:bg-yellow-400 focus:outline-none'
            type='text'
            maxLength={255}
            {...register('description', { required: true, maxLength: 255 })}
          />
         {errors.description && ( <p className="text-red-800">This field is required and cannot exceed 255 characters.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='file'>Add Image</label>
          <input
            id='file'
           type="file"
            className='p-2 rounded-lg text-black bg-white mt-2 focus:border-orange-400 focus:bg-yellow-400 focus:outline-none'
            {...register('inverterImage', { required: true })}
            />
          {errors.solarImage && ( <p className="text-red-800">This field is required.</p>)}
        </div>
    
        <button className='w-1/4 my-5 py-2 bg-green-500 shadow-lg shadow-green-500/50 hover:shadow-green-500/40 text-white font-semibold rounded-lg' type="submit">
          Add Inverter
        </button>
        
      </form>
    </div>
  );
}



