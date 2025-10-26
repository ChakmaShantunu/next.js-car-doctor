"use client"
import { registerUser } from '@/app/actions/auth/registerUser';
import { signIn } from "next-auth/react"
import React from 'react'

export default function LoginForm() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const payeload = { email, password }
        console.log(payeload);
        await signIn("credentials", payeload)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="fieldset space-y-2 py-4">
                <label className="label text-black">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                {/* <label className="label text-black">Photo-URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo-URL" /> */}
                <label className="label text-black">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />

                <button className="btn btn-primary mt-4">Sign In</button>
            </form>
        </div>
    )
}
