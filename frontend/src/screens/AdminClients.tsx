import React, { useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { useDispatch, useSelector } from 'react-redux';
    import { Link } from 'react-router-dom';
    import { addClientAction, getAllClientsAction, deleteClientAction } from '../actions/clientActions';
    import { ClientState } from '../reducers/clientReducer';
    import { ThunkDispatch } from 'redux-thunk';
    import { AnyAction } from 'redux';
import { RootState } from '../store';

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
      interface DeleteClientStateWithAllClients extends ClientState {
       
        deleteClient:DeleteClientState;
      }
    
    interface DeleteClientState {
      loading: boolean;
      success: boolean;
      error: string | null;
    }

export default function AdminSolarClients(): JSX.Element {
    // const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
    const dispatch: ThunkDispatch<RootState, null, AnyAction>= useDispatch();
     
      const navigate = useNavigate();
      const getAllClients = useSelector<GetClientStateWithAllClients, GetallClientsState>((state) => state.getAllClients);
    
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




<div className='bg-amber-100  flex flex-col justify-start w-full col-span-10 p-5'>
      <button className='w-auto p-4 bg-orange-400 text-xl text-white font-semibold rounded-md self-end' onClick={() => addHandler()}>
        Add Clients
      </button>
      {loading ? (
        <div>loading...</div>
      ) : (
        <table className='shadow-2x1 font-[Poppins] border-2 border-slate-200 mt-4 w-full'>
          <thead className='text-white'>
            <tr>
              <th className='py-3 bg-slate-500 font-bold text-lg text-center'>Name</th>
              <th className='py-3 bg-slate-500 font-bold text-lg text-center'>Email</th>
              <th className='py-3 bg-slate-500 font-bold text-lg text-center'>Address</th>
              <th className='py-3 bg-slate-500 font-bold text-lg text-center'>Phone</th>
              <th className='py-3 bg-slate-500 font-bold text-lg text-center'>Image</th>
              <th className='py-3 bg-slate-500 font-bold text-lg text-center'>Option</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((row, index) => (
              <tr key={index} className=' bg-orange-400 cursor-pointer duration-300'>
                <td className='py-3 px-6 text-center'>{row.name}</td>
                <td className='py-3 px-6 text-center'>{row.email}</td>
                <td className='py-3 px-6 text-center'>{row.address}</td>
                <td className='py-3 px-6 text-center'>{row.phone}</td>
                <td className='py-3 px-6 text-center'><div className='flex flex-row justify-center'><img src={row.clientImage} alt="Client" /></div> </td>
                <td className='py-3 px-6 text-center'>
                <Link to={`/UpdateClient/${row._id}?name=${row.name}&email=${row.email}&address=${row.address}&phone=${row.phone}&clientImage=${row.clientImage}`}>
                    <button type='button' className='edit w-auto p-2 bg-green-600 text-slate-100 rounded-md'>
                      Edit
                    </button>
                  </Link>
                  <button type='button' className='delete w-auto p-2 bg-red-600 text-slate-100 rounded-md  ml-2 mt-2' onClick={(event) => deleteHandler(event, row._id)}>
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


