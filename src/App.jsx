import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Books from './components/Books';
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import Logout from './components/Logout';
import axios from 'axios';
import { useEffect } from 'react';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import DeleteBook from './components/DeleteBook';
import Student from './components/Students';
import Contact from './components/Contact/Contact';
// import { baseURL } from './utils';
const baseURL = 'https://library-vp9e.onrender.com';

function App() {
  const [role, setRole] = useState('')

  axios.defaults.withCredentials = true;

  useEffect(()=> {
      axios.get(`${baseURL}/auth/verify`)
  
   .then(res => {
     if(res.data.login){
       setRole(res.data.role)
     }else {
      setRole('')
     }
     console.log(res)
   }).catch(err => console.log(err))
  }, [])

  return (
    <BrowserRouter>
     <Navbar role = {role}/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/books' element={<Books role={role}/>}></Route>
      <Route path='/student' element={<Student role={role}/>}></Route>
      <Route path='/login' element={<Login setRoleVar = {setRole}/>}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/addstudent' element={<AddStudent />}></Route>
      <Route path='/logout' element={<Logout setRole = {setRole}/>}></Route>
      <Route path='/addbook' element={<AddBook/>}></Route>
      <Route path='/book/:id' element={<EditBook/>}></Route>
      <Route path='/delete/:id' element={<DeleteBook />}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App