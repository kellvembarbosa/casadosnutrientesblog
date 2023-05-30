import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 text-center">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-2 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">Sobre nós</h4>
                                <ul className="mt-4 space-y-4">
                                    <li><Link href="/history" className="text-base leading-6 text-gray-400 hover:text-white">História</Link></li>
                                    <li><Link href="/team" className="text-base leading-6 text-gray-400 hover:text-white">Equipe</Link></li>
                                    <li><Link href="#" className="text-base leading-6 text-gray-400 hover:text-white">Contato</Link></li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">Informações</h4>
                                <ul className="mt-4 space-y-4">
                                    <li><Link href="/privacy_policy" className="text-base leading-6 text-gray-400 hover:text-white">Política de privacidade</Link></li>
                                    <li><Link href="/service_terms" className="text-base leading-6 text-gray-400 hover:text-white">Termos de serviço</Link></li>
                                    <li><Link href="#" className="text-base leading-6 text-gray-400 hover:text-white">Mapa do site</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">Redes sociais</h4>
                                <ul className="mt-4 space-y-4">
                                    <li><Link href="#" className="text-base leading-6 text-gray-400 hover:text-white">TikTok</Link></li>
                                    <li><Link href="#" className="text-base leading-6 text-gray-400 hover:text-white">Kawai</Link></li>
                                    <li><Link href="#" className="text-base leading-6 text-gray-400 hover:text-white">Instagram</Link></li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">Assine nossa newsletter</h4>
                                <p className="mt-4 text-base leading-6 text-gray-400">Receba atualizações e novidades diretamente na sua caixa de entrada.</p>
                                <form className="mt-4 sm:flex">
                                    <input aria-label="Email address" className="appearance-none w-full sm:max-w-xs px-4 py-2 rounded-md leading-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out" placeholder="Seu email" type="email" />
                                    <button className="mt-3 sm:mt-0 sm:ml-3 w-32 sm:w-auto px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                                        Assinar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-base leading-6 text-gray-400">
                            &copy; 2023 Casa dos Nutrientes. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer   