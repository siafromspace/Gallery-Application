import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const { setIsAuth } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
          .then((cred) => {
            alert('Sign In successful.')
            cred.user && setIsAuth(true)
            navigate("/");
          })
          .catch((err) => {
            console.log(err.message)
          })
    }
  return (
    <div className='form-container'>
        <form>
        <h1>Sign In</h1>
        <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-field'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  )
}
