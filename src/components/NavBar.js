import React, { useState } from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import GoogleLogo from '../images/googleLogo.png'

const NavBar = () => {
    const [user] = useAuthState(auth);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    const signOut = () => {
        auth.signOut();
    }

    return (
        <nav className="nav-bar">
            <h1>Example ChatContainer</h1>
            {user ? (
                <button onClick={signOut} className='sign-out' type='button'>
                    Sign Out
                </button>
            ) : (
                <button className='sign-in'>
                    <img
                        onClick={googleSignIn}
                        src={GoogleLogo}
                        alt="Google Sign In"
                        type='button' />
                </button>
            )}
        </nav>
    )
}

export default NavBar;