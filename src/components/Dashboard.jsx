import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CSS/Dashboard.css';
// import { baseURL } from '../utils';
const baseURL = 'https://library-vp9e.onrender.com';

function Dashboard() {
    const [students, setStudents] = useState(0);
    const [books, setBooks] = useState(0);
    const [admins, setAdmins] = useState(0);

    useEffect(() => {
        axios.get(`${baseURL}/dashboard`)
            .then(res => {
                if (res.data.ok) {
                    setStudents(res.data.student);
                    setBooks(res.data.book);
                    setAdmins(res.data.admin);
                }
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='dashboard'>
            <div className='dashboard-box'>
                <h2>Total Books</h2>
                <br />
                <h2>{books}</h2>
            </div>
            <div className='dashboard-box'>
                <h2>Total Students</h2>
                <br />
                <Link to="/student">
                    <h2>{students}</h2>
                </Link>
            </div>
            <div className='dashboard-box'>
                <h2>Total Admins</h2>
                <br />
                <h2>{admins}</h2>
            </div>
        </div>
    );
}

export default Dashboard;
