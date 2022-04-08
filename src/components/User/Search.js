import { Button } from 'bootstrap';
import React, { useState } from 'react'
import './user.css';


const User = ({handleSearch}) => {
    const [username,setUsername] = useState('');


    const handleSubmit = (e) => {
      handleSearch(username);
    }



  return (
    <>
    <div className='container'>
    <input value={username} onChange={(e) => {
      setUsername(e.target.value)
      console.log(username,'<<< USERNAME')
    }} style={{outline:'none'}} type='text' placeholder="🔍 Search Github username "/>


    <div className="btn-search">
    <button onClick={handleSubmit}>Search</button>
    </div>
    </div>
    </>
    // <div className='user'>
       
    // </div>
  )
}

export default User