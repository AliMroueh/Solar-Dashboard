import express from "express";
import http from "http";
import * as socketio from "socket.io";
const port = 4001;


const app = express();
const httpServer = http.createServer(app);

const server = new socketio.Server(httpServer, {
    cors:{
        origin: '*',
    } 
})
let timeChange
let dayTime = [];
const data = [
    { name: 1, x: Math.random() * 10, y: Math.random() * 10 },
    { name: 2, x: Math.random() * 10, y: Math.random() * 10 },
    { name: 3, x: Math.random() * 10, y: Math.random() * 10 },
    { name: 4, x: Math.random() * 10, y: Math.random() * 10 },
    { name: 5, x: Math.random() * 10, y: Math.random() * 10 },
  ];
const data1 = [
    {name: '6 am', x: 5, y: 2},
    {name: '7 am', x: 6, y: 3},
    {name: '8 am', x: 6, y: 3},
    {name: '9 am', x: 7, y: 5},
    {name: '10 am', x: 9, y: 6},
    {name: '11 am', x: 10, y: 7},
    {name: '12 pm', x: 10, y: 8},
    {name: '1 pm', x: 10, y: 9},
    {name: '2 pm', x: 10, y: 8},
    {name: '3 pm', x: 10, y: 8},
    {name: '4 pm', x: 9, y: 5},
    {name: '5 pm', x: 9, y: 5},
    {name: '6 pm', x: 6, y: 4},
    {name: '7 pm', x: 5, y: 3},
    {name: '8 pm', x: 4, y: 2},
    {name: '9 pm', x: 3, y: 1},
    {name: '10 pm', x: 4, y: 2},
    {name: '11 pm', x: 6, y: 2},
    {name: '12 am', x: 4, y: 2},
    {name: '1 am', x: 3, y: 1},
    {name: '2 am', x: 2, y: 0},
    {name: '3 am', x: 4, y: 2},
    {name: '4 am', x: 3, y: 1},
    {name: '5 am', x: 4, y: 1},
]
server.on("connection",(socket) => {
    console.log('connected')
    if(timeChange) clearInterval(timeChange)

    // if(data.length > 5){
    //     data.reverse().pop()
    //     data.reverse()
    // }
    // data.push({name: data[data.length - 1].name + 1, x: Math.random() * 10, y: Math.random() * 10})

    if(dayTime.length < 24){
        dayTime.push(data1[dayTime.length])
    }
    
    timeChange = setInterval(() => socket.emit("message", dayTime), 5000)
})

httpServer.listen(port);