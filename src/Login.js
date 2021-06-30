import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase'


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.
            signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))


        //some fancy firebase login shittttt......
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
            //it successfully created a newUser with email and password
                console.log(auth);

                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

        //do some firebase register shittt......
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login__logo'
                    src='https://techsupport.foreverwarm.com/wp-content/uploads/2010/11/amazon-logo.jpg'
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type='text' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                        type='password' 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button 
                        type='submit'
                        onClick={ signIn } 
                        className='login__signInButton'>
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE clone Conditions of Use & sale.
                    please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button 
                    onClick={register}
                    className='login__registerButton'>
                    Create your amazon account
                </button>
            </div>
        </div>
    )
}

export default Login