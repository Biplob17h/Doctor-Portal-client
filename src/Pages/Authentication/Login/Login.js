import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/UserContext';

const Login = () => {
    const [error, setError] = useState('')
    const { signIn, LogInWithGoogle, manageResetPassword } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLoginSubmit = event => {
        setError('')
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log('user login successfully', user)
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
            })
    }
    const GoogleLogin = () => {
        LogInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log('login successfull', user)
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
            })

    }
    
    return (
        <div className="hero  mt-[100px]">
            <div className=" ">

                <div className="card flex-shrink-0 w-[400px]  shadow-2xl bg-base-100">
                    <h1 className='text-center text-xl mt-5'>Login</h1>
                    <form onSubmit={handleLoginSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" className="input input-bordered" required />
                            <label className="label">
                                <a href='/auth/reset' className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className='text-red-500'>{error}</p>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-ghost cbtn1 cbor">LOGIN</button>
                        </div>
                        <div className='my-2'>
                            <p>New to Doctors Portal?<span className='ctext1 ml-2'><Link to='/auth/register'>Create new account</Link></span></p>
                        </div>
                        <div className="divider">OR</div>
                        <input onClick={GoogleLogin} type="button" value="CONTINUE WITH GOOGLE" className='btn btn-ghost cbtn2'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;