import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SingleUser = () => {

    const [singleUser,setSingleUser] = useState({});
    useEffect(()=>{
        const user ="https://jsonplaceholder.typicode.com/users/1";
        fetch(user)
        .then(res => res.json())
        .then(data => setSingleUser(data))
    })
     

    return (
        <div style={{padding:"20px"}}>
            <h2>This Api-data received by Object, which is keeping Particular-Data inside this Array.(example: name,phone,email) </h2>
            <p><strong>Id:</strong> {singleUser.id}</p>
            <p><strong>Name:</strong> {singleUser.name}</p>
            <p><strong>Email:</strong> {singleUser.email}</p>
            <p><strong>Phone:</strong> {singleUser.phone}</p>
            <p><strong>company:</strong> {singleUser.company?.name}</p>


            <Link to="/">
            <button>Go To Home</button>
            </Link>


        </div>
    );
};

export default SingleUser;