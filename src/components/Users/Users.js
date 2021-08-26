import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users,setUsers] = useState([]);
    
    useEffect(()=>{
       const usersUrl="https://jsonplaceholder.typicode.com/users";
       fetch(usersUrl)
       .then(res => res.json())
       .then(data => setUsers(data))
    },[])

    return (
        <div style={{padding:"20px"}}>
            <h2>This Api-Data received by Array, which is keeping data inside Objects. We use it with Map function. </h2>
            <ol>
            {
              users.map(user => <li>{user.name}</li>)
            }
            </ol>

   
           <Link to="/">
           <button>Go To Home</button>
           </Link>
        </div>
    );
};

export default Users;