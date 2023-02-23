import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: "1",
            name: "Fluoride Treatment",
            dec: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity,
        },
        {
            _id: "2",
            name: "Cavity Filling",
            dec: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride,
        },
        {
            _id: "3",
            name: "Teeth Whitening",
            dec: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening,
        },
    ]
    return (
        <div className='mt-32'>
            <div className='text-center'>
                <h2 className='font-bold text-xl ctext1'>OUR SERVICES</h2>
                <h1 className='text-4xl mt-2 sm:p-4 ctext2'>Services We Provide</h1>
            </div>
            <div className='mt-[76px] grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-7 gap-9'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;