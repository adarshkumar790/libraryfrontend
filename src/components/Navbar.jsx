// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../CSS/Navbar.css';

// const Navbar = ({ role, setRole }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear the user's role (or token) from state or localStorage
//     setRole(''); // Assuming setRole updates the role state in the parent component
//     localStorage.removeItem('userToken'); // If you're using tokens in localStorage

//     // Redirect to login page after logging out
//     navigate('/login');
//   };

//   return (
//     <nav className='navbar'>
//       <div className='navbar-left'>
//         <Link to="/" className='navbar-brand'>Book Store</Link>
//       </div>
//       <div className='navbar-right'>
//         {/* Show Books link only if the user is logged in (either student or admin) */}
//         {role && (
//           <Link to="/books" className='navbar-link'>Books</Link>
//         )}

//         {/* Show admin-only links */}
//         {role === "admin" && (
//           <>
//             <Link to="/addbook" className='navbar-link'>Add Book</Link>
//             <Link to="/addstudent" className='navbar-link'>Add Student</Link>
//             <Link to="/dashboard" className='navbar-link'>Dashboard</Link>
//           </>
//         )}

//         {/* Show Login/Logout based on role */}
//         {role ? (
//           <button onClick={handleLogout} className='navbar-link logout-btn'>Logout</button>
//         ) : (
//           <Link to="/login" className='navbar-link'>Login</Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = ({role}) => {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <Link to="/" className='navbar-brand'>Book Store</Link>
        </div>
        <div className='navbar-right'>
            <Link to = "/books" className='navbar-link'>Books</Link>
            {role === "admin" && <>
             <Link to = "/addbook" className='navbar-link'>Add Book</Link>
             <Link to = "/addstudent" className='navbar-link'>Add Student</Link>
             <Link to = "/dashboard" className='navbar-link'>Dashboard</Link>
             </>
            }    
            {
              role === "" ? 
              
              <Link to = "/login" className='navbar-link'>Login</Link> : 
              <Link to = "/login" className='navbar-link'>Logout</Link>
            }       
           
        </div>
        </nav>
  )
}
export default Navbar