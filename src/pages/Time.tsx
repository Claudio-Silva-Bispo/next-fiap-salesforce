
/* Importações gerais */
import Link from "next/link";
import { useState, useContext } from "react";


/* Importação de componentes */
import TextReader from "@/components/TextReader";
import { ReadingContext } from '../components/RightSidebar'; // Importe o contexto


export default function Time(){

    const { isReadingEnabled } = useContext(ReadingContext);

    
    return(
        
        <section className="py-6 text-gray-800 min-h-[80vh] bg-quinta">
            
            <div className="container flex flex-col items-center justify-start p-4 mx-auto sm:p-10">
                
                <TextReader text="Time de desenvolvimento" isReadingEnabled={isReadingEnabled}>
                    <p className="p-2 text-sm font-medium tracking-wider text-start md:text-center uppercase pt-44">Time de desenvolvimento</p>
                </TextReader>
                
                <TextReader text="Os talentos por trás desse projeto" isReadingEnabled={isReadingEnabled}>
                    <h1 className="text-4xl font-bold leading-none text-start md:text-center sm:text-5xl mb-20 p-6 md:p-0 uppercase">Os talentos por trás desse projeto</h1>
                </TextReader>
                
                <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                    
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
                        
                        <img alt="Imagem do Claudio - integrante do time" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="/assets/Time/claudio.jpeg" />
                        
                        <div className="flex-1 my-4">

                            <TextReader text="Claudio Bispo" isReadingEnabled={isReadingEnabled}>
                                <p className="text-xl font-semibold leading-snug">Claudio Bispo</p>
                            </TextReader>

                            <TextReader text="Front-End" isReadingEnabled={isReadingEnabled}>
                                <p>Front-End</p>
                            </TextReader>

                        </div>
                        
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            
                            <Link rel="noopener noreferrer" href="#" title="Email" className="text-gray-50 hover:text-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </Link>


                            <Link rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-50 hover:text-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                </svg>
                            </Link>

                            <Link rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-50 hover:text-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                            </Link>

                        </div>
                    </div>

                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
                        
                        <img alt="Imagem da Patricia - Integrante do time" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="/assets/Time/Patricia.jpg" />
                        
                        <div className="flex-1 my-4">

                            <TextReader text="Patricia Naomi" isReadingEnabled={isReadingEnabled}>
                                <p className="text-xl font-semibold leading-snug">Patricia Naomi</p>
                            </TextReader>

                            <TextReader text="ack-End" isReadingEnabled={isReadingEnabled}>
                                <p>Back-End</p>
                            </TextReader>

                        </div>

                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <Link rel="noopener noreferrer" href="#" title="Email" className="text-gray-50 hover:text-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </Link>
                            

                            <Link rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-50 hover:text-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                </svg>
                            </Link>

                            <Link rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-50 hover:text-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                            </Link>

                        </div>
                    </div>

                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
                        
                        <img alt="Imagem da Sara - Integrante do time" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src="/assets/Time/sara.jpg" />
                        
                        <div className="flex-1 my-4">

                            <TextReader text="Sara Ingrid<" isReadingEnabled={isReadingEnabled}>
                                <p className="text-xl font-semibold leading-snug">Sara Ingrid</p>
                            </TextReader>

                            <TextReader text="Banco de dados" isReadingEnabled={isReadingEnabled}>
                            <p>Banco de dados</p>
                            </TextReader>

                        </div>

                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            
                            <Link rel="noopener noreferrer" href="#" title="Email" className="text-gray-50 hover:text-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </Link>
                            

                            <Link rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-50 hover:text-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                </svg>
                            </Link>

                            <Link rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-50 hover:text-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                            </Link>
                            
                        </div>
                    </div>
                   
                    
                </div>
            </div>

        </section>
    );


}