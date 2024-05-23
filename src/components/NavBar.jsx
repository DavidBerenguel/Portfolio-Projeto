

export default function NavBar() {
    
    return(
        <nav>
            <a className="logo" href="/" >Portfolio.</a>
            <ul className="navLink" >
                <li><a href="/" >Home</a></li>
                <li><a href="" >Skills</a></li>
                <li><a href="" >Projeto</a></li>
                <li><a href="" >LinkedIn</a></li>
                <li><a href="" >Instagram</a></li>
                <li><a href="" >Facebook</a></li>
                <li>
                    Linguagem
                    <ul>
                        <li>Português</li>
                        <li>Inglês</li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}