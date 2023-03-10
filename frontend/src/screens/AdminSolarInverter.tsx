import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getAllInverterAction, deleteInverterAction } from '../actions/inverterActions';
import { InverterState } from '../reducers/inverterReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';


interface Inverter {
  _id: Number;
  type:string;
  strength:string;
  description:string;
}

interface GetallInvertersState {

  loading: boolean;
  error: string | null;
  inverters: Inverter[];
}

interface DeleteInverterState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

interface GetInverterStateWithAllInverters extends InverterState {
    getAllInverter: GetallInvertersState;
    
  }
  interface DeleteInverterStateWithAllInverters extends InverterState {
   
    deleteInverter:DeleteInverterState;
  }




export default function AdminSolarPanels(): JSX.Element {
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
     
  const navigate = useNavigate();
  const getAllInverter = useSelector<GetInverterStateWithAllInverters, GetallInvertersState>((state) => state.getAllInverter);

  const { loading, error, inverters } = getAllInverter;


  const deleteSolar = useSelector<DeleteInverterStateWithAllInverters, DeleteInverterState>((state) => state.deleteInverter);
  const { loading: loadingDel, success, error: errorDel } = deleteSolar;

  useEffect(() => {
    dispatch(getAllInverterAction());
  }, [dispatch, success]);

  if (!loading) {
    console.log(inverters);
  }

  const addHandler = () => {
    navigate('/AddSolarPanels');
  };

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: Number) => {
    dispatch(deleteInverterAction(id));
    event.preventDefault();
  };

  return (
    <div className='bg-cyan-800  flex flex-col justify-start w-full col-span-10 p-5' >
      {/* onClick={() => addHandler()} */}
      <button className='w-auto p-4 bg-gray-900 text-slate-200 rounded-md self-end' onClick={() => addHandler()}>
        Add Panels
        </button>
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
          {inverters.map((row, index) => (
            <tr className='hover:bg-cyan-100 bg-cyan-300 cursor-pointer duration-300'>
              <td className='py-3 px-6'>{row._id.toString()}</td>
                <td className='py-3 px-6'>{row.type}</td>
                <td className='py-3 px-6'>{row.strength}</td>
                <td className='py-3 px-6'>{row.description}</td>
              <td>
              <Link to={`/updatesolar/${row._id}?type=${row.type}?strength=${row.strength}?description=${row.description}`}>
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
