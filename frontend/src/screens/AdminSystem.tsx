/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { getAllSystemsAction } from '../actions/systemActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { SystemState } from '../reducers/systemReducer';
import { Client } from './AddClient';
import { Solar } from './AddSolarPanels';
import { Battery } from './AdminSolarBatteries';
import { Inverter } from './AdminSolarInverter';

interface System {
  client: Client,
  battery: Battery,
  inverter: Inverter,
  solarPanel: Solar, 
  numberSolarPanel:String;
  numberBattery :String;
  numberInverter :String;
}

interface GetallSystemsState {
  loading: boolean;
  error: any[] | null | string;
  systems: System[];
}
interface GetSystemStateWithAllSystems extends SystemState {
  getAllSystems: GetallSystemsState;

}

export default function AdminSystem(): JSX.Element {

  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

  const getAllSolars = useSelector<GetSystemStateWithAllSystems, GetallSystemsState>((state) => state.getAllSystems);

  const { loading, error, systems } = getAllSolars;

  useEffect(() => {
    dispatch(getAllSystemsAction());
  }, [dispatch]);

  if (!loading) {
    console.log(systems);
  }
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
{systems.map((system,index) => 
    <div className="grid grid-cols-1 gap-4" key={index}>
      <div className="p-4">
            <h2 className="text-lg font-medium text-gray-900">{system.client.name}</h2>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex justify-between flex-wrap">

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
      </div>
    </div>
  )}
  </div>
)
}