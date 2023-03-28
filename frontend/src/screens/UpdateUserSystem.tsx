import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { updateSystemAction} from '../actions/systemActions';
import { SystemState } from '../reducers/systemReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useForm } from 'react-hook-form';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ADD_NEW_SYSTEM_RESET } from '../constants/systemConstants';
import { getAllSolarAction } from '../actions/solarActions';
import { SolarState } from '../reducers/solarReducer';
import { BatteryState } from '../reducers/batteryReducer';
import { InverterState } from '../reducers/inverterReducer';
import { ClientState } from '../reducers/clientReducer';
import { getAllBatteriesAction } from '../actions/batteryActions';
import { getAllClientsAction } from '../actions/clientActions';
import { getAllInverterAction } from '../actions/inverterActions';
import { RootState } from '../store';



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
interface UpdateAllSystemsState {
    loading: boolean;
    error:  any[] | null | string;
    systems: System[];
    success: boolean;
  }
  interface UpdateSystemStateWithAllSystems extends SystemState  {
    updateSystem: UpdateAllSystemsState;
    
    }

    // get solar
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

    interface GetSolarStateWithAllSolars extends SolarState {
        getAllSolars: GetallSolarsState;
        
      }
// end 

// get batteries  

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

//  get inverter

interface Inverter {
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
    // client

    interface Client {
      _id: Number;
      name: string;
      clientImage: string;
      email:string;
      address:string;
      phone:string;
    }
    interface GetallClientsState {
       
        loading: boolean;
        error: string | null;
        clients: Client[];
      }
  interface GetClientStateWithAllClients extends ClientState {
      getAllClients: GetallClientsState;
      
    }

    // 


export default function UpdateUserSystem() : JSX.Element{
  // const { register, handleSubmit,  formState: { errors } } = useForm(({ mode: 'onChange' }));
    // const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    const dispatch: ThunkDispatch<RootState, null, AnyAction>= useDispatch();
      
    const location = useLocation();

    
    // useEffect(() => {
        const query = new URLSearchParams(location.search);
        const client = query.get('client') ?? '';
        const solarPanel = query.get('solarPanel') ?? '';
        const NumberSolarPanel = query.get('numberSolarPanel') ?? '';
        const battery = query.get('battery') ?? '';
        const NumberBattery = query.get('numberBattery') ?? '';
        const inverter = query.get('inverter') ?? '';
        const NumberInverter = query.get('numberInverter') ?? '';
    
        const [clientId, setClientId] = useState<string>(client);
        const [numberSolarPanel, setNumberSolarPanel] = useState<string>(NumberSolarPanel);
      // }, [location.search]);


      const [BatteryId, setBatteryId] = useState<string>(battery);
      const [numberBattery, setNumberBattery] = useState<string>(NumberBattery);
      const [inverterId, setInverterId] = useState<string>(inverter);
      const [numberInverter, setnumberInverter] = useState<string>(NumberInverter);
       const [Solar, setSolar] = useState<string>(solarPanel);
      
    const navigate = useNavigate();


      const updateSystem = useSelector<UpdateSystemStateWithAllSystems, UpdateAllSystemsState>((state) => state.updateSystem);
      const { loading, error, systems, success } = updateSystem;
      
      useEffect(() => {
        if(success){
          // dispatch({type: ADD_NEW_INVERTER_RESET})
          navigate('/AdminSystem');
        }
      }, [navigate, success]);


      const getAllSolars = useSelector<GetSolarStateWithAllSolars, GetallSolarsState>((state) => state.getAllSolars);
    
      const { loading : loadingsol, error : errorsol, solars } = getAllSolars;

  
    

      const getAllBatteries = useSelector<GetBatteryStateWithAllBatteries, GetallBatteriesState>((state) => state.getAllBatteries);
    
      const { loading:lodingbatt, error:errorbatt, batteries } = getAllBatteries;


      const getAllInverter = useSelector<GetInverterStateWithAllInverters, GetallInvertersState>((state) => state.getAllInverter);

      const { loading:loadinginv, error:errorinv, inverters } = getAllInverter;
      


      const getAllClients = useSelector<GetClientStateWithAllClients, GetallClientsState>((state) => state.getAllClients);
    
      const { loading:loadingcl, error:errorcl, clients } = getAllClients;
 

    
    //    <Link to={`/UpdateUserSystem/${system.systemId}?client=${system.client._id}&solarPanel=${system.solarPanel._id}&numberSolarPanel=${system.numberSolarPanel}&battery=${system.battery._id}&numberBattery=${system.numberBattery}&inverter=${system.inverter._id}&numberInverter=${system.numberInverter}`}>

  


     useEffect(() => {
      dispatch(getAllSolarAction());
    }, [dispatch]);

    useEffect(() => {
      dispatch(getAllClientsAction());
    }, [dispatch]);

    useEffect(() => {
      dispatch(getAllBatteriesAction());
    }, [dispatch]);


    useEffect(() => {
      dispatch(getAllInverterAction());
    }, [dispatch]);


    useEffect(() => {
      console.log(clientId)
    }, [clientId])
    




     if (!loadingsol) {
     console.log(solars)
     }

     const { id } = useParams<{ id: string }>();
console.log(id)


  const updateHandler = (e: { preventDefault: () => void;}) =>  {
  e.preventDefault();
console.log(id,clientId,
            Solar,
         numberSolarPanel.toString(),
          BatteryId,
          numberBattery.toString(),
          inverterId,
           numberInverter.toString())
  dispatch(
    
    updateSystemAction(String(id) ,{
      info: {

        clientId:clientId,
        SolarPanelId: Solar,
        numberSolarPanel: numberSolarPanel.toString(),
        BatteryId: BatteryId,
        numberBattery: numberBattery.toString(),
        inverterId: inverterId,
        numberInverter: numberInverter.toString()
      }
    })
  );
  

   

  };

  return (



<div className='  flex flex-col justify-center w-full bg-amber-100 col-span-10'>


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



 <form className='w-6/12 mx-auto rounded-lg bg-orange-400 p-8 px-8'  onSubmit={updateHandler} >


     <div className='input_style'>
      
      {/* {loadingcl && <LoadingBox></LoadingBox>}
           {errorcl && <MessageBox>{errorcl}</MessageBox>} */}
           <div className='input_style'>
            <select value={clientId} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             onChange={(e) => setClientId(e.target.value)}>
               <option value='choose solar panels'>choose client </option>
               {clients.map((r, index) =>
                 <option value={r._id.toString()}>
                   {r.name}
                 </option>
               )}
             </select>
           </div> 
       </div>  


     <div className='input_style'>
            <div className='input_style'>
             <select value={Solar}  className="bg-gray-50 border border-gray-300 mt-5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             onChange={(e) => setSolar(e.target.value)}>
                <option value='choose solar panels'>choose panels </option>
                {solars.map((r, index) =>
                  <option value={r._id.toString()}>
                    {r.type}
                  </option>
                )}
              </select>
            </div> 
        </div>


        <div className='flex flex-col text-white py-2'>
          <label htmlFor='Description' className='font-bold text-white'>Numbee Panels</label>
          <input
            id='numberSolarPanel'
            className='p-2 rounded-lg bg-white mt-2 text-black focus:outline-none'
            type='number'
            value={numberSolarPanel}
            onChange={(e) => setNumberSolarPanel(e.target.value)}
         />
         </div>

   <div className='input_style'>
      
      {/* {lodingbatt && <LoadingBox></LoadingBox>}
           {errorbatt && <MessageBox>{errorbatt}</MessageBox>} */}
           <div className='input_style'>
            <select value={BatteryId} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setBatteryId(e.target.value)}>
               <option value='choose solar panels'>choose batteries </option>
               {batteries.map((r, index) =>
                 <option value={r._id.toString()}>
                   {r.type}
                 </option>
               )}
             </select>
           </div> 
       </div>

       <div className='flex flex-col text-white py-2'>
         <label htmlFor='Description' className='font-bold text-white'>Number Batteries</label>
         <input
           id='numberBattery'
           className='p-2 rounded-lg bg-white mt-2 text-black  focus:outline-none'
           type='number'
           value={numberBattery}
            onChange={(e) => setNumberBattery(e.target.value)}
          //  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setNumberSolarPanel(e.target.value)}
        />
        </div> 



        
        <div className='input_style'>
      {/* {loadinginv && <LoadingBox></LoadingBox>}
           {errorinv && <MessageBox>{errorinv}</MessageBox>} */}
           <div className='input_style'>
            <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={inverterId} onChange={(e) => setInverterId(e.target.value)}>
               <option value='choose solar panels'>choose invertres </option>
               {inverters.map((r, index) =>
                 <option value={r._id.toString()}>
                   {r.type}
                 </option>
               )}
             </select>
           </div> 
           </div>
   

       <div className='flex flex-col text-white py-2'>
         <label htmlFor='Description' className='font-bold text-white'>Number Inverters</label>
         <input
           id='numberBattery'
           className='p-2 rounded-lg bg-white mt-2 text-black  focus:outline-none'
           type='number'
           value={numberInverter}
            onChange={(e) => setnumberInverter(e.target.value)}

        />
        </div> 


        <div className='flex flex-row justify-center'>
     <button className='w-1/4 my-5 py-2 bg-slate-500 shadow-lg shadow0-slate-600/50 hover:shadow-slate-600/40 text-white font-bold text-xl rounded-lg' type="submit">
        Update
        </button>
     </div>
        
      </form>
    </div>
  );
}




