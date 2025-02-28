import React from 'react';

const NavBar = () => {
    return (
        <>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>Anuj Industries</h1>
                <ul className='flex space-x-5 text-lg'>
                    <li ><a className='hover:font-semibold hover:text-yellow-600' href="/">Home</a></li>
                    <li><a className='hover:font-semibold hover:text-yellow-600' href="/">About</a></li>
                    <li><a className='hover:font-semibold hover:text-yellow-600' href="/">Services</a></li>
                    <li><a className='hover:font-semibold hover:text-yellow-600' href="/">Work</a></li>
                    <li><a className='hover:font-semibold hover:text-yellow-600' href="/">Contact</a></li>
                    <li><a className='hover:font-semibold hover:text-yellow-600' href="/">123-456-7890</a></li>
                </ul>

            </div>
        </>
    );
}


export default NavBar;