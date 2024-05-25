

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
                    <li><a href="/" >Home</a></li>
                    
                    <li><a href="" >Skills</a></li>

                    <li><a href="" >Projeto</a></li>

                    
                    <li className="sub">
                        Social
                        <ul>
                            <li>LinkIn</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
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
            <button className="btnContact" type="button" ><a href="" >Contato</a></button>
        </header>
    )
}