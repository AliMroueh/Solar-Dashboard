import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addSystemAction} from '../actions/systemActions';
import { SystemState } from '../reducers/systemReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useForm } from 'react-hook-form';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ADD_NEW_SYSTEM_RESET } from '../constants/systemConstants';
import { getAllSolarAction } from '../actions/solarActions';

interface System {
  _id: Number;
  clientId: string;
  SolarPanelId:string;
  strengh:Number;
  description:string;
  numberSolarPanel:Number;
  BatteryId:string;
  numberBattery :Number;
  inverterId:string;
  numberInverter :Number;


}
interface AddallSystemsState {
   // clientId // SolarPanelId///  numberSolarPanel//  BatteryId //  numberBattery ///  inverterId //  numberInverter 
    loading: boolean;
    error:  any[] | null | string;
    systems: System[];
    success: boolean;
  }
  interface AddSystemStateWithAllSystems extends SystemState  {
    addSystem: AddallSystemsState;
    
    }
export default function AddSolarPanels() : JSX.Element{
  const { register, handleSubmit,  formState: { errors } } = useForm(({ mode: 'onChange' }));
    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    
 
      
      const addSystem = useSelector<AddSystemStateWithAllSystems, AddallSystemsState>((state) => state.addSystem);
      const { loading, error, systems, success } = addSystem;



      // const getAllSolarAction = useSelector<getSolarStateWithAllSolars, AddallSystemsState>((state) => state.addSystem);;

      // const { loading: loadingGet, error: errorGet, categories } = getallCategories;



      useEffect(() => {
        if(success){
          dispatch({type: ADD_NEW_SYSTEM_RESET})
          navigate('/AdminUserSystem');
        }
      }, [systems]);


   
     const navigate = useNavigate();

      const insertHandler = (data: any) =>  {
      
        // e.preventDefault();
          const formData = new FormData();
    // clientId // SolarPanelId///  numberSolarPanel//  BatteryId //  numberBattery ///  inverterId //  numberInverter 
          // if (data.solarImage && data.solarImage.length > 0) {
          //   formData.append('solarImage', data.solarImage[0]);
          // }
          formData.append('clientId', data.clientId);
          formData.append('SolarPanelId', data.SolarPanelId.toString());
          formData.append('numberSolarPanel', data.numberSolarPanel);
          formData.append('BatteryId', data.BatteryId);
          formData.append('numberBattery', data.numberBattery);
          formData.append('inverterId', data.inverterId);
          formData.append('numberInverter', data.numberInverter);
          
      

          dispatch(addSystemAction(formData));
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


{/* <div className='input_style'> */}
              {/* <select value={solars} onChange={(e) => setCategory(e.target.value)}>
                <option value='choose category'>choose categories </option>
                {categories.map((r, index) =>
                  <option value={r.name}>
                    {r.name}
                  </option>
                )}
              </select>
            </div> */}

      {/* <form className='w-6/12 mx-auto rounded-lg bg-orange-400 p-8 px-8'  onSubmit={handleSubmit(insertHandler)} >
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
        
      </form> */}
    </div>
  );
}




