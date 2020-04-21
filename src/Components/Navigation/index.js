import React from 'react'; 
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut'; 

export const Navigation = () => {
    return(
        <div>
            <ul>
                <li>
                    <Link to='/'>Sign In</Link>   
                </li>
                <li>
                    <Link to='/careers'>Careers</Link>   
                </li>
                <li>
                    <Link to='/careers'>Careers</Link>   
                </li>
                <li> 
                    <SignOutButton />
                </li>
            </ul>
        </div>
    )
}