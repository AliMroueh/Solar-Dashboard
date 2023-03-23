import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addSystemAction} from '../actions/systemActions';
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
interface AddallSystemsState {
   // clientId // SolarPanelId///  numberSolarPanel//  BatteryId //  numberBattery ///  inverterId //  numberInverter 
    loading: boolean;
    error:  any[] | null | string;
    systems: System[];
    success: boolean;
  }
  interface AddSystemStateWithAllSystems extends SystemState  {
    addSystem: AddallSystemsState;
    
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



// 



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


    // 




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


export default function AddUserSystem() : JSX.Element{
  // const { register, handleSubmit,  formState: { errors } } = useForm(({ mode: 'onChange' }));
    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
      

    const navigate = useNavigate();


      const addSystem = useSelector<AddSystemStateWithAllSystems, AddallSystemsState>((state) => state.addSystem);
      const { loading, error, systems, success } = addSystem;



      const getAllSolars = useSelector<GetSolarStateWithAllSolars, GetallSolarsState>((state) => state.getAllSolars);
    
      const { loading : loadingsol, error : errorsol, solars } = getAllSolars;

  
    

      const getAllBatteries = useSelector<GetBatteryStateWithAllBatteries, GetallBatteriesState>((state) => state.getAllBatteries);
    
      const { loading:lodingbatt, error:errorbatt, batteries } = getAllBatteries;


      const getAllInverter = useSelector<GetInverterStateWithAllInverters, GetallInvertersState>((state) => state.getAllInverter);

      const { loading:loadinginv, error:errorinv, inverters } = getAllInverter;
      


      const getAllClients = useSelector<GetClientStateWithAllClients, GetallClientsState>((state) => state.getAllClients);
    
      const { loading:loadingcl, error:errorcl, clients } = getAllClients;
console.log(clients)

      const [clientId, setClientId] = useState('');
      // const [SolarPanelId, setSolarPanelId] = useState('');
      const [numberSolarPanel, setNumberSolarPanel] = useState('');
      const [BatteryId, setBatteryId] = useState('');
      const [numberBattery, setNumberBattery] = useState(1);
      const [inverterId, setInverterId] = useState('');
      const [numberInverter, setnumberInverter] = useState(1);

       const [Solar, setSolar] = useState<string>('choose solar ');
     


  
  


     useEffect(() => {
      dispatch(getAllSolarAction());
    }, [dispatch]);

    useEffect(() => {
      dispatch(getAllClientsAction());
    }, [dispatch]);

    useEffect(() => {
      dispatch(getAllBatteriesAction());
    }, [dispatch]);



     if (!loadingsol) {
     console.log(solars)
     }


    //  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
    //   insertHandler();
    // };
    useEffect(() => {
      console.log(clientId)
    }, [clientId])
    

  const insertHandler = () =>  {
    // e.preventDefault();
   // clientId // SolarPanelId///  numberSolarPanel//  BatteryId //  numberBattery ///  inverterId //  numberInverter 
  
  //  const formData = new FormData();
    
  //  formData.append('clientId', clientId.toString());
  //  formData.append('Solar', Solar.toString());
  //  formData.append('numberSolarPanel',numberSolarPanel.toString());
  //  formData.append('BatteryId',BatteryId.toString());
  //  formData.append('numberBattery',numberBattery.toString());
  //  formData.append('inverterId',inverterId.toString());
  //  formData.append('numberInverter',numberInverter.toString());


  //  dispatch(addSystemAction(clientId.toString(),Solar.toString(),numberSolarPanel.toString(),BatteryId.toString(),numberBattery.toString(),inverterId.toString(),numberInverter.toString()));

  dispatch(
    addSystemAction({
      info: {
        clientId: clientId,
        solar: Solar.toString(),
        numberSolarPanel: numberSolarPanel.toString(),
        batteryId: BatteryId,
        numberBattery: numberBattery.toString(),
        inverterId: inverterId,
        numberInverter: numberInverter.toString()
      }
    })
  );
  
  //  console.log(formData);
    // const system = {


      // clientId:clientId,
      // SolarPanelId:SolarPanelId,
      // numberSolarPanel:numberSolarPanel,
      // BatteryId:BatteryId,
      // numberBattery:numberBattery,
      // inverterId:inverterId,
      // numberInverter:numberInverter,
      

    // };

   

  };

  return (



<div className='  flex flex-col justify-center w-full col-span-10'>


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



 <form className='w-6/12 mx-auto rounded-lg bg-orange-400 p-8 px-8'  onSubmit={insertHandler} >
     <div className='input_style'>
      
      {loadingcl && <LoadingBox></LoadingBox>}
           {errorcl && <MessageBox>{errorsol}</MessageBox>}
           <div className='input_style'>
            <select value={clientId}
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
      
       {loadingsol && <LoadingBox></LoadingBox>}
            {errorsol && <MessageBox>{errorsol}</MessageBox>}
            <div className='input_style'>
             <select value={Solar} 
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
          <label htmlFor='Description'>Description</label>
          <input
            id='numberSolarPanel'
            className='p-2 rounded-lg bg-white mt-2 text-black focus:border-orange-400 focus:bg-yellow-600 focus:outline-none'
            type='number'
            value={numberSolarPanel}
            onChange={(e) => setNumberSolarPanel(e.target.value)}
         />
         </div>

   <div className='input_style'>
      
      {lodingbatt && <LoadingBox></LoadingBox>}
           {errorbatt && <MessageBox>{errorsol}</MessageBox>}
           <div className='input_style'>
            <select value={BatteryId} onChange={(e) => setBatteryId(e.target.value)}>
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
         <label htmlFor='Description'>Description</label>
         <input
           id='numberSolarPanel'
           className='p-2 rounded-lg bg-white mt-2 text-black focus:border-orange-400 focus:bg-yellow-600 focus:outline-none'
           type='text'
           value={numberSolarPanel}
          //  onChange={(e) => setNumberSolarPanel(e.target.value)}
          //  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setNumberSolarPanel(e.target.value)}
        />
        </div> 


        <button className='w-1/4 my-5 py-2 bg-green-500 shadow-lg shadow-green-500/50 hover:shadow-green-500/40 text-white font-semibold rounded-lg' type="submit">
          Add Panel
        </button>
        
      </form>
    </div>
  );
}




