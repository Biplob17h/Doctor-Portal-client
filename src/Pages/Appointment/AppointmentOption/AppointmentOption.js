import React from 'react';


const AppointmentOption = ({ option, setTreatMent }) => {
    const { name, slots } = option;
    return (
        <div className="card text-center">
            <div className="card-body">
                <h2 className="font-bold text-xl ctext1">{name}</h2>
                {
                   slots.length > 0 
                   ?<p>{slots[0]}</p>
                   : <p>Try another day</p>
                }
                <p>{slots.length}  {slots.length > 1 ? 'spaces' : 'space'} available </p>
                <div className="card-actions justify-center">
                    <label onClick={()=> setTreatMent(option)} htmlFor="treatment-option" className="btn btn-ghost mt-3 cbtn2">Book Appointment</label>
                </div>
                
            </div>
        </div>
    );
};

export default AppointmentOption;