import { NavLink } from "react-router-dom";

export default function NavBar() {
      
    return(
        <header>
            <h1>
                <NavLink to="/" >
                    <img src="/Images/logo.png" alt="Portfolio" />
                </NavLink>
            </h1>
            <nav>
                <ul className="navList" >
                    <li><a href="#about" >Sobre</a></li>
                    
                    <li><a href="#skillsArea" >Habilidades</a></li>

                    <li><NavLink to="/projects" >Projetos</NavLink></li>

                    <li className="dropdown">
                        <span>Social</span>  
                        <ul className="subList">
                            <li><NavLink to="">LinkIn</NavLink></li>
                            <li><NavLink to="">Instagram</NavLink></li>
                            <li><NavLink to="">Facebook</NavLink></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <span>Linguagem</span>
                        <ul className="subList">
                            <li>Português</li>
                            <li>Inglês</li>
                        </ul>
                    </li>
                    <li className="contact">
                        <a href="#contactME" >Contacto</a>
                    </li>           
                </ul>  
            </nav>
        </header>
    )
}