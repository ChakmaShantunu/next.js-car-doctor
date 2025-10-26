import React from 'react'
import LoginForm from './components/LoginForm'

export default function LoginPage() {
    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto mt-12 max-w-sm shrink-0 shadow-2xl my-12 bg-cover bg-center">
                <h3 className="text-2xl font-bold text-center pt-8 text-black">Sign In</h3>
                <p className='text-xs text-center mt-2 text-black'>Join now to streamline your experience from day one</p>
                <div className="card-body">
                    <LoginForm></LoginForm>
                </div>
            </div>
        </div>
    )
}
