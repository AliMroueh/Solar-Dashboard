import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateSolarAction} from '../actions/solarActions';
import { SolarState } from '../reducers/solarReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useParams} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { UPDATE_SOLAR_RESET } from '../constants/solarConstants';




interface Solar {
  _id: string;
  type: string;
  solarImage: File;
  strength:string;
  description:string;
}
interface EditallSolarsState {
   
    loading: boolean;
    error:  any[] | null | string;
    solars: Solar[];
    success: boolean;
  }
  interface EditSolarStateWithAllSolars extends SolarState  {
    updateSolar: EditallSolarsState;
      
    }
export default function EditSolarPanels() : JSX.Element{

  const { register, handleSubmit,  formState: { errors } } = useForm(({ mode: 'onChange' }));

  const location = useLocation();
  const Type = new URLSearchParams(location.search).get('type') ?? '';
  const Strength = new URLSearchParams(location.search).get('strength') ?? '';
  const Description = new URLSearchParams(location.search).get('description') ?? '';

    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    
    
      const [open, setOpen] = useState(false);
      const [solarImage, setSolarImage] = useState<FileList | null>(null);

      const [type, setType] = useState(Type);
      const [strength, setStrength] = useState(Strength);
      const [description, setDescription] = useState(Description);
    
      
      const editSolar = useSelector<EditSolarStateWithAllSolars, EditallSolarsState>((state) => state.updateSolar);
      const { loading, error, solars , success} = editSolar;
    
   
      const { id } = useParams<{ id: string }>();
       
      const navigate = useNavigate();
      useEffect(() => {
        if(success){
         navigate('/AdminSolarPanels');
         dispatch({type:UPDATE_SOLAR_RESET})
        };
      }, [success, navigate, dispatch])
    
      const updateHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
          const formData = new FormData();
    
          if (solarImage && solarImage.length > 0) {
            formData.append('solarImage', solarImage[0]);
          }
          formData.append('type', type);
          formData.append('strength', strength);
          formData.append('description', description);

          dispatch(updateSolarAction(String(id), formData));
        
        
      };
    
  
  return (


<div className='bg-white  flex flex-col justify-center w-full col-span-10'>
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
      <form className='w-6/12 mx-auto rounded-lg bg-orange-400 p-8 px-8' onSubmit={updateHandler} >
        <h2 className='text-4xl text-white font-bold text-center'>update Solar Panel</h2>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='type'>Type</label>
          <input
            id='type'
            className='rounded-lg bg-white mt-2 p-2  focus:border-orange-400 focus:bg-yellow-400 focus:outline-none'
            type='text'
          //  value={type}
          //   onChange={(e) => setType(e.target.value)}
            {...register('type', { required: true,  maxLength: 25 })}
            />
            {errors.type && (<p className="text-red-500">This field is required and cannot exceed 25 characters.</p>)}
          </div>
        <div className='flex flex-col text-white py-2'>
          <label htmlFor='strength'>Strength</label>
          <input
            id='strength'
            className='rounded-lg bg-white mt-2 p-2  focus:border-orange-400 focus:bg-yellow-400 focus:outline-none'
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
            className='p-2 rounded-lg  bg-white mt-2  focus:border-orange-400 focus:bg-yellow-400 focus:outline-none'
            type='text'
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
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
            className='p-2 rounded-lg  bg-white mt-2   focus:border-orange-400 focus:bg-yellow-400 focus:outline-none'
            // onChange={e => setSolarImage(e.target.files)}
            {...register('solarImage', { required: true })}
            />
            {errors.solarImage && ( <p className="text-red-800">This field is required.</p>)}
          </div>
        <div className='flex justify-between text-white py-2'>
          Already have an account?{' '}
          {/* <Link className='text-teal-500 hover:font-semibold' to={`/signin`}>Sign-In</Link> */}
        </div>
        <button className='w-full my-5 py-2 bg-green-500 shadow-lg shadow-green-500/50 hover:shadow-green-500/40 text-white font-semibold rounded-lg' type="submit">
          Update
        </button>
        
      </form>
    </div>
  );
}



