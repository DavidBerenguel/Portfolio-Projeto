import { useState, useEffect } from "react";

export default function Skills() {
    

    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [progress3, setProgress3] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            
            if(progress1 === 65){
                return clearInterval(interval);
            }

            else{

                setProgress1((progress1) => progress1 + 1);
            }

        }, 28);

        return () => clearInterval(interval);

    },[progress1]);

    useEffect(() => {
        const interval = setInterval(() => {
            
            if(progress2 === 55){
                return clearInterval(interval);
            }

            else{

                setProgress2((progress2) => progress2 + 1);
            }

        }, 30);

        return () => clearInterval(interval);

    },[progress2]);

    useEffect(() => {
        const interval = setInterval(() => {
            
            if(progress3 === 50){
                return clearInterval(interval);
            }

            else{

                setProgress3((progress3) => progress3 + 1);
            }

        }, 31);

        return () => clearInterval(interval);

    },[progress3]);
    
    return(
        
        <div id="skillsArea" >
            <h2 className="title" >Habilidades Técnicas</h2>
            <div className="skills" >
                
                <div>
                    <h3 className="titleSkill" >HTML</h3>
                    <div className="blockSkills" >
                        <div className="outerSkill">
                            <div className="circularProgress" >
                                <span className="progressValue">{progress1}%</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="240px" height="240px">
                            <defs>
                                <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle className="htmlBar" cx="120" cy="120" r="95" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                <div>
                    <h3 className="titleSkill" >CSS</h3>
                    <div className="blockSkills">
                        <div className="outerSkill">
                            <div className="circularProgress" >
                                <span className="progressValue">{progress2}%</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="250px" height="250px">
                            <defs>
                                <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle className="cssBar" cx="120" cy="120" r="95" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
                <div>
                    <h3 className="titleSkill" >JavaScript</h3>
                    <div className="blockSkills">
                        <div className="outerSkill">
                            <div className="circularProgress" >
                                <span className="progressValue">{progress3}%</span>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="250px" height="250px">
                            <defs>
                                <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle className="jsBar" cx="120" cy="120" r="95" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );

}