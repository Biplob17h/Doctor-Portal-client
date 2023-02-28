import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/UserContext';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <progress className="progress progress-error w-56" value="100" max="100"></progress>
    }
    if(user?.email){
        return children;
    }
    else{
        return <Navigate to='/auth/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoutes;