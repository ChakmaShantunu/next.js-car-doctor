import Link from 'next/link'
import React from 'react'

export default function RegisterPage() {
    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto mt-12 max-w-sm shrink-0 shadow-2xl my-12 bg-cover bg-center">
                <h3 className="text-2xl font-bold text-center pt-8 text-black">Create an Account!</h3>
                <p className='text-xs text-center mt-2 text-black'>Join now to streamline your experience from day one</p>
                <div className="card-body">
                    <form className="fieldset space-y-2 py-4">
                        <label className="label text-black">Name</label>
                        <input type="text" name='name' className="input" placeholder="Your Name" />
                        <label className="label text-black">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        {/* <label className="label text-black">Photo-URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo-URL" /> */}
                        <label className="label text-black">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <button className="btn btn-primary mt-4">Register</button>
                    </form>
                    <p className='text-black'>Already have an account? Please <Link
                        className='underline' href={'/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    )
}
