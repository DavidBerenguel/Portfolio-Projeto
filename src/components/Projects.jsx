import { NavLink } from "react-router-dom";

export default function Projects() {
    return (
        <div className="pageProjects">
            <div className="projectContent">
                <div className="infoBlock">
                    <h2>Projetos</h2>
                    <div className="textProject">
                        <p>
                        Criar projetos como desenvolvedor web tem sido uma experiência extremamente enriquecedora. Desde a concepção inicial de ideias até a implementação de soluções complexas e escaláveis, cada projeto me proporciona um senso de realização imenso.
                        </p>
                    </div>
                    <NavLink to="https://github.com/DavidBerenguel" className="btnGit">O meu Git ➜</NavLink>
                </div>
                <div className="projects">
                    <div className="box1">

                    </div>
                    <div className="box2">
                        
                    </div>
                    <div className="box3">
                        
                    </div>
                    <div className="box4">
                        
                    </div>
                    <div className="box5">
                        
                    </div>
                    <div className="box6">
                        
                    </div>
                    <div className="box7">
                        
                    </div>
                    <div className="box8">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}