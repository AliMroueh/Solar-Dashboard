import React, {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { InverterState } from '../reducers/inverterReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { updateInverterAction } from '../actions/inverterActions';


interface Inverter {
  _id: string;
  type: string;
  inverterImage: File;
  strength: string;
  description: string;
}
interface UpdateallInvertersState {
  loading: boolean;
  error: string | null;
  inverters: Inverter[];
}

interface UpdateInverterStateWithAllInverters extends InverterState {
  updateInverter: UpdateallInvertersState;
}

export default function UpdateInverterPanel() {
  const location = useLocation();
  const Type = new URLSearchParams(location.search).get('type') ?? '';
const Strength = new URLSearchParams(location.search).get('strength') ?? '';
const Description = new URLSearchParams(location.search).get('description') ?? '';

  
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

  const [open, setOpen] = useState(false);
  const [inverterImage, setInverterImage] = useState<FileList | null>(null);

  const [type, setType] = useState(Type);
  const [strength, setStrength] = useState(Strength);
  const [description, setDescription] = useState(Description);

  const updateInverter = useSelector<UpdateInverterStateWithAllInverters, UpdateallInvertersState>((state) => state.updateInverter);
  const { loading, error, inverters } = updateInverter;
  
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const updateHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    if (inverterImage && inverterImage.length > 0) {
      formData.append('inverterImage', inverterImage[0]);
    }
    formData.append('type', type);
    formData.append('strength', strength);
    formData.append('description', description);

    
    dispatch(updateInverterAction(String(id), formData));

    


   
    
    // navigate('/batteries');

  };

  return (
    <div className='bg-cyan-800  flex flex-col justify-center w-full col-span-10'>
      <form className='w-11/12 mx-auto rounded-lg bg-cyan-900 p-8 px-8' onSubmit={updateHandler} >
        <h2 className='text-4xl text-white font-bold text-center'>Update Inverter</h2>
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
           
            className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='file'
            
            onChange={e => setInverterImage(e.target.files)}   
          
          />
        </div>
        <div className='flex justify-between text-gray-400 py-2'>
       
          {/* <Link className='text-teal-500 hover:font-semibold' to={`/signin`}>Sign-In</Link> */}
        </div>
        <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">
          Update Inverter
        </button>
        
      </form>
    </div>
  );
}



