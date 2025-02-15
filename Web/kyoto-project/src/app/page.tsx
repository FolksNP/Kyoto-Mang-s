import Header from "@/app/componentes/headers/header";
import SubHeader from "@/app/componentes/headers/sub-header"
import Link from "next/link";


export default function Home() {
  return (
      <div>
        <Header />
          <div>
              <h1>menu provisorio para testes: </h1>
              <Link href="/login">login</Link>
          </div>
        <SubHeader />
      </div>
  );
}
