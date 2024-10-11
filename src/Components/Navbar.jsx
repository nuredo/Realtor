import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
export default function Navbar() {

    const navigate = useNavigate()
    return (
        <div>

            <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
                <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                    <div>
                        <img src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" alt="logo"
                            className='h-5 cursor-pointer' onClick={() => navigate('/')} />
                    </div>
                    <div>
                        <ul className='flex space-x-10'>
                            <NavLink to='/'  >
                                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400
                                 border-b-[3px] border-b-transparent `}>Home</li>
                                <hr className='border-none  outline-none  h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden ' />
                            </NavLink>
                            <NavLink to='/offers' >
                                <li className='cursor-pointer py-3 text-sm font-semibold text-gray-400
                                 border-b-[3px] border-b-transparent '>Offers</li>
                                <hr className='border-none  outline-none  h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden ' />
                            </NavLink>
                            <NavLink to='/sign-in' >
                                <li className='cursor-pointer py-3 text-sm font-semibold text-gray-400
                                 border-b-[3px] border-b-transparent '>Sign In</li>
                                <hr className='border-none  outline-none  h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden ' />
                            </NavLink>

                        </ul>
                    </div>
                </header>

            </div>



        </div>
    )
}
