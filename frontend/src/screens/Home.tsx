import React, { useEffect, useState, useRef  } from 'react';
import socketIOClient from 'socket.io-client';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, AreaChart, Legend, Area } from 'recharts';
import { useDispatch } from 'react-redux';
import { sendEmailAction } from '../actions/emailActions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useSelector } from 'react-redux';
import { emailState } from '../reducers/emailReducer';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import userData, { AllData } from '../components/userData';
import { SystemState } from '../reducers/systemReducer';
import { getAllSystemsAction, summarySys } from '../actions/systemActions';
import { RootState } from '../store';
import { GetallSystemsState, GetSystemStateWithAllSystems, SolarAPI } from './AdminSystem';

export interface EmailState {
  loading: boolean;
  error: string | null;
  email: string;
}
export interface getEmail extends emailState  {
  sendEmail: EmailState;
  }

const Home: React.FC = () => {

  interface getSummary{
    loading: boolean;
    error: string | null;
    summary: {
      clients: any[any],
      batteries: any[any],
      inverters: any[any],
      solars: any[any],
      systems: any[any],
    };
  }
  interface getAllSummary extends SystemState {
    SysSummary: getSummary
  }
  const [data, setData] = useState<SolarAPI[]>([]);
  const [data1Index, setData1Index] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const previousSelectValue = useRef("");
  const [open, setOpen] = useState<boolean>(false);
  const [num, setNum] = useState<number>(0);


  const dispatch: ThunkDispatch<RootState, null, AnyAction>= useDispatch();
  const dispatch1: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
  const sendEmail = useSelector<getEmail, EmailState>((state) => state.sendEmail);
  const { loading, error, email } = sendEmail;

  const getAllData = useSelector<getAllSummary, getSummary>((state) => state.SysSummary);
  const { loading: loadingSummary, error: errorSymmary, summary } = getAllData;

  const getAllSystems = useSelector<GetSystemStateWithAllSystems, GetallSystemsState>((state) => state.getAllSystems);

const { loading: loadingSolarApi, error: errorSolarApi, systems } = getAllSystems;

  // useEffect(() =>{
  //   dispatch(sendEmailAction())
  // },[dispatch])

  // useEffect(() => {
  //   const socket = socketIOClient('http://127.0.0.1:4001/');
  //   socket.on('message', (data: Data[]) => {
  //     setData(data);
  //     console.log('Data updated:', data);
  //   });
  // }, [data]);
  // let timeChange: string | number | NodeJS.Timeout | undefined
  // let dayTime: any[] = [];
//   const data1 : Data1[] = [
//     {name: '6 am', x: 5, y: 2, z: 3},
//     {name: '7 am', x: 6, y: 3, z: 3},
//     {name: '8 am', x: 6, y: 3, z: 3},
//     {name: '9 am', x: 7, y: 5, z: 3},
//     {name: '10 am', x: 9, y: 6, z: 3},
//     {name: '11 am', x: 10, y: 7, z: 3},
//     {name: '12 pm', x: 10, y: 8, z: 3},
//     {name: '1 pm', x: 10, y: 9, z: 3},
//     {name: '2 pm', x: 10, y: 8, z: 3},
//     {name: '3 pm', x: 10, y: 8, z: 3},
//     {name: '4 pm', x: 9, y: 5, z: 3},
//     {name: '5 pm', x: 9, y: 5, z: 3},
//     {name: '6 pm', x: 6, y: 4, z: 3},
//     {name: '7 pm', x: 5, y: 3, z: 3},
//     {name: '8 pm', x: 4, y: 2, z: 3},
//     {name: '9 pm', x: 3, y: 1, z: 3},
//     {name: '10 pm', x: 4, y: 2, z: 3},
//     {name: '11 pm', x: 6, y: 2, z: 3},
//     {name: '12 am', x: 4, y: 2, z: 3},
//     {name: '1 am', x: 3, y: 1, z: 3},
//     {name: '2 am', x: 2, y: 0, z: 3},
//     {name: '3 am', x: 4, y: 2, z: 3},
//     {name: '4 am', x: 3, y: 1, z: 3},
//     {name: '5 am', x: 4, y: 1, z: 3},
// ]
  // useEffect(() => {
  //   // if(timeChange) clearInterval(timeChange)
  //   timeChange = setInterval(() => {if(data.length < 24){
  //     setData(data1[dayTime.length])
  // }} , 5000)
  // }, [data]);

  useEffect(() => {
    previousSelectValue.current = selected;

    if(previousSelectValue.current.slice(-2) !== selected){
      setData([])
      setData1Index(0)
      console.log(previousSelectValue.current)
      console.log(selected)
    }else{
      console.log(previousSelectValue.current.slice(-2))
      console.log(selected)
    }
  }, [previousSelectValue, selected]);

  useEffect(()=> {
    dispatch(getAllSystemsAction());
    dispatch(summarySys())
    setData([])
    setData1Index(0)
  },[dispatch])

  useEffect(() => {
    const interval = setInterval(() => {
      
      if (selected.length > 0 && data.length < 24) {
        setData((prevData) => [...prevData, systems[num].solarApi[data1Index]]);
        setData1Index((prevIndex) => prevIndex + 1);
        if(systems[num].solarApi[data1Index].Solar_production - systems[num].solarApi[data1Index].Load_consumption <= 100){

        dispatch1(sendEmailAction(userData[num].name, userData[num].Email,'high consumption','5afef 2estehlak ya man'))
        }
      }else{
        return () => clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  },[data.length, data1Index, dispatch1, num, selected.length, systems]);

  return (
    <div className='col-span-5 bg-amber-100 flex flex-col justify-center items-center px-4'>
    
{loadingSummary ? <LoadingBox></LoadingBox>
:
error ? <MessageBox variant='danger'>{error}</MessageBox>
:
<div className="w-full flex flex-around justify-center flex-wrap gap-6">
    <div className="flex flex-col p-4 shadow-xl bg-gradient-to-r from-red-400 via-orange-300 to-yellow-400 rounded-lg gap-y-3 lg:w-1/6"
    >
      <div className="flex items-center gap-x-3">
        <div className="p-2 bg-white-800 rounded-lg">
        </div>
        <span
          className="text-xs font-medium" >
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 bg-white border-solid border-2 text-yellow-500 p-2 rounded-full relative right-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
        </div>
        </span>
        <p className='text-white font-bold -ml-12'>Clients</p>
        <span
          className="p-0.5 text-4xl text-white w-full text-center"
        >
          {summary?.clients[0]?.numClients || 0}
        </span>
      </div>
    </div>




    <div className="flex flex-col p-4 shadow-xl bg-gradient-to-r from-yellow-400 via-orange-300 to-red-400 rounded-lg gap-y-3 lg:w-1/6"
    >
      <div className="flex items-center gap-x-3">
        <div className="p-2 bg-white-800 rounded-lg">
        </div>
        <p className='text-white text-3xl font-bold'>Batteries</p>
        <span
          className="text-xs font-medium" >
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14  bg-white border-solid border-2  text-yellow-500 p-2 rounded-full relative bottom-11 right-20">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
</svg>

        </div>
        </span>
        
        <span
          className=" text-4xl text-white w-full text-center"
        >
          {summary?.batteries[0]?.numBatteries || 0}
        </span>
      </div>
    </div>

    <div className="flex flex-col p-4 shadow-xl bg-gradient-to-r from-red-400 via-orange-300 to-yellow-400  rounded-lg gap-y-3 lg:w-1/6"
    >
      <div className="flex items-center gap-x-3">
        <div className="p-2 bg-white-800 rounded-lg">
        </div>
        <p className='text-white text-3xl font-bold'>Panels:</p>
        <span
          className="text-xs font-medium" >
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 bg-white border-solid border-2 text-yellow-500 p-2 rounded-full relative bottom-11">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
      </svg>

        </div>
        </span>
        
        <span
          className="p-0.5 text-4xl text-white w-full text-center"
        >
          {summary?.solars[0]?.numSolars || 0}
        </span>
      </div>
    </div>

    <div className="flex flex-col p-4 shadow-xl bg-gradient-to-r from-yellow-400 via-orange-300 to-red-400 rounded-lg gap-y-3 lg:w-1/6"
    >
      <div className="flex items-center gap-x-3">
        <div className="p-2 bg-white-800 rounded-lg">
        </div>
        <p className='text-white text-3xl font-bold'>Inverters:</p>
        <span
          className="text-xs font-medium" >
        <div>
          
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 bg-white border-solid border-2 text-yellow-500 p-2 rounded-full relative bottom-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
</svg>

        </div>
        </span>
      
        <span
          className="p-0.5 text-4xl text-white w-full text-center"
        >
          {summary?.inverters[0]?.numInverter || 0}
        </span>
      </div>
    </div>

    <div className="flex flex-col p-4 shadow-xl bg-gradient-to-r from-red-400 via-orange-300 to-yellow-400 rounded-lg gap-y-3 lg:w-1/6"
    >
      <div className="flex items-center gap-x-3">
        <div className="p-2 bg-white-800 rounded-lg">
        </div>
        <p className='text-white text-xl font-bold'>User Sytem:</p>
        <span
          className="p-0.5 text-4xl text-white w-full text-center"
        >
          {summary?.systems[0]?.numSystem || 0}
        </span>
        <span
          className="text-xs font-medium" >
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 bg-white border-solid border-2  text-yellow-500 p-2 rounded-full relative left-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>

        </div>
        </span>
        
      </div>
    </div>

  </div>
}
     {/* Start select box */}
     <div className="w-72 font-medium h-auto items-center self-center m-10 bg-red-400 rounded">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-orange-500 w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-white"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected
            : selected
          : "Select User"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter user name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {systems?.map((sys,index) => (
          <li
            key={index}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              `${sys.client.name} System ${sys.SystemNumber}`?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              `${sys.client.name} System ${sys.SystemNumber}`?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (`${sys.client.name} System ${sys.SystemNumber}`?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(`${sys.client.name} System ${sys.SystemNumber}`);
                setNum(index);
                setOpen(false);
                setInputValue("");

              }
            }}
          >
            {/* {user.slice(0,10)} */}
            {`${sys.client.name} System ${sys.SystemNumber}`}
          </li>
        ))}
        
      </ul>
    </div>
     {/* End select box */}
     {selected.length > 0 && <>
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant='danger'>{error}</MessageBox>}
      {email && <MessageBox variant='info'>Email sent successfully</MessageBox>}
     <h1 className='text-xl'>User Consumption</h1>
     <div className=' w-full overflow-x-auto p-10'>
        <AreaChart width={960} height={300} data={data} className=" bg-white rounded-lg">
            <CartesianGrid className='bg-red-500'></CartesianGrid>
            <XAxis dataKey="date"></XAxis>
            <YAxis></YAxis>
            {/* <Tooltip> </Tooltip> */}
            <Legend></Legend>
            <Area type="monotone" dataKey="Solar_production" stroke="blue" fill="blue"/>
            <Area type="monotone" dataKey="Load_consumption" stroke="green" fill="green"  />
            <Area type="monotone" dataKey="Storage_production" stroke="red" fill="yellow"  />
          </AreaChart>

      </div>
      </>}
    </div>
  );
};

export default Home;