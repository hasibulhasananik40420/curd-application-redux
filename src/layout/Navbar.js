import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-center items-center gap-4 bg-blue-600 text-white font-medium py-4 px-12'>
                <Link to="/"><h1>Home</h1></Link>
                <Link to="/showbook"><h1>Show Page</h1></Link>
                <Link to="/addbook"><h1>Add Page</h1></Link>


            </div>
        </div>
    );
};

export default Navbar;