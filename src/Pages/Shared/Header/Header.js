/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const MenuItems = <>
        <li className='cbtn1'><Link to='/'>Home</Link></li>
        <li className='cbtn1'><Link to='/auth/notfound'>About</Link></li>
        <li className='cbtn1'><Link to='/appointment'>Appointment</Link></li>
        <li className='cbtn1'><Link to='/auth/notfound'>Reviews</Link></li>
        <li className='cbtn1'><Link to='/auth/notfound'>Contact Us</Link></li>
        <li className='cbtn1'><Link to='/auth/notfound'>Login</Link></li>
    </>
    return (
        <div className="navbar mx-auto">
            <div className="navbar-start sm:ml-10 lg:ml-14 md:ml-32 flex-row-reverse justify-between">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {MenuItems}
                    </ul>
                </div>
                <h2 className='text-lg'>Doctors Portal</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {MenuItems}
                </ul>
            </div>
            
        </div>
    );
};

export default Header;