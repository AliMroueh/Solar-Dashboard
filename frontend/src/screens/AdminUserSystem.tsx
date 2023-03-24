import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllSystemsAction, deleteSystemAction } from '../actions/systemActions';
import { SystemState } from '../reducers/systemReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

interface System {
  _id: Number;
  clientId: string;
  SolarPanelId:string;
  numberSolarPanel:Number;
  BatteryId:string;
  numberBattery :Number;
  inverterId:string;
  numberInverter :Number;
}

interface GetallSystemsState {

  loading: boolean;
  error: string | null;
  systems: System[];
}

interface DeleteSystemState {
  loading: boolean;
  success: boolean;
  error: string | null;
}
interface GetSystemStateWithAllSystems extends SystemState {
  getAllSystems: GetallSystemsState;

}
interface DeleteSystemStateWithAllSystems extends SystemState {

  deleteSystem: DeleteSystemState;
}



export default function AdminSolarPanles(): JSX.Element {
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

  const navigate = useNavigate();
  const getAllSolars = useSelector<GetSystemStateWithAllSystems, GetallSystemsState>((state) => state.getAllSystems);

  const { loading, error, systems } = getAllSolars;

  // const deleteSolar = useSelector<GetSolarStateWithAllSolars, GetallSolarsState>((state) => state.deleteSolar);

  // const { loading, error, success } = deleteSolar;

  const deleteSolar = useSelector<DeleteSystemStateWithAllSystems, DeleteSystemState>((state) => state.deleteSystem);
  const { loading: loadingDel, success, error: errorDel } = deleteSolar;

  useEffect(() => {
    dispatch(getAllSystemsAction());
  }, [dispatch]);

  if (!loading) {
    console.log(systems);
  }

  const addHandler = () => {
    navigate('/AddSolarPanels');
  };

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: Number) => {
    dispatch(deleteSystemAction(id));
    event.preventDefault();
  };






  return (


    <div className='bg-white  flex flex-col justify-start w-full col-span-10 p-5'>
      <button className='w-auto p-4 bg-orange-400 text-xl text-white font-semibold rounded-md self-end' onClick={() => addHandler()}>
        Add Panels
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
                <th className='py-3  bg-orange-400 font-bold text-lg text-center'>client name</th>
                <th className='py-3  bg-orange-400 font-bold text-lg text-center'>type Solar panels</th>
                <th className='py-3  bg-orange-400 font-bold text-lg text-center'>Number Solar Panels</th>
                <th className='py-3  bg-orange-400 font-bold text-lg text-center'>type battery</th>
                <th className='py-3  bg-orange-400 font-bold text-lg text-center'>Number battery</th>
                <th className='py-3  bg-orange-400 font-bold text-lg text-center'>type inverter</th>
                <th className='py-3  bg-orange-400 font-bold text-lg text-center'>Number inverter</th>
                <th className='py-3  bg-orange-400 font-bold text-lg text-center'>Option</th>
              </tr>
            </thead>
            <tbody>
              {systems.map((row, index) => (
                <tr key={index} className='hover:bg-yellow-100 bg-yellow-300 cursor-pointer duration-300'>
                  <td className='py-3 px-6 text-center'>{row._id.toString()}</td>
                  <td className='py-3 px-6 text-center'>{row.clientId}</td>
                  <td className='py-3 px-6 text-center'>{row.SolarPanelId}</td>
                  <td className='py-3 px-6 text-center max-w-xs min-h-full'>{row.numberSolarPanel.toString()}</td>
                  <td className='py-3 px-6 text-center xs:py-0 '>{row.BatteryId}</td>
                  <td className='py-3 px-6 text-center xs:py-0 '>{row.numberBattery.toString()}</td>
                  <td className='py-3 px-6 text-center xs:py-0 '>{row.inverterId}</td>
                  <td className='py-3 px-6 text-center xs:py-0 '>{row.numberInverter.toString()}</td>
                  <td className='py-3 px-6 text-center'>
                    <Link to={`/EditUserSystem/${row._id}?type=${row.clientId}&strength=${row.SolarPanelId}&description=${row.numberSolarPanel}&batteryImage=${row.BatteryId}&inverterId=${row.inverterId}&numberInverter=${row.numberInverter}`}>
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


