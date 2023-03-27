/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { getAllSystemsAction,  deleteSystemAction } from '../actions/systemActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { SystemState } from '../reducers/systemReducer';
import { Client } from './AddClient';
import { Solar } from './AddSolarPanels';
import { Battery } from './AdminSolarBatteries';
import { Inverter } from './AdminSolarInverter';

interface System {
  systemId:Number,
  clientId:any;
  client: Client,
  battery: Battery,
  inverter: Inverter,
  solarPanel: Solar, 
  numberSolarPanel:String;
  numberBattery :String;
  numberInverter :String;

  //  clientId:Client;
  // // client: Client,
  // BatteryId: Battery,
  // inverterId: Inverter,
  // solarPanel: Solar, 
  // numberSolarPanel:String;
  // numberBattery :String;
  // numberInverter :String;


}

interface GetallSystemsState {
  loading: boolean;
  error: any[] | null | string;
  systems: System[];
}
interface GetSystemStateWithAllSystems extends SystemState {
  getAllSystems: GetallSystemsState;

}



interface DeleteSystemState {
  loading: boolean;
  success: boolean;
  error: string | null;
}


interface DeleteSystemStateWithAllSystems extends SystemState {
       
  deleteSystem:DeleteSystemState;
}


export default function AdminSystem(): JSX.Element {
  const navigate = useNavigate();
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

  const getAllSystems = useSelector<GetSystemStateWithAllSystems, GetallSystemsState>((state) => state.getAllSystems);

  const { loading, error, systems } = getAllSystems;
  console.log(systems)



  const deleteSystems = useSelector<DeleteSystemStateWithAllSystems, DeleteSystemState>((state) => state.deleteSystem);
  const { loading: loadingDel, success, error: errorDel } = deleteSystems;

  useEffect(() => {
    dispatch(getAllSystemsAction());
  }, [dispatch]);

  if (!loading) {
    console.log(systems);

  }



  const addHandler = () => {
    navigate('/AddUserSystem');
  };


  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: Number) => {
    dispatch(deleteSystemAction(id));
    event.preventDefault();
  };


  return (
  <div className='col-span-5'>
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
  <button className='p-4 bg-orange-400 text-xl text-white font-semibold rounded-md self-end' onClick={() => addHandler()}>
          Add User System
        </button>
{systems.map((system,index) => 
    <div className="grid grid-cols-1 gap-4" key={index}>
       
         <div className="p-4">
            <h2 className="text-lg font-medium text-gray-900">{system.systemId.toString()}</h2>
      </div> 
      <div className="p-4">
            <h2 className="text-lg font-medium text-gray-900">{system.client.name}</h2>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex justify-between flex-wrap sm: gap-2">

        <div className="flex">
          <img src={system.inverter.inverterImage} alt="Inverter Image" className="h-24 w-24 object-fill"/>
          <div className="ml-4">
            <h3 className="text-md font-medium text-gray-900">{system.inverter.type}</h3>
            <p className="text-sm text-gray-500">{system.numberInverter}</p>
          </div>
        </div>

        <div className="flex">
          <img src={system.battery.batteryImage} alt="Battery Image" className="h-24 w-24 object-fill"/>
          <div className="ml-4">
            <h3 className="text-md font-medium text-gray-900">{system.battery.type}</h3>
            <p className="text-sm text-gray-500">{system.numberBattery}</p>
          </div>
        </div>

        <div className="flex">
          <img src={system.battery.batteryImage} alt="Solar Panel Image" className="h-24 w-24 object-fill"/>
          <div className="ml-4">
            <h3 className="text-md font-medium text-gray-900">{system.solarPanel.type}</h3>
            <p className="text-sm text-gray-500">{system.numberSolarPanel}</p>
          </div>
        </div>

        <div className="flex flex-col">
        <p>Solar Panels: 
          <span>
           {`${Number(system.numberSolarPanel) * Number(system.solarPanel.strength)}`}
          </span>
          </p>
          <p>Batteries: 
          <span>
           {`${Number(system.numberBattery) * Number(system.battery.capacity)}`}
          </span>
          </p>
          <p>Inverters: 
          <span>
           {`${Number(system.numberInverter) * Number(system.inverter.strength)}`}
          </span>
          </p>
        </div>
        
        <div className="flex">
        <table>
          <tr>
          <td className='py-3 px-6 text-center'>
            
          <Link to={`/UpdateUserSystem/${system.systemId}?client=${system.client._id}&solarPanel=${system.solarPanel._id}&numberSolarPanel=${system.numberSolarPanel}&battery=${system.battery._id}&numberBattery=${system.numberBattery}&inverter=${system.inverter._id}&numberInverter=${system.numberInverter}`}>
                      <button type='button' className='edit w-auto p-2 bg-green-600 text-slate-200 rounded-md'>
                        Edit
                      </button>
                    </Link>
                    <button type='button' className='delete w-auto p-2 bg-red-600 text-slate-200 rounded-md ml-2' onClick={(event) => deleteHandler(event, system.systemId)}>
                      Delete
                    </button>
                  </td>
          </tr>
        </table>
        </div>
      </div>
    </div>
  )}
  </div>
)
}