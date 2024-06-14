export default function Main() {
    
    return(
        <main>
            <div className="divMain" >
                <div>
                    <h2 className="tituloMain" >Olá!<br /> Sou o David Berenguel</h2>
                    <p className="mainText" >
                        Ao longo do meu curso de desenvolvedor de sites, descobri um novo mundo de possibilidades e desafios. Com a minha dedicação e apoio do professor e da comunidade online, consegui criar projetos práticos e melhorar minhas habilidades em desenvolvimento web. Neste portfolio, você pode ver alguns dos meus projetos mais recentes, um site de e-commerce com funcionalidades avançadas. Estou ansioso para continuar a desenvolver minhas habilidades e aplicá-las em projetos reais
                    </p>
                </div>
            </div>
            <div className="divSkills" >
                <h2 className="tituloSkills" >Habilidades Técnicas</h2>
                <div className="skills" >

                    <div className="blockSkill" >
                        <h3>HTML</h3>
                        <div className="outerSkill">
                            <div className="circularProgress" >
                                <span className="progressValue">0%</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                    </div>

                    <div className="blockSkill">
                        <h3>CSS</h3>
                        <div className="outerSkill">
                            <div className="circularProgress" >
                                <span className="progressValue">0%</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                    </div>

                    <div className="blockSkill">
                        <h3>JavaScript</h3>
                        <div className="outerSkill">
                            <div className="circularProgress" >
                                <span className="progressValue">0%</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                    </div>
                </div>
            </div>
        </main>
    )
}