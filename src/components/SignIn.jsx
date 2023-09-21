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
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
          .then((cred) => {
            alert('Sign In successful.')
            cred.user && setIsAuth(true)
            localStorage.setItem('isAuth', JSON.stringify(true))
            setError('')
            navigate("/");
          })
          .catch((err) => {
            console.log(err.message)
            setError(err.message)
          })
    }

    const errorMessage = error.slice(22).slice(0, -2).replace(/-/g, ' ').replace(/\b\w/g, (match) => match.toUpperCase())

  return (
    <div className='form-container'>
        <form>
        <h1>Sign In</h1>
        <p className='error-message'>{errorMessage}</p>
        <div className={error ? 'form-field error-field' : 'form-field'}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={error ? 'form-field error-field' : 'form-field'}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  )
}
