import React, {useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { InverterState } from '../reducers/inverterReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useForm } from 'react-hook-form';
import { updateInverterAction } from '../actions/inverterActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { UPDATE_INVERTER_RESET } from '../constants/inverterConstants';

interface Inverter {
  _id: string;
  type: string;
  inverterImage: File;
  strength: string;
  description: string;
}
interface UpdateallInvertersState {
  loading: boolean;
  error:  any[] | null | string;
  inverters: Inverter[];
  success: boolean;
}

interface UpdateInverterStateWithAllInverters extends InverterState {
  updateInverter: UpdateallInvertersState;
}

export default function UpdateInverterPanel() : JSX.Element {

  const { register, handleSubmit,  formState: { errors },setValue } = useForm(({ mode: 'onChange' }));

  const location = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const type = query.get('type') ?? '';
    const strength = query.get('strength') ?? '';
    const description = query.get('description') ?? '';

    setValue('type', type);
    setValue('strength', strength);
    setValue('description', description);
  }, [location.search, setValue]);


    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    
    
        const updateInverter = useSelector<UpdateInverterStateWithAllInverters, UpdateallInvertersState>((state) => state.updateInverter);
      const { loading, error, inverters ,success } = updateInverter;
   
      const { id } = useParams<{ id: string }>();
       
      const navigate = useNavigate();
      useEffect(() => {
        if(success){
         navigate('/AdminSolarInverter');
         dispatch({type:UPDATE_INVERTER_RESET})
        };
      }, [success, navigate, dispatch])
    
    const updateHandler = (data: any) => {

          const formData = new FormData();
    
          if (data.inverterImage && data.inverterImage.length > 0) {
            formData.append('inverterImage', data.inverterImage[0]);
          }
          formData.append('type', data.type);
          formData.append('strength', data.strength);
          formData.append('description', data.description);

          dispatch(updateInverterAction(String(id), formData));
      };




  return (
   
      
<div className='bg-amber-100  flex flex-col justify-center w-full col-span-10'>
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
      <form className='w-8/12 mx-auto rounded-lg bg-orange-400 p-8 px-8' onSubmit={handleSubmit(updateHandler)} >
        <h2 className='text-4xl text-white font-bold text-center'>Update Inverter</h2>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='type' className='font-bold text-white'>Type</label>
          <input
            id='type'
            className='rounded-lg text-black  bg-white mt-2 p-2 focus:outline-none'
            type='text'
            {...register('type', { required: true,  maxLength: 25 })}
            />
            {errors.type && (<p className="text-red-700 font-medium">This field is required and cannot exceed 25 characters.</p>)}
          </div>


        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='strength' className='font-bold text-white'>Strength</label>
          <input
            id='strength'
            className='rounded-lg text-black  bg-white mt-2 p-2 focus:outline-none'
            type='text'
            min={1}
            {...register('strength', { required: true, min: 1})}
            />
             {errors.strength &&( <p className="text-red-700 font-medium">This field is required and must be between 100 and 999.</p>)}
          </div>


        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='Description' className='font-bold text-white'>Description</label>
          <input
            id='Description'
            className='rounded-lg text-black  bg-white mt-2 p-2 focus:outline-none'
            type='text'
            maxLength={255}
            {...register('description', { required: true, maxLength: 255 })}
          />
          {errors.description && ( <p className="text-red-700 font-medium">This field is required and cannot exceed 255 characters.</p>)}
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label htmlFor='file' className='font-bold text-white'>Add Image</label>
          <input
            id='file'
            className='rounded-lg text-black  bg-white mt-2 p-2  focus:outline-none'
            type='file'
            
            {...register('inverterImage', { required: true })}
            />
            {errors.inverterImage && ( <p className="text-red-700 font-medium">This field is required.</p>)}
          </div>
        <div className='flex justify-between text-gray-400 py-2'>
       
          {/* <Link className='text-teal-500 hover:font-semibold' to={`/signin`}>Sign-In</Link> */}
        </div>
        <div className='flex flex-row justify-center'>
     <button className='w-1/4 my-5 py-2 bg-slate-500 shadow-lg shadow0-slate-600/50 hover:shadow-slate-600/40 text-white font-bold text-xl rounded-lg' type="submit">
          Update
        </button>
     </div>
        
      </form>
    </div>
  );
}



