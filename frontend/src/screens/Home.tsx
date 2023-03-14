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

  useEffect(() =>{
    dispatch(sendEmailAction())
  },[dispatch])

  useEffect(() => {
    const socket = socketIOClient('http://127.0.0.1:4001/');
    socket.on('message', (data: Data[]) => {
      setData(data);
      console.log('Data updated:', data);
    });
  }, [data]);

  return (
    <div className='col-span-5 flex flex-col justify-center items-center'>
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

<div className="w-full flex gap-6">
    <div className="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3"
    >
      <div className="flex items-center gap-x-3">
        <div className="p-2 bg-gray-800 rounded-lg">
          {/* <Component :is="stat.icon" /> */}
        </div>
        <span
          className="text-xs font-medium" >
          {/* : className="stat.status === 'up' ? 'text-accent-green' : 'text-accent-red'"
        > */}
          25
        </span>
        <div
          className="p-0.5 rounded-full"
          // :className="stat.status === 'up' ? 'bg-accent-green/20' : 'bg-accent-red/20'"
        >
        </div>
      </div>
      <div className="text-3xl font-semibold text-white">22</div>
      <div className="text-sm tracking-wide text-gray-500">35</div>
    </div>
    <div className="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3"
    >
      <div className="flex items-center gap-x-3">
        <div className="p-2 bg-gray-800 rounded-lg">
          {/* <Component :is="stat.icon" /> */}
        </div>
        <span
          className="text-xs font-medium" >
          {/* : className="stat.status === 'up' ? 'text-accent-green' : 'text-accent-red'"
        > */}
          25
        </span>
        <div
          className="p-0.5 rounded-full"
          // :className="stat.status === 'up' ? 'bg-accent-green/20' : 'bg-accent-red/20'"
        >
        </div>
      </div>
      <div className="text-3xl font-semibold text-white">22</div>
      <div className="text-sm tracking-wide text-gray-500">35</div>
    </div>
    <div className="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3"
    >
      <div className="flex items-center gap-x-3">
        <div className="p-2 bg-gray-800 rounded-lg">
          {/* <Component :is="stat.icon" /> */}
        </div>
        <span
          className="text-xs font-medium" >
          {/* : className="stat.status === 'up' ? 'text-accent-green' : 'text-accent-red'"
        > */}
          25
        </span>
        <div
          className="p-0.5 rounded-full"
          // :className="stat.status === 'up' ? 'bg-accent-green/20' : 'bg-accent-red/20'"
        >
        </div>
      </div>
      <div className="text-3xl font-semibold text-white">22</div>
      <div className="text-sm tracking-wide text-gray-500">35</div>
    </div>
    <div className="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3"
    >
      <div className="flex items-center gap-x-3">
        <div className="p-2 bg-gray-800 rounded-lg">
          {/* <Component :is="stat.icon" /> */}
        </div>
        <span
          className="text-xs font-medium" >
          {/* : className="stat.status === 'up' ? 'text-accent-green' : 'text-accent-red'"
        > */}
          25
        </span>
        <div
          className="p-0.5 rounded-full"
          // :className="stat.status === 'up' ? 'bg-accent-green/20' : 'bg-accent-red/20'"
        >
        </div>
      </div>
      <div className="text-3xl font-semibold text-white">22</div>
      <div className="text-sm tracking-wide text-gray-500">35</div>
    </div>
  </div>

     <h1>Simple Area Chart</h1>
     <div className=' w-full overflow-x-auto '>
       <AreaChart width={1000} height={300} data={data}>
        <CartesianGrid></CartesianGrid>
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