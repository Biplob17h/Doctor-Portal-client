/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
    return (
        <section className=' max-w-[1440px]'>
            <footer  className="footer p-10  lg:pl-24 text-black  mb-28">
                <div>
                    <span className="footer-title ctext2">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title ctext2">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title ctext2">OUR ADDRESS</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                    
                </div>
            </footer>
            <p className='text-center -mt-16 pb-10'>Copyright 2022 All Rights Reserved</p>
        </section>
    );
};

export default Footer;