import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { BatteryState } from '../reducers/batteryReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { updateBatteryAction, getAllBatteriesAction } from '../actions/batteryActions';
import { useForm } from 'react-hook-form';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { UPDATE_BATTERY_RESET } from '../constants/batteryConstants';
import { RootState } from '../store';


interface Battery {
  _id: string;
  type: string;
  batteryImage: File;
  capacity: Number;
  description: string;
}
interface UpdateallBatteriesState {
  loading: boolean;
  error:  any[] | null | string;
  batteries: Battery[];
  success: boolean;
}

interface UpdateBatteryStateWithAllBatteries extends BatteryState {
  updateBattery: UpdateallBatteriesState;
}

export default function UpdateBatteryPanel() {
  const { register, handleSubmit,  formState: { errors },setValue } = useForm(({ mode: 'onChange' }));
  const location = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const type = query.get('type') ?? '';
    const capacity = query.get('capacity') ?? '';
    const description = query.get('description') ?? '';

    setValue('type', type);
    setValue('capacity', capacity);
    setValue('description', description);
  }, [location.search, setValue]);

//   const Type = new URLSearchParams(location.search).get('type') ?? '';
// const Capacity = new URLSearchParams(location.search).get('capacity') ?? '';
// const Description = new URLSearchParams(location.search).get('description') ?? '';

  
  // const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
  const dispatch: ThunkDispatch<RootState, null, AnyAction>= useDispatch();

  // const [open, setOpen] = useState(false);
  // const [batteryImage, setBatteryImage] = useState<FileList | null>(null);

  // const [type, setType] = useState(Type);
  // const [capacity, setCapacity] = useState(Capacity);
  // const [description, setDescription] = useState(Description);

  const updateBattery = useSelector<UpdateBatteryStateWithAllBatteries, UpdateallBatteriesState>((state) => state.updateBattery);
  const { loading, error, batteries, success } = updateBattery;
  
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(success){
     navigate('/AdminSolarBatteries');
     dispatch({type:UPDATE_BATTERY_RESET})
    };
  }, [success, navigate, dispatch])
  

  const updateHandler = (data: any) => {
    // e.preventDefault();
    const formData = new FormData();

    if (data.batteryImage && data.batteryImage.length > 0) {
      formData.append('batteryImage', data.batteryImage[0]);
    }
    formData.append('type', data.type);
    formData.append('capacity', data.capacity.toString());
    formData.append('description', data.description);  
    dispatch(updateBatteryAction(String(id), formData));
  }
 

  return (
    <div className='flex flex-col justify-center bg-amber-100 w-full col-span-10'>
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
        <h2 className='text-4xl text-white font-bold text-center'>Update Battery</h2>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='type' className='font-bold text-white'>Type</label>
          <input
            id='type'
            className='rounded-lg bg-white mt-2 p-2 text-black focus:outline-none'
            type='text'
         
            {...register('type', { required: true,  maxLength: 25 })}
          />
          {errors.type && (<p className="text-red-500">This field is required and cannot exceed 25 characters.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='capacity' className='font-bold text-white'>Capacity</label>
          <input
            id='capacity'
            className='rounded-lg bg-white mt-2 p-2 text-black focus:outline-none'
           
            type='text'
     
            {...register('capacity', { required: true, min: 100, max: 999 })}
          />
           {errors.capacity &&( <p className="text-red-800">This field is required and must be between 100 and 999.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='Description' className='font-bold text-white'>Description</label>
          <input
            id='Description'
            className='rounded-lg bg-white mt-2 p-2 text-black focus:outline-none'
            type='text'
           
            maxLength={255}
            {...register('description', { required: true, maxLength: 255 })}
          />
          {errors.description && ( <p className="text-red-800">This field is required and cannot exceed 255 characters.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='file' className='font-bold text-white'>Add Image</label>
          <input
            id='file'
           
            className='rounded-lg bg-white mt-2 p-2 text-black focus:outline-none'
            type='file'
         
            {...register('batteryImage', { required: true })}
          />
          {errors.batteryImage && ( <p className="text-red-800">This field is required.</p>)}
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



