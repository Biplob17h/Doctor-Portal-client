import React from 'react';
import img from '../../../assets/images/chair.png'
import Button from '../../../Components/Button';

const Banner = () => {
    return (
        <div className="m-3 md:m-12 mt-24 lg:mt-[210px]">
            <div className=" lg:hero-content sm:block lg:flex lg:flex-row-reverse ">
                <img src={img} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div className='mt-5'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Button>GET STARTED</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;