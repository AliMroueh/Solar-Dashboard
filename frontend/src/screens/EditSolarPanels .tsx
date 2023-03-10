import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { updateSolarAction} from '../actions/solarActions';
import { SolarState } from '../reducers/solarReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useParams} from 'react-router-dom';

interface Solar {
  _id: string;
  type: string;
  solarImage: File;
  strength:string;
  description:string;
}
interface EditallSolarsState {
   
    loading: boolean;
    error: string | null;
    solars: Solar[];
  }
  interface EditSolarStateWithAllSolars extends SolarState  {
    updateSolar: EditallSolarsState;
      
    }
export default function EditSolarPanels() : JSX.Element{



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
      const { loading, error, solars } = editSolar;
    
   
      const { id } = useParams<{ id: string }>();
       
      const navigate = useNavigate();
    
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


<div className='bg-cyan-800  flex flex-col justify-center w-full col-span-10'>
      <form className='w-11/12 mx-auto rounded-lg bg-cyan-900 p-8 px-8' onSubmit={updateHandler} >
        <h2 className='text-4xl text-white font-bold text-center'>update Solar Panel</h2>
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
          <label htmlFor='strength'>Strength</label>
          <input
            id='strength'
            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
            value={strength}
            onChange={(e) => setStrength(e.target.value)}
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
           name='solarImage'
           type="file"
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            onChange={e => setSolarImage(e.target.files)}
                    />
        </div>
        <div className='flex justify-between text-gray-400 py-2'>
          Already have an account?{' '}
          {/* <Link className='text-teal-500 hover:font-semibold' to={`/signin`}>Sign-In</Link> */}
        </div>
        <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">
          Update
        </button>
        
      </form>
    </div>
  );
}



