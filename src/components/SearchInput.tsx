import Link from 'next/link';
import React, { useState } from 'react';

const SearchInput = () => {
    // Definir o estado inicial do campo de pesquisa como uma string vazia
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    const handleInputSubmit = async () => {        
        if(searchTerm !== '') window.location.href = `/search/${searchTerm}`
    };


    return (
        <div className="flex items-center">
            <input
                id="search"
                name="search"
                className="block w-full bg-gray-900 text-white border border-gray-700 rounded-md py-2 pl-10 pr-3 leading-5 placeholder-gray-400 focus:outline-none focus:placeholder-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 focus:text-white sm:text-sm"
                placeholder="Pesquisar"
                type="search"
                autoComplete="off"
                value={searchTerm}
                onChange={handleInputChange}
                
            />
            <input
                type='submit'
                className="ml-2 px-2 py-1 bg-blue-800 houver:bg-blue-900 text-white rounded-md border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                onClick={handleInputSubmit}
                role='button'
                typeof='submit'
                value={'Buscar'}
            >
            </input>
        </div>
    );
};

export default SearchInput;
