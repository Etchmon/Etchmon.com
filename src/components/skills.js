import React from "react";

const Skills = () => {


    return (
        <section className="skills">
            <h1>Skills</h1>
            <p>"Adaptability is key to survival in the ever-changing world." -John Wooden</p>
            <div>
                <div>
                    <h3>Front End</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Next.js</li>
                        <li>Tailwind</li>
                    </ul>
                </div>
                <div>
                    <h3>Back End</h3>
                    <ul>
                        <li>Node</li>
                        <li>Express</li>
                        <li>RESTful API</li>
                        <li>MongoDb</li>
                    </ul>
                </div>
                <div>
                    <h3>Tools</h3>
                    <ul>
                        <li>Git</li>
                        <li>Heroku</li>
                        <li>Vercel</li>
                        <li>Webpack</li>
                        <li>OAuth</li>
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default Skills;