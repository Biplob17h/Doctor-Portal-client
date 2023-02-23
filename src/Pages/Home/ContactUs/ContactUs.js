import React from 'react';
import img from '../../../assets/images/appointment.png'
import Button from '../../../Components/Button';

const ContactUs = () => {
    return (
        <section style={{ background: `url(${img})` }} className=' mt-[150px] text-white text-center'>
            <div className='pt-16'>
                <h1 className='text-xl ctext1 font-bold'>Contact Us</h1>
                <h1 className='text-4xl'>Stay connected with us</h1>
            </div>
            <form className='flex flex-col justify-center items-center mt-10 pb-24'>
                <input type="text" placeholder="Email Address" className="input ctext2 w-full  max-w-xs" />
                <input type="text" placeholder="Subject" className="input ctext2 w-full mt-5 max-w-xs" />
                <textarea placeholder="Your message" className="textarea mt-5 ctext2 textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                <button type="submit" className="btn btn-ghost cbtn2 mt-7 ">Submit</button>
            </form>
        </section>
    );
};

export default ContactUs;