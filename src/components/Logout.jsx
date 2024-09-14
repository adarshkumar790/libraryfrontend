import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { baseURL } from '../utils'
const baseURL = 'https://library-vp9e.onrender.com';

function Logout({setRole}) {
    const navigate = useNavigate()
  useEffect(() => {
    axios.get(`${baseURL}/auth/logout`)
    .then(res => {
      if(res.data.logout){
        setRole('')
         navigate('/');
      }
    })
    .catch(err => console.log(err))
  }, [])
}

export default Logout