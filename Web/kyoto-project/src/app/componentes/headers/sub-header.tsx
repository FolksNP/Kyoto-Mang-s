import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
import Link from "next/link";

export default function subHeader() {
    return (
        <menu className="flex w-full justify-center flex-wrap bg-stone-300 text-xl mb-4 ">

            <div className="flex justify-around w-3/6 text-blue-950 px-2 py-1.5 sm:columns-2">
                <ul className="header-menu">
                    <a href="" className="links-header-menu hover:text-white"><li className="li-header-menu">Digitais</li></a>
                </ul>
                <ul className="header-menu">
                    <a href="" className="links-header-menu hover:text-white"><li className="li-header-menu">Mangás</li></a>
                </ul>
                <ul className="header-menu">
                    <Link href="/catalago"><li className="links-header-menu hover:text-white">Catálogo</li></Link>
                </ul>
                <ul className="header-menu">
                    <a href="" className="links-header-menu hover:text-white"><li className="li-header-menu">Comunidade</li></a>
                </ul>
            </div>
        </menu>
    );
}