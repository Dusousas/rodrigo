import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Line() {
  return (
    <section className='bg-black py-4 flex justify-center gap-4'>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:bg-white hover:text-black transition">
        <FaInstagram size={20} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:bg-white hover:text-black transition">
        <FaFacebookF size={20} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:bg-white hover:text-black transition">
        <FaLinkedinIn size={20} />
      </a>
    </section>
  );
}
