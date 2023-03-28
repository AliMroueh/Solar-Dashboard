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
import { ADD_NEW_INVERTER_RESET } from '../constants/inverterConstants';
import { RootState } from '../store';

interface Inverter {
  _id: Number;
  type: string;
  inverterImage: File;
  strengh:Number;
  description:string;
}
interface AddallInvertersState {
   
    loading: boolean;
    error:  any[] | null | string;
    inverters: Inverter[];
    success: boolean;
  }
  interface AddInverterStateWithAllInverters extends InverterState  {
    addInverter: AddallInvertersState;
      
    }
export default function AddSolarInverter() : JSX.Element{
  const { register, handleSubmit,  formState: { errors } } = useForm(({ mode: 'onChange' }));
    // const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    const dispatch: ThunkDispatch<RootState, null, AnyAction>= useDispatch();

      const addInverter = useSelector<AddInverterStateWithAllInverters, AddallInvertersState>((state) => state.addInverter);
      const { loading, error, inverters, success } = addInverter;
      const navigate = useNavigate();
      useEffect(() => {
        if(success){
          dispatch({type: ADD_NEW_INVERTER_RESET})
          navigate('/AdminSolarInverter');
        }
      }, [dispatch, inverters, navigate, success]);
          
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

       
         
      };
    
  
  return (


<div className='  flex flex-col bg-amber-100 justify-center w-full col-span-10'>
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

      <form className='w-6/12 mx-auto rounded-lg bg-orange-400 p-8 px-8'  onSubmit={handleSubmit(insertHandler)} >
        <h2 className='text-4xl text-white font-bold text-center'>Add Solar Inverter</h2>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='type' className='font-bold text-white'>Type</label>
          <input
            id='type'
            className='rounded-lg text-black bg-white mt-2 p-2 focus:outline-none'
            type='text'
      
            {...register('type', { required: true,  maxLength: 25 })}
          />
          {errors.type && (<p className="text-red-700 font-medium">This field is required and cannot exceed 25 characters.</p>)}
      </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='strength' className='font-bold text-white'>Strength</label>
          <input
            id='strength'
            className='rounded-lg text-black bg-white mt-2 p-2 focus:outline-none'
            type='text'
            min={1}
            {...register('strength', { required: true,min:1 })}
            />
           {errors.strength &&( <p className="text-red-700 font-medium">This field is required and must be min 1 .</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='Description' className='font-bold text-white'>Description</label>
          <input
            id='Description'
            className='p-2 rounded-lg text-black bg-white mt-2 focus:outline-none'
            type='text'
            maxLength={255}
            {...register('description', { required: true, maxLength: 255 })}
          />
         {errors.description && ( <p className="text-red-700 font-medium">This field is required and cannot exceed 255 characters.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='file' className='font-bold text-white'>Add Image</label>
          <input
            id='file'
           type="file"
            className='p-2 rounded-lg text-black bg-white mt-2 focus:outline-none'
            {...register('inverterImage', { required: true })}
            />
          {errors.solarImage && ( <p className="text-red-700 font-medium">This field is required.</p>)}
        </div>
    
        <div className='flex flex-row justify-center'>
     <button className='w-1/4 my-5 py-2 bg-slate-500 shadow-lg shadow0-slate-600/50 hover:shadow-slate-600/40 text-white font-bold text-xl rounded-lg' type="submit">
          Add Inverter
        </button>
     </div>
        
      </form>
    </div>
  );
}



