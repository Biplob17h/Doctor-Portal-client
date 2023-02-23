import React from 'react';

const Patient = ({ patient }) => {
    const { name, img, loc, dec } = patient;
    return (
        <div className="card  ">
            <div className="card-body">
                <p>{dec}</p>
            </div>
            <div className='flex'>
                <div className="avatar">
                    <div className="w-24 ml-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>

                </div>
                <div className='ml-6 flex flex-col mt-5 items-center'>
                    <h1 className='text-lg font-semibold'>{name}</h1>
                    <p>{loc}</p>
                </div>
            </div>
        </div>
    );
};

export default Patient;