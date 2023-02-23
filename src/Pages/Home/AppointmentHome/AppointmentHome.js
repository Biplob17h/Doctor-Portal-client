import React from 'react';
import img from '../../../assets/images/doctor.png'
import img2 from '../../../assets/images/appointment.png'
import Button from '../../../Components/Button';


const AppointmentHome = () => {
    return (
        <section className='cimg'
            style={
                { background: `url(${img2})` }
            }>
            <div className="hero lg:mt-[170px]">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} alt='' className="w-1/2 hidden md:block sm:max-w-screen-sm rounded-lg -mb-4 -mt-36" />
                    <div className='text-white'>
                        <p className='text-lg font-bold ml-1 ctext1'> Appointment</p>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentHome;