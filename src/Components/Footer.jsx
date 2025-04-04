import React from 'react'
import './styles.css';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
        <div className='flex sm:flex-col md:flex-row justify-around sm:grid grid-col-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique q</p>
            </div>
            <div>
                <p className='text-xl  font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>123-456-789</li>
                    <li>contact@gmail.com</li>

                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever -All rights are reserved</p>
        </div>
    </div>
  )
}

export default Footer