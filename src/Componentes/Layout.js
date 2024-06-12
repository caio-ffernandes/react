import React from "react";
import { Link } from "react-router-dom";
export function Header(){
    return(
        <header>Topo</header>
    )
}
export function Navigation(){
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/Contato"}>Contato</Link>
            <Link to={"/Mapa"}>Mapa</Link>
            <Link to={"/Sobre"}>Sobre</Link>
        </nav>
    )
}
export function Content(){
    return(
        <main>Conteudo</main>
    )
}
export function Footer(){
    return(
        <footer>Rodapé</footer>
    )
}