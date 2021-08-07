import React from 'react';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';

function Login() {
    return (
        <div className='w-screen h-screen bg-background'>
            <div className='w-full h-full flex items-center'>
                <div className='bg-surface w-96 h-96 mx-auto flex flex-col px-16 justify-center rounded-2xl shadow-lg'>
                    <div className="flex flex-col space-y-3">
                        <Logo />
                    <h1 className="text-3xl">Log into Bitr</h1>
                    </div>
                    <div className='flex flex-col space-y-5 my-8'>
                        <input type='text' placeholder='username'
                            className='border border-primary px-2 py-1 rounded-lg focus:outline-none' />
                        <input type='password' placeholder='password'
                            className='border border-primary px-2 py-1 rounded-lg focus:outline-none' />
                    </div>
                    <div className='flex space-x-3'>
                        <button type='button'
                            className='focus:outline-none w-full px-2 py-1 text-sm rounded-full border border-primary text-primary'>
                            Sign Up
                        </button>
                        <button type='button'
                            className='focus:outline-none w-full px-2 py-1 text-sm rounded-full bg-primary text-white'>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
