import React, { useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { useDispatch, useSelector } from 'react-redux';
    import { Link } from 'react-router-dom';
    import { addClientAction, getAllClientsAction, deleteClientAction } from '../actions/clientActions';
    import { ClientState } from '../reducers/clientReducer';
    import { ThunkDispatch } from 'redux-thunk';
    import { AnyAction } from 'redux';

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
    interface GetBatteryStateWithAllClients extends ClientState {
        getAllClients: GetallClientsState;
        
      }
      interface DeleteClientStateWithAllClients extends ClientState {
       
        deleteClient:DeleteClientState;
      }
    
    interface DeleteClientState {
      loading: boolean;
      success: boolean;
      error: string | null;
    }

export default function AdminSolarClients(): JSX.Element {
    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
     
      const navigate = useNavigate();
      const getAllClients = useSelector<GetBatteryStateWithAllClients, GetallClientsState>((state) => state.getAllClients);
    
      const { loading, error, clients } = getAllClients;
    
      const deleteClient = useSelector<DeleteClientStateWithAllClients, DeleteClientState>((state) => state.deleteClient);
      const { loading: loadingDel, success, error: errorDel } = deleteClient;
    
      useEffect(() => {
        dispatch(getAllClientsAction());
      }, [dispatch, success]);
    
      if (!loading) {
        console.log(clients);
      }
    
      const addHandler = () => {
        navigate('/AddClient');
      };
    
      const deleteHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: Number) => {
        dispatch(deleteClientAction(id));
        event.preventDefault();
      };
    
    
 

    
  
  return (




<div className='bg-white  flex flex-col justify-start w-full col-span-10 p-5'>
      <button className='w-auto p-4 bg-orange-400 text-xl text-white font-semibold rounded-md self-end' onClick={() => addHandler()}>
        Add Clients
      </button>
      {loading ? (
        <div>loading...</div>
      ) : (
        <table className='shadow-2x1 font-[Poppins] border-2 border-cyan-200 mt-4 w-full'>
          <thead className='text-white'>
            <tr>
              <th className='py-3 bg-orange-400 font-bold text-lg text-center'>ID</th>
              <th className='py-3 bg-orange-400 font-bold text-lg text-center'>Name</th>
              <th className='py-3 bg-orange-400 font-bold text-lg text-center'>Email</th>
              <th className='py-3 bg-orange-400 font-bold text-lg text-center'>Address</th>
              <th className='py-3 bg-orange-400 font-bold text-lg text-center'>Phone</th>
              <th className='py-3 bg-orange-400 font-bold text-lg text-center'>Image</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((row, index) => (
              <tr key={index} className='hover:bg-yellow-100 bg-yellow-300 cursor-pointer duration-300'>
                <td className='py-3 px-6 text-center'>{row._id.toString()}</td>
                <td className='py-3 px-6 text-center'>{row.name}</td>
                <td className='py-3 px-6 text-center'>{row.email}</td>
                <td className='py-3 px-6 text-center'>{row.address}</td>
                <td className='py-3 px-6 text-center'>{row.phone}</td>
                <td className='py-3 px-6 text-center'><img src={row.clientImage} alt="Client" /> </td>
                <td className='py-3 px-6 text-center'>
                <Link to={`/UpdateClient/${row._id}?name=${row.name}&email=${row.email}&address=${row.address}&phone=${row.phone}&clientImage=${row.clientImage}`}>
                    <button type='button' className='edit w-auto p-4 bg-green-600 ml-8 text-slate-200 rounded-md self-end'>
                      Edit
                    </button>
                  </Link>
                  <button type='button' className='delete w-auto p-4 bg-red-600 mr-4 text-slate-200 rounded-md self-end' onClick={(event) => deleteHandler(event, row._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};


