
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

interface Battery {
  _id: Number;
  type: string;
  batteryImage: File;
  capacity:Number;
  description:string;
}
interface AddallBatteriesState {
   
    loading: boolean;
    error:  any[] | null;
    batteries: Battery[];
  }
  interface AddBatteryStateWithAllBatteries extends BatteryState  {
    addBattery: AddallBatteriesState;
      
    }
export default function AddSolarBatteryPanels() : JSX.Element{
  const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    
    
      const [open, setOpen] = useState(false);
      const [batteryImage, setBatteryImage] = useState<FileList | null>(null);

      const [type, setType] = useState('');
      const [capacity, setCapacity] = useState<number>(3);
      const [description, setDescription] = useState('');
    
      
      const addBattery = useSelector<AddBatteryStateWithAllBatteries, AddallBatteriesState>((state) => state.addBattery);
      const { loading, error, batteries } = addBattery;
     
      useEffect(() => {
        console.log(batteries);
      }, [batteries]);
    
      const navigate = useNavigate();

       function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = parseInt(e.target.value);
    setCapacity(newValue);
  }
    
      const insertHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
          const formData = new FormData();
    
          if (batteryImage && batteryImage.length > 0) {
            formData.append('batteryImage', batteryImage[0]);
          }
          formData.append('type', type);
          formData.append('capacity', capacity.toString());
          formData.append('description', description);
         
         
          


          dispatch(addNewBatteryAction(formData));
          // navigate('/AdminSolarBatteries');
        
      };
    
    //   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     insertHandler();
    //   };
    

    // const submitHandler = () =>{
    //     console.log('hello')
    // }
  
    // handleSubmit((data) => console.log(data))
    if(!loading){
      console.log(error)
    }
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

 
        <form className='w-11/12 mx-auto rounded-lg bg-cyan-900 p-8 px-8' onSubmit={insertHandler}>
          <h2 className='text-4xl text-white font-bold text-center'>Add Battery</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label htmlFor='type'>Type</label>
            <input
              id='type'
              className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='text'
              onChange={(e) => setType(e.target.value)}
              // required
              // {...register('type', { required: true, validate: value => value.length <= 25 })}
            />
            {/* {errors.type && <p>This field is required and cannot exceed 25 characters.</p>} */}
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label htmlFor='capacity'>Capacity</label>
            <input
              id='capacity'
              className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='number'
              // value= {capacity.toString()}
              onChange={handleInputChange}
              // min={100}
              // max={999}
              // required
              // {...register('capacity', { required: true, min: 100, max: 999 })}
            />
            {/* {errors.capacity && <p>This field is required and must be between 100 and 999.</p>} */}
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label htmlFor='Description'>Description</label>
            <input
              id='Description'
              className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='text'
              onChange={(e) => setDescription(e.target.value)}
              // maxLength={255}
              // required
              // {...register('description', { required: true, maxLength: 255 })}
            />
            {/* {errors.description && <p>This field is required and cannot exceed 255 characters.</p>} */}
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label htmlFor='file'>Add Image</label>
            <input
              id='file'
              className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='file'
              // required
              onChange={e => setBatteryImage(e.target.files)}
              // {...register('batteryImage', { required: true })}
            />
            {/* {errors.batteryImage && <p>This field is required.</p>} */}
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            {/* <Link className='text-teal-500 hover:font-semibold' to={`/signin`}>Sign-In</Link> */}
          </div>
          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">
            Add Battery
          </button>
        </form>

      </div>
    );
    }    