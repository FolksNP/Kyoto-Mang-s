import Image from "next/image";

export default function Login(){
    return (
        <div className="container w-full ">
            <div className="formulario_login flex shadow-2xl m-auto rounded-2xl ">
                <form action="" className="w-1/3 bg-blue-950 text-white p-10 rounded-l-3xl">
                    <h1 className="flex text-xl">Kyoto</h1>
                    <h1 className="flex text-xl">Mangás</h1>

                    <label htmlFor="emailUser" className="w-full block">Email: </label>
                    <input className="w-full" type="text" name="nomeUser" id="" placeholder="usuario@email.com"/>

                    <label htmlFor="nomeUser" className="block">Senha: </label>
                    <input className="w-full" type="text" name="nomeUser" id="" placeholder="***********"/>

                    <button type="submit" className="block px-4 py-2 text-white bg-cyan-700 rounded">LOGAR</button>
                </form>

                <div className="apresentacao w-2/3 bg-cyan-100 content-center justify-center p-10 rounded-r-3xl">
                    <h1 className="text-3xl text-center mb-8">歓迎します！| Bem vindo !</h1>
                    <Image
                        src="/miku-kawaii.png"
                        width="497"
                        height="502"
                        className="flex w-1/2 m-auto"
                        alt="Hatsune miku fofinha"
                    />
                </div>
            </div>
        </div>
    );
}
