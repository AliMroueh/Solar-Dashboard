import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { sendEmailAction } from '../actions/emailActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
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
    <div className="App">
      <header className="App-header">
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox>{error}</MessageBox>}
        {email && <MessageBox variant='info'>Email sent successfully</MessageBox>}
        <form onSubmit={submitHandler}>
          <h1>Send Email</h1>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail1(e.target.value)}
              type="email"
              value={email1}
            ></input>
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            ></input>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <div>
            <label></label>
            <button className='p-5 bg-red-500'
            disabled={loading || name==='' || email1==='' || subject === '' || message === ''} 
            type="submit">
              Sending...
              {/* {loading ? 'Sending...' : 'Submit'} */}
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}
