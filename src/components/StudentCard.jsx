import React from 'react'
import { Link } from 'react-router-dom';

const StudentCard = ({student, role}) => {
    const {roll, username} = student;


  return (
    <div className='book-card'>
          <div className='book-details'>
           <h3> {roll} </h3>
            <p> {username} </p>
          </div>
          {/* {role === "admin" &&
          <div className='book-actions'>
                <button className='btn-link'><Link to={`/student/${student._id}`}>edit</Link></button>
                {/* <button className='btn-link'><Link to={`/delete/${book._id}`}>delete</Link></button> */}
          {/* </div>}  */}
    </div>
  )
}

export default StudentCard