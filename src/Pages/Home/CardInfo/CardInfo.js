import React from 'react';
import phone from '../../../assets/icons/phone.svg'
import clock from '../../../assets/icons/clock.svg'
import markar from '../../../assets/icons/marker.svg'
import SingleCard from './SingleCard';

const CardInfo = () => {
    const CardInfo = [
        {
            _id : "1",
            name : "Opening Hours",
            dec: "starting 9:00 a.m. everyday open 7 days a week",
            img: clock,
            back : "cBackGround"
        },
        {
            _id : "2",
            name : "Visit our location",
            dec: "Brooklyn, NY 10036, United States",
            img: markar,
            back : "cBackGround2"
        },
        {
            _id : "3",
            name : "Contact us now",
            dec: "+000 123 456789",
            img: phone,
            back : "cBackGround"
        }
    ]
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 gap-6'>
            {
                CardInfo.map(single => <SingleCard 
                key={single._id}
                single={single}
                ></SingleCard>)
            }
        </div>
    );
};

export default CardInfo;