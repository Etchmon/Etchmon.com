import React from "react";

const Projects = () => {

    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="one">
                <h1>Digital Cookbook</h1>
                <div>
                    <p>A full-stack application that provides a friendly user interface for creating and editing recipes, cookbooks, and explore recipes from other users. Built using React, Next.js, Tailwind CSS, Node.js, MongoDB and deployed with Vercel. </p>
                    <div>
                        <a>
                            Code
                        </a>
                        <a>
                            Link
                        </a>
                    </div>
                </div>
            </div>
            <div className="two">
                <h1>Shopping Cart</h1>
                <div>
                    <p>E-commerce website prototype encompassing a visually appealing landing page, comprehensive product lists, and an efficient shopping cart system. Built using React and Node.js, deployed on github pages.</p>
                    <div>
                        <a>
                            Code
                        </a>
                        <a>
                            Link
                        </a>
                    </div>
                </div>
            </div>
            <div className="three">
                <h1>Weather App</h1>
                <div>
                    <p>A web application that provides real-time weather information for various locations. It allows users to search for a specific location and view the current weather conditions as well as the forecast for the upcoming days.</p>
                    <div>
                        <a>
                            Code
                        </a>
                        <a>
                            Link
                        </a>
                    </div>
                </div>
            </div>
            <div className="four">
                <h1>CV Application</h1>
                <div>
                    <p>A CV application that lets a user input their personal information, education, and work experience then builds a form to display all their information for hiring managers to view.</p>
                    <div>
                        <a>
                            Code
                        </a>
                        <a>
                            Link
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;