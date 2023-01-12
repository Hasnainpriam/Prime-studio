import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import  { AuthContext } from '../../userContext/userContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){

      return <><h2 className='text-3xl my-6'>Loading.....</h2></>
      
    }

    if(user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;