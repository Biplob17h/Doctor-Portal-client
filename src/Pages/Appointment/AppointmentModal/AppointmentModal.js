import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../ContextApi/UserContext';

const AppointmentModal = ({ treatment, selectedDate, setTreatMent, refetch }) => {
    const {user} =useContext(AuthContext)
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
        fetch('http://localhost:5000/bookings', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Your appointment successfully placed.')
                setTreatMent(null)
                refetch()
            }
            else{
                toast.error(data.massage)
            }
        })
        
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
                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered mt-3 w-full" required />
                        <input name='email' type="email" disabled defaultValue={user?.email} placeholder="Email" className="input input-bordered mt-3 w-full" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered mt-3 w-full"  />
                        <input className='btn cbtn1 mt-5 w-full' type="submit" value="Submit" />
                    </form>
                    <p className="py-4"></p>
                </div>
            </div>
        </>
    );
};

export default AppointmentModal;