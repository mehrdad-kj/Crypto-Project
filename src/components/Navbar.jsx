import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {

    const [mobileNavbar, setMobileNavbar] = useState(false);
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleMobileNavbar = () => {
        setMobileNavbar(prev => !prev)
    }


    const handleSignOut = async () => {
        try {
            await logout()
            navigate('/')
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <nav className={
            mobileNavbar ? 'rounded-div fixed top-0 flex items-center justify-between h-20 font-bold z-10'
                : 'rounded-div flex items-center justify-between h-20 font-bold'
        }>
            <Link to='/'>
                <h1 className='text-2xl'>Cryptobase</h1>
            </Link>
            <div className='hidden md:block'>
                <ThemeToggle />
            </div>
            {user?.email ? (
                <div>
                    <Link to='/account' className='p-4'>Account</Link>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <div className='hidden md:block'>
                    <Link to='signin' className='p-4 hover:text-accent'>
                        Sign In
                    </Link>
                    <Link to='signup' className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl hover:shadow-2xl'>
                        Sign Up
                    </Link>
                </div >
            )}
            {/* menu icons */}
            <div className='block md:hidden z-10 cursor-pointer' onClick={handleMobileNavbar}>
                {mobileNavbar ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
            {console.log(mobileNavbar)}
            {/* mobile menu */}
            <div className={
                mobileNavbar
                    ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
                    : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
            }>
                <ul className='w-full p-4'>
                    <li onClick={handleMobileNavbar} className='border-b py-6'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li onClick={handleMobileNavbar} className='border-b py-6'>
                        <Link to='/account'>Account</Link>
                    </li>
                    <li onClick={handleMobileNavbar} className='py-6'>
                        <ThemeToggle />
                    </li>
                </ul>
                <div className='flex flex-col w-full p-4'>
                    <Link to='/signin'>
                        <button onClick={handleMobileNavbar} className='w-full my-2 p-3 bg-primary border border-secondary rounded-2xl shadow-xl'>Sign In</button>
                    </Link>
                    <Link to='/signup'>
                        <button onClick={handleMobileNavbar} className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sign Up</button>
                    </Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar