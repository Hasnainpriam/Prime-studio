import { Link } from 'react-router-dom';
import logo from '../../Assets/icons8-camera-66.png'

const Navbar = () => {
   

    return (
        <header className="flex justify-between items-center py-8 md:py-8  max-w-screen-2xl px-4 md:px-10 mx-auto">

            <Link to='/' className="text-gray-600 inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                <img src={logo} alt="" height={40} width={40} />

                Prime Studio
            </Link>

            <nav className="hidden lg:flex gap-12">
                <Link to='/' className="text-indigo-500 text-lg font-semibold">Home</Link>
                <Link to='/bigallery' className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Gallery</Link>
                <Link to='/pricing' className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Pricing</Link>
                <Link to='/blog' className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Blogs</Link>
                <Link to='/about' className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">About</Link>

               
            </nav>

            <Link to='/pricing' className="hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Hire Now</Link>

            <button type="button" className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>

                Menu
            </button>

        </header>

    );
};

export default Navbar;