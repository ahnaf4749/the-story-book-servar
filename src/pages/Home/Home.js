import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='bg-slate-100'>
            <div className='containe'>
            </div>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Are You Ready To Read Story Book</h1>
            </div>
            <div className='text-center mt-8 p-3'>
                <button className="btn btn-active btn-secondary"><Link to='/stories'>Get Startd</Link></button>
            </div>
        </div>
    );
};

export default Home;