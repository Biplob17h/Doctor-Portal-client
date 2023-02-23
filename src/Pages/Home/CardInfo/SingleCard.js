import React from 'react';

const SingleCard = ({ single }) => {
    console.log(single)
    const { name, dec, img, back } = single;
    return (
        <div className={`card text-white card-compact shadow-xl lg:flex lg:flex-row lg:p-6  ${back}`}>
            <figure><img className='mt-4' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{dec}</p>
                
            </div>
        </div>
    );
};

export default SingleCard;