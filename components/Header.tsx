import React from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
  return (
    <>
      <section className='py-6'>
        <div className='maxW flex justify-between items-center'>
          <h1 className='text-white uppercase text-2xl font-semibold tracking-wider'>Café Jardim Brotas</h1>

          <Navbar />
        </div>
      </section>
    </>
  );
}