import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VisaDetails = () => {
    const [allVisa, setAllVisa] = useState([]);
    const {id} =useParams();
    console.log(typeof(id))

    useEffect(() =>{
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(data => setAllVisa(data))
    }, [])
    const foundVisa = allVisa.find(visa => visa.id == Number(id))
    console.log(foundVisa)
    return (
        <div>
            {/* <div>{foundVisa.country_name}</div> */}
            <div>{foundVisa.country_image}</div>
            <div>{foundVisa.description}</div>
            <div>{foundVisa.fee}</div>
            <div>{foundVisa.processing_time}</div>
            <div>{foundVisa.validity}</div>
            <div>{foundVisa.visa_type}</div>
            <div>{foundVisa.visa_type}</div>
            <div>{foundVisa.visa_type}</div>
        </div>
    );
};

export default VisaDetails;