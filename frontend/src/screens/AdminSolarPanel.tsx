import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addSolarAction,  getallSolarAction, deleteSolarAction } from '../actions/solarActions';
import { SolarState } from '../reducers/solarReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';


interface Solar {
  _id: Number;
  type:string;
  strength:string;
  description:string;
}

interface GetallSolarsState {

  loading: boolean;
  error: string | null;
  solars: Solar[];
}
interface GetSolarStateWithAllSolars extends SolarState {
    getAllSolar: GetallSolarsState;
    
  }
  interface DeleteSolarStateWithAllSolars extends SolarState {
   
    deleteSolar:DeleteSolarState;
  }

interface DeleteSolarState {
  loading: boolean;
  success: boolean;
  error: string | null;
}


export default function AdminSolarPanels(): JSX.Element {
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
     
  const navigate = useNavigate();
  const getAllSolars = useSelector<GetSolarStateWithAllSolars, GetallSolarsState>((state) => state.getAllSolar);

  const { loading, error, solars } = getAllSolars;

  const deleteBattery = useSelector<DeleteSolarStateWithAllSolars, DeleteSolarState>((state) => state.deleteSolar);
  const { loading: loadingDel, success, error: errorDel } = deleteBattery;

  useEffect(() => {
    dispatch(getallSolarAction());
  }, [dispatch, success]);

  if (!loading) {
    console.log(solars);
  }

  const addHandler = () => {
    navigate('/addbattery');
  };

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: Number) => {
    dispatch(deleteSolarAction(id));
    event.preventDefault();
  };

  return (
    <div className='bg-cyan-800  flex flex-col justify-start w-full col-span-10 p-5'>
      <button className='w-auto p-4 bg-gray-900 text-slate-200 rounded-md self-end'>Add Panels</button>
     {loading ? (
        <div>loading...</div>
      ) : (
        <table className='shadow-2x1 font-[Poppins] border-2 border-cyan-200 mt-4 w-full'>
          <thead className='text-white'>
            <tr>
            <th className='py-3 bg-cyan-800'>ID</th>
              <th className='py-3 bg-cyan-800'>Type</th>
              <th className='py-3 bg-cyan-800'>strength</th>
              <th className='py-3 bg-cyan-800'>Description</th>
          </tr>
          </thead>
          <tbody>
          {solars.map((row,index) =>(
            <tr key={index} className='hover:bg-cyan-100 bg-cyan-300 cursor-pointer duration-300'>
              <td className='py-3 px-6'>{row._id.toString()}</td>
                <td className='py-3 px-6'>{row.type}</td>
                <td className='py-3 px-6'>{row.strength}</td>
                <td className='py-3 px-6'>{row.description}</td>
              <td>
              <Link to={`/updatebattery/${row._id}?type=${row.type}?capacity=${row.strength}?description=${row.description}`}>
                    <button type='button' className='edit'>
                      Edit
                    </button>
                  </Link>
                  <button type='button' className='delete' onClick={(event) => deleteHandler(event, row._id)}>
                    Delete
                  </button>
                </td>
            </tr>
          ))}
          </tbody>
        </table>
        )}
      </div>
  );
};
