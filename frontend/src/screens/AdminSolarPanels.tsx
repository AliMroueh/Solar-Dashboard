import React, { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  getAllSolarAction, deleteSolarAction } from '../actions/solarActions';
import { SolarState } from '../reducers/solarReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

    interface Solar {
      _id: Number;
      type:string;
      strength:string;
      description:string;
      solarImage:string;
    }
    
    interface GetallSolarsState {
   
      loading: boolean;
      error: string | null;
      solars: Solar[];
    }

    interface DeleteSolarState {
      loading: boolean;
      success: boolean;
      error: string | null;
    }
    interface GetSolarStateWithAllSolars extends SolarState {
        getAllSolars: GetallSolarsState;
        
      }
      interface DeleteSolarStateWithAllSolars extends SolarState {
       
        deleteBattery:DeleteSolarState;
      }
    
   

export default function AdminSolarPanles(): JSX.Element {
    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
     
      const navigate = useNavigate();
      const getAllSolars = useSelector<GetSolarStateWithAllSolars, GetallSolarsState>((state) => state.getAllSolars);
    
      const { loading, error, solars } = getAllSolars;
    
      const deleteBattery = useSelector<DeleteSolarStateWithAllSolars, DeleteSolarState>((state) => state.deleteBattery);
      const { loading: loadingDel, success, error: errorDel } = deleteBattery;
    
      useEffect(() => {
        dispatch(getAllSolarAction());
      }, [dispatch, success]);
    
      if (!loading) {
        console.log(solars);
      }
    
      const addHandler = () => {
        navigate('/AddSolarPanels');
      };
    
      const deleteHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: Number) => {
        dispatch(deleteSolarAction(id));
        event.preventDefault();
      };
    
    
 

    
  
      return (


        <div className='bg-cyan-800  flex flex-col justify-start w-full col-span-10 p-5'>
              <button className='w-auto p-4 bg-gray-900 text-slate-200 rounded-md self-end' onClick={() => addHandler()}>
                Add Panels
              </button>
              {loading ? (
                <div>loading...</div>
              ) : (
                <div className='overflow-x-auto'>
                <table className='shadow-2x1 font-[Poppins] border-2 border-cyan-200 mt-4 w-full overflow-x-auto'>
                {/* // <table className='shadow-2x1 font-[Poppins] border-2 border-cyan-200 w-11/12 mx-auto'> */}
                  <thead className='text-white'>
                    <tr>
                      <th className='py-3 bg-cyan-800 text-center'>ID</th>
                      <th className='py-3 bg-cyan-800 text-center'>Type</th>
                      <th className='py-3 bg-cyan-800 text-center'>Capacity</th>
                      <th className='py-3 bg-cyan-800 text-center'>Description</th>
                      <th className='py-3 bg-cyan-800 text-center'>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {solars.map((row, index) => (
                      <tr key={index} className='hover:bg-cyan-100 bg-cyan-300 cursor-pointer duration-300'>
                        <td className='py-3 px-6 text-center'>{row._id.toString()}</td>
                        <td className='py-3 px-6 text-center'>{row.type}</td>
                        <td className='py-3 px-6 text-center'>{row.strength}</td>
                        <td className='py-3 px-6 text-center max-w-xs min-h-full'>{row.description}</td>
                        <td className='py-3 px-6 text-center xs:py-0 px-0'><img src={row.solarImage} alt="Battery" className='md:w-40 xs:w-full' /> </td>
                        <td className='py-3 px-6 text-center'>
                        <Link to={`/EditSolarPanels/${row._id}?type=${row.type}&capacity=${row.strength}&description=${row.description}&batteryImage=${row.solarImage}`}>
                            <button type='button' className='edit w-auto p-2 bg-blue-600 text-slate-200 rounded-md'>
                              Edit
                            </button>
                          </Link>
                          <button type='button' className='delete w-auto p-2 bg-red-600 text-slate-200 rounded-md ml-2' onClick={(event) => deleteHandler(event, row._id)}>
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


 