"use client";
import { useState } from "react";
import Header from "@/app/componentes/headers/header";
import SubHeader from "@/app/componentes/headers/sub-header"
import Footer from "@/app/componentes/footer"

export default function Home() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div>
            <Header />
            <SubHeader />

            <main className="w-full">
                <div className="w-5/6 rounded shadow-black shadow-2xl m-auto h-full bg-red-600">
                    <div className="heading w-full p-2">
                        <h1 className="inline">Catalago: </h1>
                        <input
                            type="text"
                            placeholder="pesquise aqui"
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
