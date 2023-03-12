import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, AreaChart, Legend, Area } from 'recharts';

interface Data {
  name: string;
  x: number;
  y: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const socket = socketIOClient('http://127.0.0.1:4001/');
    socket.on('message', (data: Data[]) => {
      setData(data);
      console.log('Data updated:', data);
    });
  }, [data]);

  return (
    <div>
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

     <h1>Simple Area Chart</h1>
       <AreaChart width={1000} height={300} data={data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        {/* <Tooltip> </Tooltip> */}
        <Legend></Legend>
        <Area type="monotone" dataKey="x" stroke="blue" fill="blue"/>
        <Area type="monotone" dataKey="y" stroke="green" fill="green"  />
        </AreaChart>
    </div>
  );
};

export default Home;