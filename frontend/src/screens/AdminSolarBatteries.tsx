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
        navigate('/addbattery');
      };
    
      const deleteHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: Number) => {
        dispatch(deleteBatteryAction(id));
        event.preventDefault();
      };
    
    
 

    
  
  return (
//     <div className='bg-cyan-800  flex flex-col justify-start w-full col-span-10 p-5'>
        
//             <button className='w-auto p-4 bg-gray-900 text-slate-200 rounded-md self-end'>Add Panels</button>
      
//         <p>error</p>
       
//         <table className='shadow-2x1 font-[Poppins] border-2 border-cyan-200 mt-4 w-full'>
//           <thead className='text-white'>
//             <tr>
//           <th className='py-3 bg-cyan-800'>Hospital cases</th>
//           <th className='py-3 bg-cyan-800'>Propable cases</th>
//           <th className='py-3 bg-cyan-800'>Propable death</th>
//           <th className='py-3 bg-cyan-800'>Confirm cases</th>
//           <th className='py-3 bg-cyan-800'>Confirm death</th>
//           <th className='py-3 bg-cyan-800'>Total cases</th>
//           <th className='py-3 bg-cyan-800'>Total deaths</th>
//           <th className='py-3 bg-cyan-800'>case 0-9</th>
//           <th className='py-3 bg-cyan-800'>Action</th>
//           </tr>
//           </thead>
//           <tbody>
          
//             <tr className='hover:bg-cyan-100 bg-cyan-300 cursor-pointer duration-300'>
//               <td className='py-3 px-6'></td>
//               <td className='py-3 px-6'>3</td>
//               <td className='py-3 px-6'>sm</td>
//               <td className='py-3 px-6'>yoga</td>
//               <td className='py-3 px-6'>boga</td>
//               <td className='py-3 px-6'>boga</td>
//               <td className='py-3 px-6'>boga</td>
//               <td className='py-3 px-6'>boga</td>
//               </tr>

                  
//           </tbody>
//         </table>

// </div>


<div className='bg-cyan-800  flex flex-col justify-start w-full col-span-10 p-5'>
      <button className='w-auto p-4 bg-gray-900 text-slate-200 rounded-md self-end' onClick={() => addHandler()}>
        Add Panels
      </button>
      {loading ? (
        <div>loading...</div>
      ) : (
        <table className='shadow-2x1 font-[Poppins] border-2 border-cyan-200 mt-4 w-full'>
          <thead className='text-white'>
            <tr>
              <th className='py-3 bg-cyan-800 text-center'>ID</th>
              <th className='py-3 bg-cyan-800 text-center'>Type</th>
              <th className='py-3 bg-cyan-800 text-center'>Capacity</th>
              <th className='py-3 bg-cyan-800 text-center'>Description</th>
            </tr>
          </thead>
          <tbody>
            {batteries.map((row, index) => (
              <tr key={index} className='hover:bg-cyan-100 bg-cyan-300 cursor-pointer duration-300'>
                <td className='py-3 px-6 text-center'>{row._id.toString()}</td>
                <td className='py-3 px-6 text-center'>{row.type}</td>
                <td className='py-3 px-6 text-center'>{row.capacity}</td>
                <td className='py-3 px-6 text-center'>{row.description}</td>
                <td className='py-3 px-6 text-center'>
                <Link to={`/UpdateBatteryPanel/${row._id}?type=${row.type}&capacity=${row.capacity}&description=${row.description}`}>
                    <button type='button' className='edit w-auto p-4 bg-blue-600 ml-8 text-slate-200 rounded-md self-end'>
                      Edit
                    </button>
                  </Link>
                  <button type='button' className='delete w-auto p-4 bg-red-600 mr-4 text-slate-200 rounded-md self-end' onClick={(event) => deleteHandler(event, row._id)}>
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



 