import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }
};

export default PrivateRoute;