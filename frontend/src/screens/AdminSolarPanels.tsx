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
       
        deleteSolar:DeleteSolarState;
      }
    
   

export default function AdminSolarPanles(): JSX.Element {
    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
     
      const navigate = useNavigate();
      const getAllSolars = useSelector<GetSolarStateWithAllSolars, GetallSolarsState>((state) => state.getAllSolars);
    
      const { loading, error, solars } = getAllSolars;

  ;
    
      const deleteSolar = useSelector<DeleteSolarStateWithAllSolars, DeleteSolarState>((state) => state.deleteSolar);
      const { loading: loadingDel, success, error: errorDel } = deleteSolar;
    
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


        <div className='bg-amber-100 flex flex-col justify-start w-full col-span-10 p-5'>
        <button className='w-auto p-4 bg-orange-500 text-xl text-white font-semibold rounded-md self-end' onClick={() => addHandler()}>
          Add Panels
        </button>
        {loading ? (
          <div>loading...</div>
        ) : (
          <div className='overflow-x-auto'>
          <table className='shadow-2x1 font-[Poppins] border-2 border-slate-300 mt-4 w-full overflow-x-auto'>
          {/* // <table className='shadow-2x1 font-[Poppins] border-2 border-cyan-200 w-11/12 mx-auto'> */}
            <thead className='text-white'>
              <tr>
                <th className='py-3  bg-slate-600 font-bold text-xl text-center'>Type</th>
                <th className='py-3  bg-slate-600 font-bold text-xl text-center'>Strength</th>
                <th className='py-3  bg-slate-600 font-bold text-xl text-center'>Description</th>
                <th className='py-3  bg-slate-600 font-bold text-xl text-center'>Image</th>
                <th className='py-3  bg-slate-600 font-bold text-xl text-center'>Option</th>
              </tr>
            </thead>
            <tbody>
              {solars.map((row, index) => (
                <tr key={index} className='bg-orange-400 cursor-pointer duration-300'>
                  <td className='py-3 px-6 text-center'>{row.type}</td>
                  <td className='py-3 px-6 text-center'>{row.strength}</td>
                  <td className='py-3 px-6 text-center max-w-xs min-h-full'>{row.description}</td>
                  <td className='py-3 px-6 text-center xs:py-0 '><img src={row.solarImage} alt="Panels" className='md:w-40 xs:w-full' /> </td>
                  <td className='py-3 px-6 text-center'>
                  <Link to={`/EditSolarPanels/${row._id}?type=${row.type}&strength=${row.strength}&description=${row.description}&batteryImage=${row.solarImage}`}>
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


 