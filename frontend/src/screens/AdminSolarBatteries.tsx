import React, { useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { useDispatch, useSelector } from 'react-redux';
    import { Link } from 'react-router-dom';
    import { addNewBatteryAction, getAllBatteriesAction, deleteBatteryAction } from '../actions/batteryActions';
    import { BatteryState } from '../reducers/batteryReducer';
    import { ThunkDispatch } from 'redux-thunk';
    import { AnyAction } from 'redux';

    interface Battery {
      _id: Number;
      type:string;
      capacity:string;
      description:string;
      batteryImage:string;
    }
    
    interface GetallBatteriesState {
   
      loading: boolean;
      error: string | null;
      batteries: Battery[];
    }
    interface GetBatteryStateWithAllBatteries extends BatteryState {
        getAllBatteries: GetallBatteriesState;
        
      }
      interface DeleteBatteryStateWithAllBatteries extends BatteryState {
       
        deleteBattery:DeleteBatteryState;
      }
    
    interface DeleteBatteryState {
      loading: boolean;
      success: boolean;
      error: string | null;
    }

export default function AdminSolarBatteries(): JSX.Element {
    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
     
      const navigate = useNavigate();
      const getAllBatteries = useSelector<GetBatteryStateWithAllBatteries, GetallBatteriesState>((state) => state.getAllBatteries);
    
      const { loading, error, batteries } = getAllBatteries;
    
      const deleteBattery = useSelector<DeleteBatteryStateWithAllBatteries, DeleteBatteryState>((state) => state.deleteBattery);
      const { loading: loadingDel, success, error: errorDel } = deleteBattery;
    
      useEffect(() => {
        dispatch(getAllBatteriesAction());
      }, [dispatch, success]);
    
      if (!loading) {
        console.log(batteries);
      }
    
      const addHandler = () => {
        navigate('/AddBatteryPanel');
      };
    
      const deleteHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: Number) => {
        dispatch(deleteBatteryAction(id));
        event.preventDefault();
      };
    
    
 

    
  
  return (


<div className='bg-white  flex flex-col justify-start w-full col-span-10 p-5'>
          <button className='w-auto p-4 bg-orange-400 text-xl text-white font-semibold rounded-md self-end' onClick={() => addHandler()}>
            Add Battery
          </button>
          {loading ? (
            <div>loading...</div>
          ) : (
            <div className='overflow-x-auto'>
            <table className='shadow-2x1 font-[Poppins] border-2 border-orange-600 mt-4 w-full overflow-x-auto'>
            {/* // <table className='shadow-2x1 font-[Poppins] border-2 border-cyan-200 w-11/12 mx-auto'> */}
              <thead className='text-white'>
                <tr>
                  <th className='py-3  bg-orange-400 font-bold text-lg text-center'>ID</th>
                  <th className='py-3  bg-orange-400 font-bold text-lg text-center'>Type</th>
                  <th className='py-3  bg-orange-400 font-bold text-lg text-center'>Capacity</th>
                  <th className='py-3  bg-orange-400 font-bold text-lg text-center'>Description</th>
                  <th className='py-3  bg-orange-400 font-bold text-lg text-center'>Image</th>
                  <th className='py-3  bg-orange-400 font-bold text-lg text-center'>Option</th>
                </tr>
              </thead>
              <tbody>
                {batteries.map((row, index) => (
                  <tr key={index} className='hover:bg-yellow-100 bg-yellow-300 cursor-pointer duration-300'>
                    <td className='py-3 px-6 text-center'>{row._id.toString()}</td>
                    <td className='py-3 px-6 text-center'>{row.type}</td>
                    <td className='py-3 px-6 text-center'>{row.capacity}</td>
                    <td className='py-3 px-6 text-center max-w-xs min-h-full'>{row.description}</td>
                    <td className='py-3 px-6 text-center xs:py-0 px-0'><img src={row.batteryImage} alt="Battery" className='md:w-40 xs:w-full' /> </td>
                    <td className='py-3 px-6 text-center'>
                    <Link to={`/UpdateBatteryPanel/${row._id}?type=${row.type}&capacity=${row.capacity}&description=${row.description}&batteryImage=${row.batteryImage}`}>
                        <button type='button' className='edit w-auto p-2 bg-green-600 text-slate-200 rounded-md'>
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


 