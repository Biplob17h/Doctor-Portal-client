import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const handleModalSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            phone,
            email
        }
        console.log(booking)

    }
    return (
        <>
            <input type="checkbox" id="treatment-option" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="treatment-option" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleModalSubmit} className='mt-16'>
                        <input type="text" disabled value={date} className="input input-bordered mt-3 w-full" />
                        <select name='slot' className="select w-full">

                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered mt-3 w-full" required />
                        <input name='phone' type="text" placeholder="Phome Number" className="input input-bordered mt-3 w-full" required />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered mt-3 w-full" required />
                        <input className='btn cbtn1 mt-5 w-full' type="submit" value="Submit" />
                    </form>
                    <p className="py-4"></p>
                </div>
            </div>
        </>
    );
};

export default AppointmentModal;