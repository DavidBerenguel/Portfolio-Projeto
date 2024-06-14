export default function NavBar() {
    
    return(
        <header>
            <h1>
                <a href="/" >
                    <img src="/Images/logo.png" alt="Portfolio" />
                </a>
            </h1>
            <nav>
                <ul className="navLink" >
                    <li><a href="/" >Principal</a></li>
                    
                    <li><a href="" >Habilidades</a></li>

                    <li><a href="" >Projeto</a></li>

                    
                    <li className="sub">
                        Social
                        <ul>
                            <li><a>LinkIn</a></li>
                            <li><a>Instagram</a></li>
                            <li><a>Facebook</a></li>
                        </ul>
                    </li>
                    <li className="sub">
                        Linguagem
                        <ul>
                            <li>Português</li>
                            <li>Inglês</li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <button className="btnContact" type="button" ><a href="" >Contacto</a></button>
        </header>
    )
}