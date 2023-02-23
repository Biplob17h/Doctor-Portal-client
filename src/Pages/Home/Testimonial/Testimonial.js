import React from 'react';
import user1 from '../../../assets/images/people1.png'
import user2 from '../../../assets/images/people2.png'
import user3 from '../../../assets/images/people3.png'
import Patient from './Patient';

const Testimonial = () => {
    
    const Patients = [
        {
            _id : "1",
            img : user1,
            dec : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            loc : "California",
            name : "Winson Herry"
        },
        {
            _id : "2",
            img : user2,
            dec : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            loc : "California",
            name : "Winson Herry"
        },
        {
            _id : "3",
            img : user3,
            dec : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            loc : "California",
            name : "Winson Herry"
        },
    ]
    return (
        <div className='mt-5  lg:mt-[84px] lg:mx-14'>
            <div className='ml-5'>
                <h2 className='text-xl font-bold ctext1'>Testimonial</h2>
                <h1 className="text-4xl mt-2">What Our Patients Says</h1>
            </div>
            <div className='grid sm:mt-10 lg:mt-[146px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
                {
                    Patients.map(patient => <Patient
                    key={patient._id}
                    patient={patient}
                    ></Patient>)
                }
            </div>
        </div>
    );
};

export default Testimonial;