"use client";
import { useState } from "react";

export default function Header(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <header className="w-full flex justify-around bg-cyan-600 p-3">
            <div className="logo">
                <h1 className="text-white text-3xl">Kyoto Mangás</h1>
            </div>
            <div className="menu">
                <div
                    className="relative inline-block"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    {/* Botão */}
                    <button className="text-xl text-white px-4 py-1 rounded">
                        Menu
                    </button>

                    {/* Opções do Dropdown */}
                    {isOpen && (
                        <div className="absolute left-0 w-40 bg-white border border-gray-300 shadow-lg rounded">
                            <ul className="flex flex-col">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Login
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Dashboard
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Opções
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                {/*<ul className="header-menu">*/}
                {/*    <a href="" className="links-header-menu"><li className="li-header-menu"></li></a>*/}
                {/*</ul>*/}
                {/*<ul className="header-menu">*/}
                {/*    <a href="" className="links-header-menu"><li className="li-header-menu"></li></a>*/}
                {/*</ul>*/}
                {/*<ul className="header-menu">*/}
                {/*    <a href="" className="links-header-menu"><li className="li-header-menu"></li></a>*/}
                {/*</ul>*/}
                {/*<ul className="header-menu">*/}
                {/*    <a href="" className="links-header-menu"><li className="li-header-menu"></li></a>*/}
                {/*</ul>*/}
            </div>
        </header>
    );
}