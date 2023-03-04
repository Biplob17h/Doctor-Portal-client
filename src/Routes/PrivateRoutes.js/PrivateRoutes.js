import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import { AuthContext } from '../../ContextApi/UserContext';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <>
            <RingLoader className='mx-auto my-auto'
                color="rgb(206, 44, 44)"
                size={500}
            />
        </>
    }
    if (user?.email) {
        return children;
    }
    else {
        return <Navigate to='/auth/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoutes;