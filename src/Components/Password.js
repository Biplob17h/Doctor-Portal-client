import { getAuth,sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import app from '../Firebase/Firebase.config';

const auth = getAuth(app)

const Password = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const handleResetPassword = event =>{
        event.preventDefault()
        const email = event.target.email.value;
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            toast.success('Password reset email send. If not check your spam')
            navigate('/auth/login')
        })
        .catch((err)=> {
            const errcode = err.code;
            setError(errcode)
        })
        
    } 
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-96  shadow-2xl bg-base-100">
                    <form onSubmit={handleResetPassword} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <p className='text-red-600'>{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-ghost cbtn2">Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Password;