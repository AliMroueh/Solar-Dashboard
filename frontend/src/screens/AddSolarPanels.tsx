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
import { ADD_NEW_SOLAR_RESET } from '../constants/solarConstants';
import { RootState } from '../store';
export interface Solar {
  _id: Number;
  type: string;
  solarImage: File;
  strength:Number;
  description:string;

}
interface AddallSolarsState {
   
    loading: boolean;
    error:  any[] | null | string;
    solars: Solar[];
    success: boolean;
  }
  interface AddSolarStateWithAllSolars extends SolarState  {
    addSolar: AddallSolarsState;
    }
export default function AddSolarPanels() : JSX.Element{
  const { register, handleSubmit,  formState: { errors } } = useForm(({ mode: 'onChange' }));
    // const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    const dispatch: ThunkDispatch<RootState, null, AnyAction>= useDispatch();
 
      
      const addSolar = useSelector<AddSolarStateWithAllSolars, AddallSolarsState>((state) => state.addSolar);
      const { loading, error, solars, success } = addSolar;

      useEffect(() => {
        if(success){
          dispatch({type: ADD_NEW_SOLAR_RESET})
          navigate('/AdminSolarPanels');
        }
      }, [solars]);


   
     const navigate = useNavigate();

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
  

   
      };

  
  return (



<div className='  flex flex-col justify-center w-full col-span-10'>


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
        <h2 className='text-4xl text-white font-bold text-center'>Add Solar Panels</h2>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='type'>Type</label>
          <input
            id='type'
            className='rounded-lg bg-white mt-2 p-2 text-black focus:border-orange-400 focus:bg-yellow-400 focus:outline-none'
            type='text'
      
            {...register('type', { required: true,  maxLength: 25 })}
          />
          {errors.type && (<p className="text-red-500">This field is required and cannot exceed 25 characters.</p>)}
      </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='strength'>Strength</label>
          <input
            id='strength'
            className='rounded-lg bg-white mt-2 p-2 text-black focus:border-orange-400 focus:bg-yellow-600 focus:outline-none'
            type='text'
            min={100}
            max={999}
  
            {...register('strength', { required: true, min: 100, max: 999 })}
            />
           {errors.strength &&( <p className="text-red-800">This field is required and must be between 100 and 999.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='Description'>Description</label>
          <input
            id='Description'
            className='p-2 rounded-lg bg-white mt-2 text-black focus:border-orange-400 focus:bg-yellow-600 focus:outline-none'
            type='text'
            maxLength={255}
            {...register('description', { required: true, maxLength: 255 })}
          />
         {errors.description && ( <p className="text-red-800">This field is required and cannot exceed 255 characters.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='solarImage'>Add Image</label>
          <input
            id='solarImage'
           type="file"
            className='p-2 rounded-lg bg-white mt-2 text-black focus:border-orange-400 focus:bg-yellow-600 focus:outline-none'
            {...register('solarImage', { required: true })}
            />
          {errors.solarImage && ( <p className="text-red-800">This field is required.</p>)}
        </div>
     
        <button className='w-1/4 my-5 py-2 bg-green-500 shadow-lg shadow-green-500/50 hover:shadow-green-500/40 text-white font-semibold rounded-lg' type="submit">
          Add Panel
        </button>
        
      </form>
    </div>
  );
}




