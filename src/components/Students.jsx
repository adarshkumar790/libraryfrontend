import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import StudentCard from './StudentCard'
import '../CSS/Book.css'

const baseURL = 'https://library-vp9e.onrender.com';

const Student = ({role}) => {
  const [students, setStudents] = useState([])
  useEffect(() => {
    axios.get(`${baseURL}/student/students`)
    .then(res => {
      setStudents(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  }, [])
  return (
    <div className='book-list'>
      {
        students.map(student => {
         return <StudentCard key={student.id} student = {student} role={role}> </StudentCard> 
        })
      }
    </div>
  )
}

export default Student