import React from 'react';
import AppointmentHome from '../AppointmentHome/AppointmentHome';
import Banner from '../Banner/Banner';
import CardInfo from '../CardInfo/CardInfo';
import ContactUs from '../ContactUs/ContactUs';
import Dental from '../Dental/Dental';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardInfo></CardInfo>
            <Services></Services>
            <Dental></Dental>
            <AppointmentHome></AppointmentHome>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;