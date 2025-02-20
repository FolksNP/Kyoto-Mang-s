"use client";
import { useState } from "react";
import Header from "@/app/componentes/headers/header";
import SubHeader from "@/app/componentes/headers/sub-header";
import Footer from "@/app/componentes/footer";

export default function Cadastro(){

    // funções para configurar a div que aparece a imagem de perfil.
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return(

        <main className="w-full">

            <Header />
            <SubHeader />

            <div className="w-3/5 flex bg-blue-950 rounded-md shadow-2xl p-8 m-auto ">
                <form action="" className="w-full flex flex-wrap columns-2">
                    <div className="w-2/3">
                        <h1 className="text-white text-2xl mb-4">Venha fazer parte dessa comunidade!</h1>

                        {/* entrada do nome completo do usuario */}
                        <input type="text"
                               name="nome_usuario"
                               placeholder="Nome completo"
                               className="w-full block p-2 mb-4 rounded"
                        />

                        {/* entrada do usuario */}
                        <input
                            type="text"
                            name="usuario"
                            placeholder="Usuário"
                            className="w-full block p-2 mb-4 rounded"
                        />

                        {/* entrada do email a ser cadastrado */}
                        <input
                            type="email"
                            id="email"
                            name="email_usuario"
                            placeholder="Email"
                            className="w-full block p-2 mb-4 rounded"
                        />

                        {/* confirmar o email */}
                        <input
                            type="email"
                            name="confirmar_email"
                            id="confirmaEmail"
                            placeholder="Confirmar email"
                            className="w-full block p-2 mb-4 rounded"
                        />

                        <span>
                            {/* senha de acesso */}
                            <input type="password"
                                   name="senha"
                                   id=""
                                   placeholder="Senha"
                                   className="w-1/2 p-2 mb-4 rounded-l border-r-4 border-r-yellow-400"
                            />

                            {/* validar senha inserida */}
                            <input
                                type="password"
                                name="confirmar_senha"
                                placeholder="Confirmar senha"
                                className="w-1/2 p-2 mb-4 rounded-r "
                                id=""
                            />
                        </span>

                        {/* validar senha inserida */}
                        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Cadastre-se</button>

                    </div>
                    <div className="input-foto w-1/3 flex justify-center items-center">
                        {/*<label*/}
                        {/*    className="w-80 h-80 flex flex-col items-center justify-center border-2 border-dashed border-blue-500 rounded-lg cursor-pointer text-blue-500 hover:bg-blue-100 transition-colors relative">*/}
                        {/*    <span className="text-center">Clique ou arraste um arquivo aqui</span>*/}
                        {/*    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"/>*/}
                        {/*</label>*/}

                        <div
                            className="w-60 h-60 flex flex-col items-center justify-center bg-gray-100 border-2 border border-blue-500 rounded cursor-pointer text-blue-500 hover:bg-blue-100 transition-colors relative overflow-hidden"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                        >
                            <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="max-w-full max-h-full object-contain"
                                />
                            ) : (
                                <span className="text-center">Clique ou arraste um arquivo aqui</span>
                            )}
                        </div>

                    </div>
                </form>
            </div>

            <Footer />

        </main>
    );
}