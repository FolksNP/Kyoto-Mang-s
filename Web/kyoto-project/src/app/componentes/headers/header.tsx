export default function Header(){
    return(
        <header className="w-full flex justify-around bg-cyan-600 p-3">
            <div className="logo">
                <h1 className="text-white text-3xl">Kyoto Mangás</h1>
            </div>
            <div className="menu">
                <ul className="header-menu">
                    <a href="" className="links-header-menu"><li className="li-header-menu"></li></a>
                </ul>
                <ul className="header-menu">
                    <a href="" className="links-header-menu"><li className="li-header-menu"></li></a>
                </ul>
                <ul className="header-menu">
                    <a href="" className="links-header-menu"><li className="li-header-menu"></li></a>
                </ul>
                <ul className="header-menu">
                    <a href="" className="links-header-menu"><li className="li-header-menu"></li></a>
                </ul>
            </div>
        </header>
    );
}