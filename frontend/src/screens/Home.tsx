import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts';

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
      <LineChart
        width={1500}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="x" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="y" stroke="#387908" yAxisId={1} />
      </LineChart>
    </div>
  );
};

export default Home;