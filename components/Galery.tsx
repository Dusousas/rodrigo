import React from 'react';

export default function Galery() {
    return (
        <section className='pt-20 bg-white maxW'>
            <div className='px-4 md:px-12'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4">
                    <div className="col-span-1 sm:col-span-2 row-span-1 sm:row-span-2">
                        <img className='w-full h-full object-cover' src="xl.jpg" alt="Imagem XL" />
                    </div>
                    <div className="row-span-1 sm:row-span-2 col-start-1 sm:col-start-3">
                        <img className='w-full h-full object-cover' src="md.jpg" alt="Imagem MD" />
                    </div>
                    <div className="col-start-1 sm:col-start-4">
                        <img className='w-full h-full object-cover' src="sm.jpg" alt="Imagem SM" />
                    </div>
                    <div className="col-start-1 sm:col-start-4 row-start-2">
                        <img className='w-full h-full object-cover' src="sm1.jpg" alt="Imagem SM1" />
                    </div>
                </div>
            </div>
        </section>
    );
}
