import React from 'react';

export default function Navbar() {
    return (
        <>
            <nav>
                <ul className='hidden text-white uppercase tracking-wider text-md lg:flex gap-6'>
                    <li><a href="">Início</a></li>
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
        </>
    );
}