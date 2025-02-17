import Image from "next/image";
import Header from "@/app/componentes/headers/header";
import SubHeader from "@/app/componentes/headers/sub-header"
import Footer from "@/app/componentes/footer"


export default function Login(){

    return (
        <div className="w-full">
            <Header />
            <SubHeader />
            <div className="formulario_login w-3/5 flex shadow-2xl m-auto mt-8">
                <form action="" className=" bg-blue-950 w-1/3 text-white p-10 rounded-l-3xl">
                    <h1 className="flex text-5xl mb-2">Kyoto</h1>
                    <h1 className="flex text-5xl mb-8">Mangás</h1>

                    <label htmlFor="emailUser" className="w-full block">Email: </label>
                    <input
                        className="w-full p-2 text-black rounded mb-3"
                        type="text"
                        name="nomeUser"
                        id=""
                        placeholder="usuario@email.com"
                    />

                    <label htmlFor="nomeUser" className="block">Senha: </label>
                    <input
                        className="w-full p-2 text-black rounded mb-3"
                        type="text"
                        name="nomeUser"
                        id=""
                        placeholder="***********"
                    />

                    <button type="submit" className="block px-4 py-2 text-white bg-cyan-700 rounded">LOGAR</button>
                </form>

                <div className="apresentacao w-2/3 bg-cyan-100 content-center justify-center p-10 rounded-r-3xl">
                    <h1 className="text-3xl text-center mb-8">歓迎します！| Bem vindo !</h1>
                    <Image
                        src="/miku-kawaii.png"
                        width="497"
                        height="502"
                        className="flex w-2/3 m-auto"
                        alt="Hatsune miku dando oi"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}
