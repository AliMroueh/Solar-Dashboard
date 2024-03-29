export interface AllData {
    date: string;
    Solar_production: number;
    Load_consumption: number;
    Storage_production: number;
  }
  
export interface UserData {
    name: string;
    number: number;
    Email: string;
    solarData: AllData[];
  }

const userData : UserData[]= [
    {   
        name:'ali',
        number: 0,
        Email: 'alimroueh9999@gmail.com',
        solarData: [
            {date: '6 am', Solar_production: 500, Load_consumption: 200, Storage_production: 300},
            {date: '7 am', Solar_production: 600, Load_consumption: 300, Storage_production: 300},
            {date: '8 am', Solar_production: 600, Load_consumption: 300, Storage_production: 300},
            {date: '9 am', Solar_production: 700, Load_consumption: 500, Storage_production: 300},
            {date: '10 am', Solar_production: 900, Load_consumption: 600, Storage_production: 300},
            {date: '11 am', Solar_production: 1000, Load_consumption: 700, Storage_production: 300},
            {date: '12 pm', Solar_production: 1000, Load_consumption: 800, Storage_production: 300},
            {date: '1 pm', Solar_production: 1000, Load_consumption: 900, Storage_production: 300},
            {date: '2 pm', Solar_production: 1000, Load_consumption: 800, Storage_production: 300},
            {date: '3 pm', Solar_production: 1000, Load_consumption: 800, Storage_production: 300},
            {date: '4 pm', Solar_production: 900, Load_consumption: 500, Storage_production: 300},
            {date: '5 pm', Solar_production: 900, Load_consumption: 500, Storage_production: 300},
            {date: '6 pm', Solar_production: 600, Load_consumption: 400, Storage_production: 300},
            {date: '7 pm', Solar_production: 500, Load_consumption: 300, Storage_production: 300},
            {date: '8 pm', Solar_production: 400, Load_consumption: 200, Storage_production: 300},
            {date: '9 pm', Solar_production: 300, Load_consumption: 100, Storage_production: 300},
            {date: '10 pm', Solar_production: 400, Load_consumption: 200, Storage_production: 300},
            {date: '11 pm', Solar_production: 600, Load_consumption: 200, Storage_production: 300},
            {date: '12 am', Solar_production: 400, Load_consumption: 200, Storage_production: 300},
            {date: '1 am', Solar_production: 300, Load_consumption: 100, Storage_production: 300},
            {date: '2 am', Solar_production: 200, Load_consumption: 0, Storage_production: 300},
            {date: '3 am', Solar_production: 400, Load_consumption: 200, Storage_production: 300},
            {date: '4 am', Solar_production: 300, Load_consumption: 100, Storage_production: 300},
            {date: '5 am', Solar_production: 400, Load_consumption: 100, Storage_production: 300},
        ]
    },
    {   
        name:'mohamad',
        number: 1,
        Email: 'mkalout0@gmail.com',
        solarData: [
            {date: '6 am', Solar_production: 500, Load_consumption: 200, Storage_production: 300},
            {date: '7 am', Solar_production: 600, Load_consumption: 300, Storage_production: 300},
            {date: '8 am', Solar_production: 600, Load_consumption: 300, Storage_production: 300},
            {date: '9 am', Solar_production: 700, Load_consumption: 500, Storage_production: 300},
            {date: '10 am', Solar_production: 900, Load_consumption: 600, Storage_production: 300},
            {date: '11 am', Solar_production: 1000, Load_consumption: 700, Storage_production: 300},
            {date: '12 pm', Solar_production: 1000, Load_consumption: 800, Storage_production: 300},
            {date: '1 pm', Solar_production: 1000, Load_consumption: 900, Storage_production: 300},
            {date: '2 pm', Solar_production: 1000, Load_consumption: 800, Storage_production: 300},
            {date: '3 pm', Solar_production: 1000, Load_consumption: 800, Storage_production: 300},
            {date: '4 pm', Solar_production: 900, Load_consumption: 500, Storage_production: 300},
            {date: '5 pm', Solar_production: 900, Load_consumption: 500, Storage_production: 300},
            {date: '6 pm', Solar_production: 600, Load_consumption: 400, Storage_production: 300},
            {date: '7 pm', Solar_production: 500, Load_consumption: 300, Storage_production: 300},
            {date: '8 pm', Solar_production: 400, Load_consumption: 200, Storage_production: 300},
            {date: '9 pm', Solar_production: 300, Load_consumption: 100, Storage_production: 300},
            {date: '10 pm', Solar_production: 400, Load_consumption: 200, Storage_production: 300},
            {date: '11 pm', Solar_production: 600, Load_consumption: 200, Storage_production: 300},
            {date: '12 am', Solar_production: 400, Load_consumption: 200, Storage_production: 300},
            {date: '1 am', Solar_production: 300, Load_consumption: 100, Storage_production: 300},
            {date: '2 am', Solar_production: 200, Load_consumption: 0, Storage_production: 300},
            {date: '3 am', Solar_production: 400, Load_consumption: 200, Storage_production: 300},
            {date: '4 am', Solar_production: 300, Load_consumption: 100, Storage_production: 300},
            {date: '5 am', Solar_production: 400, Load_consumption: 100, Storage_production: 300},
        ]
    },
    {   
        name:'yasser',
        number: 2,
        Email: 'yassertraboulsi@gmail.com',
        solarData: [
            {date: '6 am', Solar_production: 500, Load_consumption: 200, Storage_production: 300},
            {date: '7 am', Solar_production: 600, Load_consumption: 300, Storage_production: 300},
            {date: '8 am', Solar_production: 600, Load_consumption: 300, Storage_production: 300},
            {date: '9 am', Solar_production: 700, Load_consumption: 500, Storage_production: 300},
            {date: '10 am', Solar_production: 900, Load_consumption: 600, Storage_production: 300},
            {date: '11 am', Solar_production: 1000, Load_consumption: 700, Storage_production: 300},
            {date: '12 pm', Solar_production: 1000, Load_consumption: 800, Storage_production: 300},
            {date: '1 pm', Solar_production: 1000, Load_consumption: 900, Storage_production: 300},
            {date: '2 pm', Solar_production: 1000, Load_consumption: 800, Storage_production: 300},
            {date: '3 pm', Solar_production: 1000, Load_consumption: 800, Storage_production: 300},
            {date: '4 pm', Solar_production: 900, Load_consumption: 500, Storage_production: 300},
            {date: '5 pm', Solar_production: 900, Load_consumption: 500, Storage_production: 300},
            {date: '6 pm', Solar_production: 600, Load_consumption: 400, Storage_production: 300},
            {date: '7 pm', Solar_production: 500, Load_consumption: 300, Storage_production: 300},
            {date: '8 pm', Solar_production: 400, Load_consumption: 200, Storage_production: 300},
            {date: '9 pm', Solar_production: 300, Load_consumption: 100, Storage_production: 300},
            {date: '10 pm', Solar_production: 400, Load_consumption: 200, Storage_production: 300},
            {date: '11 pm', Solar_production: 600, Load_consumption: 200, Storage_production: 300},
            {date: '12 am', Solar_production: 400, Load_consumption: 200, Storage_production: 300},
            {date: '1 am', Solar_production: 300, Load_consumption: 100, Storage_production: 300},
            {date: '2 am', Solar_production: 200, Load_consumption: 0, Storage_production: 300},
            {date: '3 am', Solar_production: 400, Load_consumption: 200, Storage_production: 300},
            {date: '4 am', Solar_production: 300, Load_consumption: 100, Storage_production: 300},
            {date: '5 am', Solar_production: 400, Load_consumption: 100, Storage_production: 300},
        ]
    }
]
export default userData;