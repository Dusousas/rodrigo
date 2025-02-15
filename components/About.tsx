import React from 'react';

export default function About() {
    return (
        <>
            <section className='bg-white maxW pt-20'>
                <div className='flex flex-col items-center justify-center gap-6 lg:flex-row'>

                    {/* Texto esquerda */}
                    <article className='flex flex-col gap-12'>
                        <div className='max-w-[350px] flex gap-2 '>
                            <div className=''>
                                <h1 className='text-black text-right text-xl font-semibold uppercase'>Croissant</h1>
                                <p className='text-black mt-2 text-right'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.</p>
                            </div>
                            <div>
                                <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/Item-showcase-icon-1.png" alt="" />
                            </div>
                        </div>

                        <div className='max-w-[350px] flex gap-2 '>
                            <div className=''>
                                <h1 className='text-black text-right text-xl font-semibold uppercase'>Croissant</h1>
                                <p className='text-black mt-2 text-right'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.</p>
                            </div>
                            <div>
                                <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/Item-showcase-icon-1.png" alt="" />
                            </div>
                        </div>

                        <div className='max-w-[350px] flex gap-2 '>
                            <div className=''>
                                <h1 className='text-black text-right text-xl font-semibold uppercase'>Croissant</h1>
                                <p className='text-black mt-2 text-right'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.</p>
                            </div>
                            <div>
                                <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/Item-showcase-icon-1.png" alt="" />
                            </div>
                        </div>
                    </article>

                    <img className='w-[40%]lg:w-[50%] ' src="about1.jpg" alt="" />

                    {/* Texto direita */}
                    <article className='flex flex-col gap-12'>
                        <div className='max-w-[350px] flex gap-2 '>
                            <div>
                                <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/Item-showcase-icon-6.png" alt="" />
                            </div>
                            <div className=''>
                                <h1 className='text-black text-left text-xl font-semibold uppercase'>Morning coffe</h1>
                                <p className='text-black mt-2 text-left'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.</p>
                            </div>
                        </div>

                        <div className='max-w-[350px] flex gap-2 '>
                            <div>
                                <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/Item-showcase-icon-6.png" alt="" />
                            </div>
                            <div className=''>
                                <h1 className='text-black text-left text-xl font-semibold uppercase'>Morning coffe</h1>
                                <p className='text-black mt-2 text-left'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.</p>
                            </div>
                        </div>

                        <div className='max-w-[350px] flex gap-2 '>
                            <div>
                                <img src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/Item-showcase-icon-6.png" alt="" />
                            </div>
                            <div className=''>
                                <h1 className='text-black text-left text-xl font-semibold uppercase'>Morning coffe</h1>
                                <p className='text-black mt-2 text-left'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}