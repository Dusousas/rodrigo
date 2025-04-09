import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function Footer() {
    const horarios = [
        { dia: 'Domingo', horario: 'Fechado' },
        { dia: 'Segunda', horario: '9:00 - 22:00' },
        { dia: 'Terça', horario: '9:00 - 22:00' },
        { dia: 'Quarta', horario: '9:00 - 22:00' },
        { dia: 'Quinta', horario: '9:00 - 22:00' },
        { dia: 'Sexta', horario: '9:00 - 22:00' },
        { dia: 'Sábado', horario: '10:00 - 20:00' }
    ];

    return (
        <footer className='maxW flex bgFooter py-20'>
            <div className='px-4 md:px-12 flex flex-col justify-center gap-20 w-full lg:flex-row'>

                <article className='flex flex-col items-center  lg:w-1/3'>
                    <h1 className='uppercase font-bold text-xl'>Nossos Horários</h1>

                    {horarios.map(({ dia, horario }, index) => (
                        <div key={index} className='flex w-full gap-2 mt-4 max-w-[200px]'>
                            <h1 className='text-white uppercase text-sm'>{dia}</h1>
                            <div className='flex-grow border-b-[1px] border-white'></div>
                            <h2 className={`uppercase text-sm ${horario === 'Fechado' ? 'text-Browp' : 'text-[#acacac]'}`}>
                                {horario}
                            </h2>
                        </div>
                    ))}
                </article>

                <article className='flex flex-col items-center lg:w-1/3'>
                    <h1 className='uppercase font-bold text-xl'>Contato</h1>
                    <p className='text-Browp text-sm mt-4'>contato@cafe.com</p>
                    <p className='text-sm text-[#acacac]'>14 91234-1234</p>
                    <p className='text-sm text-[#acacac]'>Rua do café 123,</p>
                    <p className='text-sm text-[#acacac]'>Cidade - Sp</p>
                </article>

                <article className='flex flex-col items-center lg:w-1/3'>
                    <h1 className='uppercase font-bold text-xl'>Newsletter</h1>
                    <div className="flex items-center mt-4">
                        <input
                            className="bg-transparent pl-2 py-2 text-white border border-white text-xs font-light outline-none flex-grow"
                            placeholder="Seu e-mail"
                            type="text" />

                        <button className="bg-Browp border border-Browp px-4 py-2 flex items-center justify-center">
                            <FaPaperPlane className="text-white" />
                        </button>
                    </div>
                </article>

               
            </div>
        </footer>
    );
}
