import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/UserContext';

const Register = () => {
    const [error, setError] = useState('')
    const {signUp, manageProfile, LogInWithGoogle, manageVerifyEmail} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleRegisterSubmit = event =>{
        setError('')
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        signUp(email, password)
        .then((result)=>{
            const user = result.user;
            console.log('user created successfully', user)
            form.reset()
            sendEmailVerification()
            manageUpdateUser(name)
            navigate(from, { replace: true });
        })
        .catch((error)=>{
            const errorCode = error.code;
            console.log(errorCode);
            setError(errorCode)
        })
    }
    const GoogleLogin = () =>{
        LogInWithGoogle()
        .then((result)=>{
            const user = result.user;
            console.log('login successfull', user)
            navigate(from, { replace: true });
        })
        .catch((error)=>{
            const errorCode = error.code;
            setError(errorCode)
        })
        
    }
    const sendEmailVerification = () =>{
        manageVerifyEmail()
        .then(()=>{toast.success('Verification email send. If not check your spam')})
    }
    const manageUpdateUser = (name) =>{
        const profile = {displayName : name}
        manageProfile(profile)
        .then(()=>{console.log('profile update')})
        .catch((err)=> {console.log(error)})
    }
    return (
        <div className="hero mt-[100px]">
            <div className=" ">

                <div className="card flex-shrink-0 w-[400px]  shadow-2xl bg-base-100">
                    <h1 className='text-center text-xl mt-5'>Register</h1>
                    <form onSubmit={handleRegisterSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href='/auth/login' className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className='text-red-600'>{error}</p>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-ghost cbtn1 cbor">SIGNUP</button>
                        </div>
                        <div className='my-2'>
                            <p>Already have an account ? <span className='ctext1 ml-1'><Link to='/auth/login'>Login</Link></span></p>
                        </div>
                        <div className="divider">OR</div>
                        <div className="form-control mt-6">
                            <button onClick={GoogleLogin} className="btn btn-ghost cbtn2">CONTINUE WITH GOOGLE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;