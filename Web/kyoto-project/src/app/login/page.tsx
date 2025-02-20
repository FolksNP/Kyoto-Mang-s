import Image from "next/image";
import Header from "@/app/componentes/headers/header";
import SubHeader from "@/app/componentes/headers/sub-header"
import Footer from "@/app/componentes/footer"
import Link from "next/link";


export default function Login(){

    return (
        <div className="w-full">
            <Header />
            <SubHeader />
            <div className="w-2/3 flex shadow-2xl rounded-3xl m-auto mt-8">
                <form action="" className=" bg-blue-950 w-4/6 text-white p-10 rounded-l-3xl">
                    <h1 className="flex text-5xl mb-3">Kyoto</h1>
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

                    <button type="submit" className="block w-full px-4 py-2 text-white bg-cyan-700 rounded">LOGAR</button>

                    <div className="text-center mt-8 hover:text-yellow-400">
                        <Link href="/cadastro">Não faz parte da comunidade ainda? Cadastre-se aqui!</Link>
                    </div>

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
