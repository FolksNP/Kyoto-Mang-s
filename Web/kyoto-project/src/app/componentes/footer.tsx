"use client";
import { useState } from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-700 text-white">

            {/*Parte superior do footer*/}
            <div className="w-full mt-8 p-3 border-b-2 border-white">
                <h1 className="text-3xl text-center ">Kyoto Mangás</h1>
            </div>

            <div className="flex w-full justify-around py-4 px-24 items-center">

                {/*<div className="w-1/4">*/}
                {/*    <p className="text-xl">Contato e</p>*/}
                {/*    <p className="text-xl">Endereços</p>*/}
                {/*    <p>Endereço: Avenida Não Existente, N°: 110101 - 01101-010 - São Paulo</p>*/}
                {/*    <p>Whatsapp: 11 90100-1101</p>*/}
                {/*    <p>Email comercial: comercial@kyotomangas.com.br</p>*/}
                {/*    <p>Email do suporte: suporte@kyotomangas.com.br</p>*/}
                {/*</div>*/}



                <div className="w-1/4 text-center">
                    <p className="text-xl text-center">Redes sociais</p>
                    <ul>
                        <li>Instagram: Kyoto_Project</li>
                        <li>Youtube: Kyoto Mangás - Hits</li>
                        <li>Twitter (x): Kyoto_Project</li>
                        <li>Linkedin: Kyoto Mangás - Literatura</li>
                    </ul>
                </div>

                <div className="w-1/4">
                    <p className="text-xl text-center">Kyoto Mangás</p>
                    <p className="text-xl text-center">ねえブラジル人、これを何かだと思って翻訳したよね？</p>
                </div>

                <div className="w-1/4 text-center">
                    <p className="text-xl text-center">Fornecedores</p>
                    <p>
                        <a href="https://panini.com.br/" className="text-reset">Panini</a>
                    </p>
                    <p>
                        <a href="https://editorajbc.com.br/comercial/" className="text-reset">Editora JCB</a>
                    </p>
                    <p>
                        <a href="https://www.lojanewpop.com.br/" className="text-reset">Editora New POP</a>
                    </p>
                    <p>
                        <a href="https://editoraconrad.com.br/" className="text-reset">Editora Conrad</a>
                    </p>
                </div>
            </div>

            <div className="w-full mt-8 p-4 border-t-2 border-white text-center">
                Kyoto Mangás - たくさんのマンガ、日本、そしてあなたに楽しい!
            </div>

        </footer>
    );
}
