import React from 'react';

const Service = ({ service }) => {
    const { img, name, dec } = service;
    return (
        <div className="card card-compact sm:mt-5 text-center md:shadow-xl">
            <figure><img style={{color : `ctext1`}} src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p>{dec}</p>
            </div>
        </div>
    );
};

export default Service;