
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getallSolarAction,deleteSolarAction } from '../actions/solarActions';


export default function SolarPanels() {
    const submitHandler = () =>{
        console.log('hello')
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getallSolar = useSelector((state:any) => state.getallSolar)
    // constracture
    const { loading, error, solar } = getallSolar
  
    const deleteSolar = useSelector((state:any) => state.deleteSolar)
    const { loading: loadingDel, success, error: errorDel } = deleteSolar;
    const {
      pageNumber = 1,
    } = useParams();
  
    useEffect(() => {
      dispatch(getallSolarAction())
  
  
    }, [dispatch, success])
  
    if (!loading) {
      console.log(solar)
    }
  
    const addHandler = () => {
      navigate('/addproduct')
    }
  
  
  
  
  
    const deleteHandler = (id: any) => {
      dispatch(deleteSolarAction(id))
    }
  
    if (!loading) {
      console.log(solar)
    }
  
  return (
    <div className='bg-cyan-800  flex flex-col justify-start w-full col-span-10 p-5'>
        
            <button className='w-auto p-4 bg-gray-900 text-slate-200 rounded-md self-end'>Add Panels</button>
      {loading ?
        <p>error</p>
        :
        <table className='shadow-2x1 font-[Poppins] border-2 border-cyan-200 mt-4 w-full'>
          <thead className='text-white'>
            <tr>
          <th className='py-3 bg-cyan-800'>Hospital cases</th>
          <th className='py-3 bg-cyan-800'>Propable cases</th>
          <th className='py-3 bg-cyan-800'>Propable death</th>
          <th className='py-3 bg-cyan-800'>Confirm cases</th>
          <th className='py-3 bg-cyan-800'>Confirm death</th>
          <th className='py-3 bg-cyan-800'>Total cases</th>
          <th className='py-3 bg-cyan-800'>Total deaths</th>
          <th className='py-3 bg-cyan-800'>case 0-9</th>
          <th className='py-3 bg-cyan-800'>Action</th>
          </tr>
          </thead>
          <tbody>
          {solar.map((row: { _id: any; }, index: any) =>
            <tr className='hover:bg-cyan-100 bg-cyan-300 cursor-pointer duration-300'>
              <td className='py-3 px-6'>{row._id}</td>
              <td className='py-3 px-6'>3</td>
              <td className='py-3 px-6'>sm</td>
              <td className='py-3 px-6'>yoga</td>
              <td className='py-3 px-6'>boga</td>
              <td className='py-3 px-6'>boga</td>
              <td className='py-3 px-6'>boga</td>
              <td className='py-3 px-6'>boga</td>
              <td>

                  <Link to={`/edit/${row._id}`} className="edit"> <button
                    type="button"
                    className="edit"

                  >
                    Edit
                  </button></Link>
                  <button
                    type="button"
                    className="delete"
                    onClick={() => deleteHandler(row._id)}
                  >
                    Delete
                  </button>
                </td>
            </tr>
          )}
          </tbody>
        </table>
}
</div>
  )
}
