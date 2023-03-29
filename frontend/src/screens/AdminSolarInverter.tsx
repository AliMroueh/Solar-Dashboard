import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getAllInverterAction, deleteInverterAction } from '../actions/inverterActions';
import { InverterState } from '../reducers/inverterReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';


export interface Inverter {
  _id: Number;
  type:string;
  strength:string;
  description:string;
  inverterImage:string;
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




export default function AdminSolarInverter(): JSX.Element {
  // const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
  const dispatch: ThunkDispatch<RootState, null, AnyAction>= useDispatch();
     
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
    navigate('/AddSolarInverter');
  };

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: Number) => {
    dispatch(deleteInverterAction(id));
    event.preventDefault();
  };

  
  return (


    <div className='bg-amber-100  flex flex-col justify-start w-full col-span-10 p-5'>
          <button className='w-auto p-4 bg-orange-400 text-xl text-white font-semibold rounded-md self-end' onClick={() => addHandler()}>
            Add Inverter
          </button>
          {loading ? (
            <div>loading...</div>
          ) : (
            <div className='overflow-x-auto'>
            <table className='shadow-2x1 font-[Poppins] border-2 border-slate-300 mt-4 w-full overflow-x-auto'>
            {/* // <table className='shadow-2x1 font-[Poppins] border-2 border-cyan-200 w-11/12 mx-auto'> */}
              <thead className='text-white'>
                <tr>
                  <th className='py-3  bg-slate-500 font-bold text-lg text-center'>Type</th>
                  <th className='py-3  bg-slate-500 font-bold text-lg text-center'>Strength</th>
                  <th className='py-3  bg-slate-500 font-bold text-lg text-center'>Description</th>
                  <th className='py-3  bg-slate-500 font-bold text-lg text-center'>Image</th>
                  <th className='py-3  bg-slate-500 font-bold text-lg text-center'>Option</th>
                </tr>
              </thead>
              <tbody>
                {inverters.map((row, index) => (
                  <tr key={index} className='bg-orange-400 cursor-pointer duration-300'>
                    <td className='py-3 px-6 text-center'>{row.type}</td>
                    <td className='py-3 px-6 text-center'>{row.strength}</td>
                    <td className='py-3 px-6 text-center max-w-xs min-h-full'>{row.description}</td>
                    <td className='py-3 px-6 text-center xs:py-0'><div className='flex flex-row justify-center'><img src={row.inverterImage} alt="Battery" className='md:w-40 xs:w-full' /></div> </td>
                    <td className='py-3 px-6 text-center'>
                    <Link to={`/UpdateInverterPanel/${row._id}?type=${row.type}&strength=${row.strength}&description=${row.description}&batteryImage=${row.inverterImage}`}>
                        <button type='button' className='edit w-auto p-2 bg-green-600 text-slate-100 rounded-md'>
                          Edit
                        </button>
                      </Link>
                      <button type='button' className='delete w-auto p-2 bg-red-600 text-slate-100 rounded-md ml-2 mt-2' onClick={(event) => deleteHandler(event, row._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
        </div>
      );
    };