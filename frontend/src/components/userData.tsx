interface AliData {
    name: string;
    x: number;
    y: number;
    z: number;
  }
  
  interface UserData {
    bateryState: number;
    aliData?: AliData[];
    mohamadData?: AliData[];
    yasserData?: AliData[];
  }

const userData : UserData[]= [
    {   bateryState: 50,
        aliData: [
            {name: '6 am', x: 5, y: 2, z: 3},
            {name: '7 am', x: 6, y: 3, z: 3},
            {name: '8 am', x: 6, y: 3, z: 3},
            {name: '9 am', x: 7, y: 5, z: 3},
            {name: '10 am', x: 9, y: 6, z: 3},
            {name: '11 am', x: 10, y: 7, z: 3},
            {name: '12 pm', x: 10, y: 8, z: 3},
            {name: '1 pm', x: 10, y: 9, z: 3},
            {name: '2 pm', x: 10, y: 8, z: 3},
            {name: '3 pm', x: 10, y: 8, z: 3},
            {name: '4 pm', x: 9, y: 5, z: 3},
            {name: '5 pm', x: 9, y: 5, z: 3},
            {name: '6 pm', x: 6, y: 4, z: 3},
            {name: '7 pm', x: 5, y: 3, z: 3},
            {name: '8 pm', x: 4, y: 2, z: 3},
            {name: '9 pm', x: 3, y: 1, z: 3},
            {name: '10 pm', x: 4, y: 2, z: 3},
            {name: '11 pm', x: 6, y: 2, z: 3},
            {name: '12 am', x: 4, y: 2, z: 3},
            {name: '1 am', x: 3, y: 1, z: 3},
            {name: '2 am', x: 2, y: 0, z: 3},
            {name: '3 am', x: 4, y: 2, z: 3},
            {name: '4 am', x: 3, y: 1, z: 3},
            {name: '5 am', x: 4, y: 1, z: 3},
        ]
    },
    {   bateryState : 50,
        mohamadData: [
            {name: '6 am', x: 5, y: 2, z: 3},
            {name: '7 am', x: 6, y: 3, z: 3},
            {name: '8 am', x: 6, y: 3, z: 3},
            {name: '9 am', x: 7, y: 5, z: 3},
            {name: '10 am', x: 9, y: 6, z: 3},
            {name: '11 am', x: 10, y: 7, z: 3},
            {name: '12 pm', x: 10, y: 8, z: 3},
            {name: '1 pm', x: 10, y: 9, z: 3},
            {name: '2 pm', x: 10, y: 8, z: 3},
            {name: '3 pm', x: 10, y: 8, z: 3},
            {name: '4 pm', x: 9, y: 5, z: 3},
            {name: '5 pm', x: 9, y: 5, z: 3},
            {name: '6 pm', x: 6, y: 4, z: 3},
            {name: '7 pm', x: 5, y: 3, z: 3},
            {name: '8 pm', x: 4, y: 2, z: 3},
            {name: '9 pm', x: 3, y: 1, z: 3},
            {name: '10 pm', x: 4, y: 2, z: 3},
            {name: '11 pm', x: 6, y: 2, z: 3},
            {name: '12 am', x: 4, y: 2, z: 3},
            {name: '1 am', x: 3, y: 1, z: 3},
            {name: '2 am', x: 2, y: 0, z: 3},
            {name: '3 am', x: 4, y: 2, z: 3},
            {name: '4 am', x: 3, y: 1, z: 3},
            {name: '5 am', x: 4, y: 1, z: 3},
        ]
    },
    {   bateryState : 50,
        yasserData: [
            {name: '6 am', x: 5, y: 2, z: 3},
            {name: '7 am', x: 6, y: 3, z: 3},
            {name: '8 am', x: 6, y: 3, z: 3},
            {name: '9 am', x: 7, y: 5, z: 3},
            {name: '10 am', x: 9, y: 6, z: 3},
            {name: '11 am', x: 10, y: 7, z: 3},
            {name: '12 pm', x: 10, y: 8, z: 3},
            {name: '1 pm', x: 10, y: 9, z: 3},
            {name: '2 pm', x: 10, y: 8, z: 3},
            {name: '3 pm', x: 10, y: 8, z: 3},
            {name: '4 pm', x: 9, y: 5, z: 3},
            {name: '5 pm', x: 9, y: 5, z: 3},
            {name: '6 pm', x: 6, y: 4, z: 3},
            {name: '7 pm', x: 5, y: 3, z: 3},
            {name: '8 pm', x: 4, y: 2, z: 3},
            {name: '9 pm', x: 3, y: 1, z: 3},
            {name: '10 pm', x: 4, y: 2, z: 3},
            {name: '11 pm', x: 6, y: 2, z: 3},
            {name: '12 am', x: 4, y: 2, z: 3},
            {name: '1 am', x: 3, y: 1, z: 3},
            {name: '2 am', x: 2, y: 0, z: 3},
            {name: '3 am', x: 4, y: 2, z: 3},
            {name: '4 am', x: 3, y: 1, z: 3},
            {name: '5 am', x: 4, y: 1, z: 3},
        ]
    }
]
export default userData;