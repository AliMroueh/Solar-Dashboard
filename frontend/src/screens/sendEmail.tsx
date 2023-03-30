import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { sendEmailAction } from '../actions/emailActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { emailState } from '../reducers/emailReducer';
import { EmailState, getEmail } from './Home';


interface Props {
  // Define props here
}

  export default function SendEmail(props: Props): JSX.Element {

  const [name, setName] = useState<string>('');
  const [email1, setEmail1] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const sendEmail = useSelector<getEmail, EmailState>((state) => state.sendEmail);
  const { loading, error, email } = sendEmail;

  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

  const submitHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        dispatch(sendEmailAction(name, email1, subject, message))
        console.log(name, email1, subject, message)

        setName('');
        setEmail1('');
        setSubject('');
        setMessage('');
    }

return (
    <div className=' flex flex-col bg-amber-100 justify-center w-full col-span-10'>
      <header className="App-header">
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox>{error}</MessageBox>}
        {email && <MessageBox variant='info'>Email sent successfully</MessageBox>}
        <form className='w-6/12 mx-auto rounded-lg bg-orange-400 p-8 px-8' onSubmit={submitHandler}>
          <h1 className='text-4xl text-white font-bold text-center'>Send Email</h1>
          <div className='flex flex-col text-white py-2'>
            <label className='font-bold text-white' htmlFor="name">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className='rounded-lg text-black bg-white mt-2 p-2 focus:outline-none'
              value={name}
            ></input>
          </div>
          <div className='flex flex-col text-white py-2'>
            <label  className='font-bold text-white' htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail1(e.target.value)}
              type="email"
              className='rounded-lg text-black bg-white mt-2 p-2 focus:outline-none'
              value={email1}
            ></input>
          </div>
          <div className='flex flex-col text-white py-2'>
            <label className='font-bold text-white' htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              className='rounded-lg text-black bg-white mt-2 p-2 focus:outline-none'
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            ></input>
          </div>
          <div className='flex flex-col text-white py-2'>
            <label className='font-bold text-white' htmlFor="message">Message</label>
            <textarea
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-0 text-sm mt-2 p-2 text-gray-900 rounded-lg bg-white h-24" placeholder=" Write a comment..." 
              value={message}
            ></textarea>
          </div>
          <div>
            <label></label>
            <div className='flex flex-row justify-center'>
            <button className='w-1/4 my-5 py-2 bg-slate-500 shadow-lg shadow0-slate-600/50 hover:shadow-slate-600/40 text-white font-bold text-xl rounded-lg'
            disabled={loading || name==='' || email1==='' || subject === '' || message === ''} 
            type="submit">
              Sending
              {/* {loading ? 'Sending...' : 'Submit'} */}
            </button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}


