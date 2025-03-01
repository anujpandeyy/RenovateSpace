import React from 'react';
import NavBar from '../components/navbar/NavBar';
import homeImg from '../assets/home.jpg';

const HomePage = () => {
    return (
        <>
            <NavBar />
            <div>
                <div className='relative mt-5'>
                    <img className='rounded-2xl' src={homeImg} alt="" srcset="" />
                    <div className='absolute top-1/3 left-20 text-white px-60 '>
                    <h1 className='text-7xl font-bold leading-tight mb-4'> Exceptional Home <br/> Remodeling &<br/>  Renovations
                    </h1>
                    <button className='mt-2 p-3 bg-white rounded-2xl font-medium text-black' type="button">Get A Free Estimate</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default HomePage;