import React from 'react';
import { DayPicker } from 'react-day-picker';
import img from '../../../assets/images/chair.png'
import img2 from '../../../assets/images/bg.png'

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    
    
    return (
        <header style={{background : `url(${img2})`}}>
            <div className="m-3 lg:ml-40  md:m-12 mt-24 lg:mt-[210px]">
                <div className=" lg:hero-content sm:block lg:flex lg:flex-row-reverse ">
                    <img src={img} alt='' className="lg:w-1/2  lg:ml-20 rounded-lg shadow-2xl" />
                    <div className='sm:mt-10'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        ></DayPicker>
                    </div>
                </div>
                
            </div>
        </header>
    );
};

export default AppointmentBanner;