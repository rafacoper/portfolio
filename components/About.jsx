import React from 'react';
import Image from 'next/image';
import RocksImg from '../public/assets/rocks.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          My name is Rafael, I'm 37 years old, Brazilian living in Belo Horizonte, MG - Brazil.
          I consider myself a dynamic, resilient, empathetic, dreamy and spiritual person.
          After a long time working as a commercial and entrepreneur, in 2019 I decided to migrate to the technology area and started programming ever since.
          </p>
          {/* <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Here is some of my projects.
            </p>
          </Link> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={RocksImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;