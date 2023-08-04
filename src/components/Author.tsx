import React from 'react';
import Image from 'next/image';

interface AuthorProps {
  name: string;
  tumb: string;
  description: string;
}

const Author: React.FC<AuthorProps> = ({ name, tumb, description }) => {
  return (
    <div className="flex justify-center h-full">
      <div className='flex justify-center items-center h-64 w-64'>
        <div className="flex rounded-full h-36 w-36 overflow-hidden">
          <Image src={tumb} alt={name} width={150} height={80} />
        </div>
      </div>
      <div className='flex items-center justify-center  h-64 w-4/5'>
        <div className='flex flex-col'>
          <h2 className="text-gray-100 text-lg mt-2 text-center">{name}</h2>
          <p className="text-gray-400 text-base my-4 text-center">{description}</p>
        </div>
      </div>

    </div>
  );
};

export default Author;

/**
 * <div className="w-52 h-52 bg-white">
        <div className="rounded-full h-36 w-36 overflow-hidden">
          <Image src={tumb} alt={name} width={150} height={150} />
        </div>
      </div>
      <div>
        <h2 className="text-gray-400 text-lg mt-2 text-center">{name}</h2>
        <p className="text-white text-lg my-4 text-center">{description}</p>
      </div>
 */