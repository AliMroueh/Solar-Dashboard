import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { BatteryState } from '../reducers/batteryReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { updateBatteryAction, getAllBatteriesAction } from '../actions/batteryActions';


interface Battery {
  _id: string;
  type: string;
  batteryImage: File;
  capacity: string;
  description: string;
}
interface UpdateallBatteriesState {
  loading: boolean;
  error: string | null;
  batteries: Battery[];
}

interface UpdateBatteryStateWithAllBatteries extends BatteryState {
  updateBattery: UpdateallBatteriesState;
}

export default function UpdateBatteryPanel() {
  const location = useLocation();
  const Type = new URLSearchParams(location.search).get('type') ?? '';
const Capacity = new URLSearchParams(location.search).get('capacity') ?? '';
const Description = new URLSearchParams(location.search).get('description') ?? '';

  
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

  const [open, setOpen] = useState(false);
  const [batteryImage, setBatteryImage] = useState<FileList | null>(null);

  const [type, setType] = useState(Type);
  const [capacity, setCapacity] = useState(Capacity);
  const [description, setDescription] = useState(Description);

  const updateBattery = useSelector<UpdateBatteryStateWithAllBatteries, UpdateallBatteriesState>((state) => state.updateBattery);
  const { loading, error, batteries } = updateBattery;
  
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const updateHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    if (batteryImage && batteryImage.length > 0) {
      formData.append('batteryImage', batteryImage[0]);
    }
    formData.append('type', type);
    formData.append('capacity', capacity);
    formData.append('description', description);

    
    dispatch(updateBatteryAction(String(id), formData));

    


   
    
     navigate('/AdminSolarBatteries');

  };

  return (
    <div className='bg-cyan-800  flex flex-col justify-center w-full col-span-10'>
      <form className='w-11/12 mx-auto rounded-lg bg-cyan-900 p-8 px-8' onSubmit={updateHandler} >
        <h2 className='text-4xl text-white font-bold text-center'>Update Battery</h2>
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
          <label htmlFor='capacity'>Capacity</label>
          <input
            id='capacity'
            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
           
            type='text'
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
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
           
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='file'
            
            onChange={e => setBatteryImage(e.target.files)}   
          
          />
        </div>
        <div className='flex justify-between text-gray-400 py-2'>
       
          {/* <Link className='text-teal-500 hover:font-semibold' to={`/signin`}>Sign-In</Link> */}
        </div>
        <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">
          Update Battery
        </button>
        
      </form>
    </div>
  );
}



