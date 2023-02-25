import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointment, setAppointment] = useState([]);
    const [treatment, setTreatMent] = useState(null)
    useEffect(() => {
        fetch('appointment.json')
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [])
    return (
        <section className='mt-[100px] mb-[228px]'>
            <div className='text-center mt-[170px]'>
                <p className='ctext1 text-xl '>Available Services on {format(selectedDate, 'PP')}</p>
                <p className='ctext3 text-xl'>Please select a service.</p>
            </div>
            <div className='grid grid-cols-1 mt-[79px] md:grid-cols-2 lg:grid-cols-3 gap-6 px-24 mx-Auto'>
                {
                    appointment.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatMent={setTreatMent}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment && <AppointmentModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                ></AppointmentModal>
            }
        </section>
    );
};

export default AvailableAppointments;