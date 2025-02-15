"use client";
import { useState } from "react";
import Header from "@/app/componentes/headers/header";
import SubHeader from "@/app/componentes/headers/sub-header"
import Login from "@/app/login/page"; // Importa a página de Login como um componente
import Cadastro from "@/app/cadastro/page"

export default function Home() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div>
            <Header />
            <SubHeader />

            <Cadastro />
        </div>
    );
}
