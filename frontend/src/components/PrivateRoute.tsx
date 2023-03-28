import { useSelector } from 'react-redux';
// import { Redirect, Route } from 'react-router'
import { Navigate } from 'react-router-dom';
import { RootState } from '../store';

type Props = {
  children: React.ReactNode;
}

const PrivateRoute = ({children}: Props) =>{

    const userSignin = useSelector((state: RootState) => state.userSignin);

    const {userInfo} = userSignin;
    return userInfo ? children : <Navigate to="/signin" />
}

export default PrivateRoute;

// import { useSelector } from 'react-redux';
// // import { Navigate } from 'react-router-dom';
// import { RootState } from '../store';
// import { Navigate } from 'react-router-dom';

// // import { RootState } from 'path/to/rootReducer'; // Import the RootState type from your Redux root reducer

// type Props = {
//   children: React.ReactNode;
// }

// const PrivateRoute = ({ children }: Props) => {
//   const userSignin = useSelector((state: RootState) => state.userSignin);
//   const { userInfo } = userSignin;

//   return userInfo ? children : <Navigate to="/signin"/>;
// }

// export default PrivateRoute;