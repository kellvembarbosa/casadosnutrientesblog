import Link from 'next/link'
import React from 'react'

const Menu = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-white font-bold text-xl">Início</Link>
                        </div>
                        <div className="hidden sm:block md:block">
                            <div className="ml-10 flex items-baseline">
                                <Link href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Sobre nós</Link>
                                <Link href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Política de Privacidade</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                        <div className="max-w-lg w-full lg:max-w-xs">
                            <label htmlFor="search" className="sr-only">Pesquisar</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    {/* <!-- Heroicon name: search --> */}
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M13.15 14.43a8 8 0 111.42-1.42l3.86 3.87a1 1 0 11-1.42 1.42l-3.86-3.87zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input id="search" name="search" className="block w-full bg-gray-900 text-white border border-gray-700 rounded-md py-2 pl-10 pr-3 leading-5 placeholder-gray-400 focus:outline-none focus:placeholder-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 focus:text-white sm:text-sm" placeholder="Pesquisar" type="search" autoComplete="off" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center sm:hidden">
                        {/* <!-- Botão "hamburguer" para exibir o menu suspenso em telas menores --> */}
                        <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Abrir menu principal</span>
                            {/* <!-- Ícone "hamburguer" --> */}
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* <!-- Ícone "x" para fechar o menu suspenso --> */}
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
            {/* <!-- Menu suspenso que é exibido em telas menores --> */}
            <div className="hidden sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/about_us" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Sobre nós</Link>
                    <Link href="/privacy_policy" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Política de Privacidade</Link>
                </div>
            </div>
        </nav>
    )
}

export default Menu