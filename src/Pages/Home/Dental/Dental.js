import React from 'react';
import img from '../../../assets/images/treatment.png'
import Button from '../../../Components/Button';

const Dental = () => {
    return (
        <div className="hero md:p-10 lg:p-16">
            <div className="lg:hero-content flex-col lg:flex-row">
                <img src={img}  alt="" className="lg:w-1/2  md:p-16 sm:w-full p-5 rounded-3xl" />
                <div className='sm: m-5'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>GET STARTED</Button>
                </div>
            </div>
        </div>
    );
};

export default Dental;