import { useState } from "react";

export default function Skills() {
    
    
    return(
        
        <div id="divSkills" >
            <h2 className="titleSkills" >Habilidades Técnicas</h2>
            <div className="titlesSkill">
                <h3 className="titleSkill" >HTML</h3>
                <h3 className="titleSkill" >CSS</h3>
                <h3 className="titleSkill" >JavaScript</h3>
            </div>
            <div className="skills" >

                <div className="blockSkills" >
                    <div className="outerSkill">
                        <div className="circularProgress" >
                            <span className="progressValue">0%</span>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="240px" height="240px">
                        <defs>
                            <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="120" cy="120" r="95" stroke-linecap="round" />
                    </svg>
                </div>

                <div className="blockSkills">
                    <div className="outerSkill">
                        <div className="circularProgress" >
                            <span className="progressValue">0%</span>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="250px" height="250px">
                        <defs>
                            <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="120" cy="120" r="95" stroke-linecap="round" />
                    </svg>
                </div>

                <div className="blockSkills">
                    <div className="outerSkill">
                        <div className="circularProgress" >
                            <span className="progressValue">0%</span>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="250px" height="250px">
                        <defs>
                            <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="120" cy="120" r="95" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    );

}