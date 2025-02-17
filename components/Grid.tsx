import React from 'react';

export default function Grid() {
    return (
        <div>
            <section className='bg-white maxW pt-10'>
                <div className='px-4 md:px-12 flex flex-col flex-wrap lg:flex-row'>
                    {/* UP */}
                    <div className='bg-Browp h-[300px] flex flex-col justify-center px-10 lg:w-1/3'>
                        <h1 className='font-semibold uppercase'>Pet Friendly</h1>
                        <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deleniti repudiandae reiciendis repellat atque iure soluta? Quae esse fugit fuga?</p>
                    </div>
                    <div className='bg-[#EAE7DE] h-[300px] flex flex-col justify-center px-10 lg:w-1/3'>
                        <h1 className='font-semibold uppercase text-Blackp'>Pet Friendly</h1>
                        <p className='mt-6 text-Blackp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deleniti repudiandae reiciendis repellat atque iure soluta? Quae esse fugit fuga?</p>
                    </div>
                    <div className='lg:w-1/3'>
                        <img className='object-cover max-h-[300px] w-full' src="/grid.jpg" alt="" />
                    </div>
                    {/* DOWN */}
                    <div className='bg-[#EAE7DE] h-[300px] flex flex-col justify-center items-center px-10 lg:w-1/3'>
                        <h1 className='font-semibold uppercase text-Blackp text-2xl'>logotipo</h1>
                    </div>
                    <div className='lg:w-1/3'>
                        <img className='object-cover max-h-[300px] w-full' src="/grid1.jpg" alt="" />
                    </div>
                    <div className='bg-Browp h-[300px] flex flex-col justify-center px-10 lg:w-1/3'>
                        <h1 className='font-semibold uppercase'>Pet Friendly</h1>
                        <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deleniti repudiandae reiciendis repellat atque iure soluta? Quae esse fugit fuga?</p>
                    </div>

                </div>
            </section>
        </div>
    );
}


// #EAE7DE