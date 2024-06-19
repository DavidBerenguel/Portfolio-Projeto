import { useState } from "react"

export default function NavBar() {
      
    const [socialIsOpen, setSocialIsOpen] = useState(false)
    const [langIsOpen, setLangIsOpen] = useState(false)

    return(
        <header>
            <h1>
                <a href="/" >
                    <img src="/Images/logo.png" alt="Portfolio" />
                </a>
            </h1>
            <nav>
                <ul className="navList" >
                    <li><a href="#divMain" >Sobre</a></li>
                    
                    <li><a href="#divSkills" >Habilidades</a></li>

                    <li><a href="" >Projetos</a></li>

                    <li><span onClick={() => setSocialIsOpen(!socialIsOpen)}>Social</span>  
                        { socialIsOpen ? 
                        <ul className="subList">
                            <li><a>LinkIn</a></li>
                            <li><a>Instagram</a></li>
                            <li><a>Facebook</a></li>
                        </ul>:null}
                    </li>
                    <li><span onClick={() => setLangIsOpen(!langIsOpen)}>Linguagem</span>
                            { langIsOpen ? 
                            <ul className="subList">
                                <li>Português</li>
                                <li>Inglês</li>
                            </ul>:null}
                    </li>
                </ul>  
            </nav>
            <button className="btnContact" type="button" ><a href="#contactForm" >Contacto</a></button>
        </header>
    )
}