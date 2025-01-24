import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    console.log("Auth state:", { user, loader });
    if(loader ){
        return <div className="text-center" ><span className="loading loading-infinity loading-lg"></span></div>

    }
    if(user){
        return children
    }
    return <Navigate to='/login'  state={{ from: location }} replace ></Navigate>
    
};

export default PrivateRoute;