import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ selectedDate }) => {
    return (
        <section>
            <div className='text-center mt-[170px]'>
                <p className='ctext1 text-xl '>Available Services on {format(selectedDate, 'PP')}</p>
                <p className='ctext3 text-xl'>Please select a service.</p>
            </div>
        </section>
    );
};

export default AvailableAppointments;