import { useState }from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

function Navbar() {
    
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user){
            location.reload();
        }
    }
    
    const dropDown = () => {
        setIsVisible(!isVisible)
    }

  return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-800 p-6'>
    <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <Link to='/' className='font-semibold text-xl tracking-tight m-5'>Car Inventory</Link>
    </div>
    <div className='block'>
        <button onClick={dropDown} className='flex items-center px-3 py-2 text-gray-200 border rounded 
        border-gray-400 hover:text-white hover:border-white'>
            <i className='fas fa-bars'></i>
        </button>
    </div>
    { isVisible ? (
    <div className='w-full block flex-grow items-center'>
        <div className="text-sm lg:flex-grow">
            <Button className='p-3 m-5 bg-gray-800 border rounded border-gray-400 justify-center
             hover:bg-gray-400'>
                <div>
                    <Link to='/' className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 text-gray-200 mr-1'>Home</Link>
                </div>

            </Button>
            <Button className='p-3 m-5 bg-gray-800 border rounded border-gray-400 justify-center
             hover:bg-gray-400'>
                <div>
                    <Link to='/about' className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 text-gray-200 mr-1'>About</Link>
                </div>
            </Button>
            <Button className='p-3 m-5 bg-gray-800 border rounded border-gray-400 justify-center
             hover:bg-gray-400'>
                <div>
                    <Link to='/dashboard' className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 text-gray-200 mr-1'>Dashboard</Link>
                </div>
            </Button>
            {
                !auth.currentUser ? 
                <Button className='p-3 m-5 bg-gray-800 border rounded border-gray-400 justify-center
                hover:bg-gray-400'>
                    <div>
                        <Link to='/' onClick={ ()=>{ signInOnClick()}} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 text-gray-200 mr-1'>
                         Sign In</Link>
                    </div>
                </Button>
                :
                <Button className='p-3 m-5 bg-gray-800 border rounded border-gray-400 justify-center
                hover:bg-gray-400'>
                    <div>
                        <Link to='/' onClick={ ()=>{ signOutOnClick()}} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 text-gray-200 mr-1'>
                         Sign Out</Link>
                    </div>
                </Button>
            }


        </div>
    </div>
    ) : (
    <></>
    ) }
</nav>
  
  )
}

export default Navbar
