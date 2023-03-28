
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addNewBatteryAction} from '../actions/batteryActions';
import { BatteryState } from '../reducers/batteryReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useForm } from 'react-hook-form';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ADD_NEW_BATTERY_RESET } from '../constants/batteryConstants';
import { RootState } from '../store';

interface Battery {
  _id: Number;
  type: string;
  batteryImage: File;
  capacity:Number;
  description:string;
}
interface AddallBatteriesState {
   
    loading: boolean;
    error:  any[] | null | string;
    batteries: Battery[];
    success: boolean;
  }
  interface AddBatteryStateWithAllBatteries extends BatteryState  {
    addBattery: AddallBatteriesState;
      
    }
export default function AddSolarBatteryPanels() : JSX.Element{
  const { register, handleSubmit,  formState: { errors } } = useForm(({ mode: 'onChange' }));
    // const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    
    const dispatch: ThunkDispatch<RootState, null, AnyAction>= useDispatch();
      // const [open, setOpen] = useState(false);
      // const [batteryImage, setBatteryImage] = useState<FileList | null>(null);

      // const [type, setType] = useState('');
      // const [capacity, setCapacity] = useState<number>(0);
      // const [description, setDescription] = useState('');
     
      
      const addBattery = useSelector<AddBatteryStateWithAllBatteries, AddallBatteriesState>((state) => state.addBattery);
      const { loading, error, success, batteries } = addBattery;
     
      useEffect(() => {
         if(success){
          dispatch({type: ADD_NEW_BATTERY_RESET})
          navigate('/AdminSolarBatteries')
         }
      }, [batteries]);
    
      const navigate = useNavigate();

 
      const insertHandler = (data: any) =>  {
      
        // e.preventDefault();
          const formData = new FormData();
    
          if (data.batteryImage && data.batteryImage.length > 0) {
            formData.append('batteryImage', data.batteryImage[0]);
          }
          formData.append('type', data.type);
          formData.append('capacity', data.capacity.toString());
          formData.append('description', data.description);

          dispatch(addNewBatteryAction(formData));          
        
      };


    
    return (
      <div className='  flex flex-col justify-center bg-amber-100 w-full col-span-10'>

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
        <h2 className='text-4xl text-white font-bold text-center'>Add Battery</h2>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='type'  className='font-bold text-white'>Type</label>
          <input
            id='type'
            className='rounded-lg bg-white mt-2 p-2 text-black focus:outline-none'
            type='text'
      
            {...register('type', { required: true,  maxLength: 25 })}
          />
          {errors.type && (<p className="text-red-700 font-medium">This field is required and cannot exceed 25 characters.</p>)}
      </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='capacity'  className='font-bold text-white'>Capacity</label>
          <input
            id='capacity'
            className='rounded-lg bg-white mt-2 p-2 text-black focus:outline-none'
            type='text'
            min={100}
            max={999}
            {...register('capacity', { required: true, min: 100, max: 999 })}
            />
           {errors.capacity &&( <p className="text-red-700 font-medium">This field is required and must be between 100 and 999.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='Description'  className='font-bold text-white'>Description</label>
          <input
            id='Description'
            className='p-2 rounded-lg bg-white mt-2 text-black focus:outline-none'
            type='text'
            maxLength={255}
            {...register('description', { required: true, maxLength: 255 })}
          />
         {errors.description && ( <p className="text-red-700 font-medium">This field is required and cannot exceed 255 characters.</p>)}
        </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='batteryImage'  className='font-bold text-white'>Add Image</label>
          <input
            id='batteryImage'
           type="file"
            className='p-2 rounded-lg bg-white mt-2 text-black focus:border-orange-400 focus:bg-gray-600 focus:outline-none'
            {...register('batteryImage', { required: true })}
            />
          {errors.batteryImage && ( <p className="text-red-700 font-medium">This field is required.</p>)}
        </div>
        <div className='flex flex-row justify-center'>
     <button className='w-1/4 my-5 py-2 bg-slate-500 shadow-lg shadow0-slate-600/50 hover:shadow-slate-600/40 text-white font-bold text-xl rounded-lg' type="submit">
          Add Panel
        </button>
     </div>
       
        
      </form>
    </div>
  );
}




