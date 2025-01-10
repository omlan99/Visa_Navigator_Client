import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import axios from 'axios';

const MyVisa = () => {
    const {user} = useContext(AuthContext)
    const [myVisa, setMyVisa] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/myVisa?email=${user.email}`)
        .then(res => setMyVisa(res.data))
    },[])
    console.log(myVisa)
    return (
        <div>
            <h3>My visa is coming</h3>
        </div>
    );
};

export default MyVisa;