import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import { useQuery } from '@tanstack/react-query';
import { RingLoader } from 'react-spinners';

const AvailableAppointments = ({ selectedDate }) => {
    const date = format(selectedDate, 'PP')
    const [treatment, setTreatMent] = useState(null)
    const { data: appointment = [], isLoading, refetch } = useQuery({
        queryKey: ['appointment', date],
        queryFn: () => fetch(`http://localhost:5000/appointment?date=${date}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <>
            <RingLoader className='mx-auto my-auto'
                color="rgb(206, 44, 44)"
                size={500}
            />
        </>
    }
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
                    setTreatMent={setTreatMent}
                    refetch={refetch}
                ></AppointmentModal>
            }
        </section>
    );
};

export default AvailableAppointments;