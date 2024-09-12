import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { baseURL } from '../utils';

function DeleteBook() {
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        axios.delete(`${baseURL}/book/book/`+id)
        .then(res => {
          if(res.data.deleted){
            
             navigate('/books');
          }
        })
        .catch(err => console.log(err))
      }, [])
}

export default DeleteBook