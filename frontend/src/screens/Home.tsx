import React, { useEffect, useState } from 'react';
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

interface Data {
  name: string;
  x: number;
  y: number;
}

const Home: React.FC = () => {

  interface EmailState {
    loading: boolean;
    error: string | null;
    email: string;
  }
  interface getEmail extends emailState  {
    sendEmail: EmailState;
    }

  const [data, setData] = useState<Data[]>([]);

  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

  const sendEmail = useSelector<getEmail, EmailState>((state) => state.sendEmail);
  const { loading, error, email } = sendEmail;

  // useEffect(() =>{
  //   dispatch(sendEmailAction())
  // },[dispatch])

  useEffect(() => {
    const socket = socketIOClient('http://127.0.0.1:4001/');
    socket.on('message', (data: Data[]) => {
      setData(data);
      console.log('Data updated:', data);
    });
  }, [data]);

  return (
    <div className='col-span-5 flex flex-col justify-center items-center px-4'>
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox>{error}</MessageBox>}

      {/* <LineChart
        width={500}
        height={700}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left-axis" />
        <Tooltip />
        
        <Line type="monotone" dataKey="x" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="y" stroke="#387908" yAxisId={1} />
      </LineChart> */}

{/* <LineChart width={1100} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left-axis" />
          <YAxis yAxisId="right-axis" orientation="right" />
          <Line yAxisId="left-axis" dataKey="x" 
           stroke="pink"/>
          <Line yAxisId="right-axis" dataKey="y" 
          stroke="blue" />
        </LineChart> */}

<div className="w-full flex flex-around justify-center flex-wrap gap-6">
    <div className="flex flex-col p-4 bg-yellow-200 rounded-lg gap-y-3 lg:w-1/6"
    >
      <div className="flex items-center gap-x-3">
        <div className="p-2 bg-white-800 rounded-lg">
        </div>
        <span
          className="text-xs font-medium" >
          {/* : className="stat.status === 'up' ? 'text-accent-green' : 'text-accent-red'"
        > */}
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 bg-yellow-300 text-yellow-500 p-1 rounded-full relative right-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
        </div>
        </span>
        <span
          className="p-0.5 text-4xl text-yellow-500 w-full text-center"
        >
          12
        </span>
      </div>
    </div>
    <div className="flex flex-col p-4 bg-yellow-200 rounded-lg gap-y-3 lg:w-1/6"
    >
      <div className="flex items-center gap-x-3">
        <div className="p-2 bg-white-800 rounded-lg">
        </div>
        <span
          className="text-xs font-medium" >
          {/* : className="stat.status === 'up' ? 'text-accent-green' : 'text-accent-red'"
        > */}
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 bg-yellow-300 text-yellow-500 p-1 rounded-full relative bottom-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
</svg>

        </div>
        </span>
        <span
          className="p-0.5 text-4xl text-white w-full text-center"
        >
          12
        </span>
      </div>
    </div>

    <div className="flex flex-col p-4 bg-yellow-200 rounded-lg gap-y-3 lg:w-1/6"
    >
      <div className="flex items-center gap-x-3">
        <div className="p-2 bg-white-800 rounded-lg">
        </div>
        <span
          className="text-xs font-medium" >
          {/* : className="stat.status === 'up' ? 'text-accent-green' : 'text-accent-red'"
        > */}
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 bg-yellow-300 text-yellow-500 p-1 rounded-full relative bottom-11">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
      </svg>

        </div>
        </span>
        <span
          className="p-0.5 text-4xl text-white w-full text-center"
        >
          12
        </span>
      </div>
    </div>

    <div className="flex flex-col p-4 bg-yellow-200 rounded-lg gap-y-3 lg:w-1/6"
    >
      <div className="flex items-center gap-x-3">
        <div className="p-2 bg-white-800 rounded-lg">
        </div>
        <span
          className="text-xs font-medium" >
          {/* : className="stat.status === 'up' ? 'text-accent-green' : 'text-accent-red'"
        > */}
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 bg-yellow-300 text-yellow-500 p-1 rounded-full relative bottom-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
</svg>


        </div>
        </span>
        <span
          className="p-0.5 text-4xl text-white w-full text-center"
        >
          12
        </span>
      </div>
    </div>

    <div className="flex flex-col p-4 bg-yellow-200 rounded-lg gap-y-3 lg:w-1/6"
    >
      <div className="flex items-center gap-x-3">
        <div className="p-2 bg-white-800 rounded-lg">
        </div>
        <span
          className="p-0.5 text-4xl text-white w-full text-center"
        >
          12
        </span>
        <span
          className="text-xs font-medium" >
          {/* : className="stat.status === 'up' ? 'text-accent-green' : 'text-accent-red'"
        > */}
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 bg-yellow-300 text-yellow-500 p-1 rounded-full relative left-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>

        </div>
        </span>
      </div>
    </div>

  </div>

     <h1 className='text-xl'>User Consumption</h1>
     <div className=' w-full overflow-x-auto p-10'>
        <AreaChart width={950} height={300} data={data} className="bg-yellow-200 rounded-lg">
            <CartesianGrid className='bg-red-500'></CartesianGrid>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            {/* <Tooltip> </Tooltip> */}
            <Legend></Legend>
            <Area type="monotone" dataKey="x" stroke="blue" fill="blue"/>
            <Area type="monotone" dataKey="y" stroke="green" fill="green"  />
            <Area type="monotone" dataKey="z" stroke="red" fill="yellow"  />
          </AreaChart>
        </div>
    </div>
  );
};

export default Home;