import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RandomSingleInfo = () => {

    const [randomSingleInfo,setRandomSingleInfo] = useState({});
    useEffect(()=>{
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => setRandomSingleInfo(data.results[0]))
    })
    return (
        <div style={{padding:"20px"}}>
            <h2>This Api-data received by (Object-Array-object and inside object) these formatted, which is keeping Particular-Data inside this Layer's Array.(example: First-name,Last-name is the perfect example of this method.) </h2>

            <p><strong>Gender:</strong> {randomSingleInfo.gender}</p>
            <p><strong>Email:</strong> {randomSingleInfo.email}</p>

            <p><strong>FirstName:</strong> {randomSingleInfo.name && randomSingleInfo.name.first}</p>
            <p><strong>LastName:</strong> {randomSingleInfo.name?.last}</p>


          <Link to="/">
          <button>Go To Home</button>
          </Link>


        </div>
    );
};

export default RandomSingleInfo;