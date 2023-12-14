import { useState, useEffect } from 'react'
import './Projects.css'

export default function Projects() {

    const [projects, setProjects] = useState(null)

    async function fetchProjects() {
        try {
            const response = await fetch('../../projects.json')
            const data = await response.json()
            setProjects(data)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchProjects()
    }, []);

    function loaded() {
        return (
            <div className="all-projects">
                {projects.map(function (p, idx) {
                    return (
                        <div key={idx} className="projects-container">
                            <img className="project-images" src={p.image} alt="Project Image" />
                            <section className='under-image'>
                                <h1>{p.name}</h1>
                                <div className="button-links">
                                    <a href={p.git}>
                                        <button>Github</button>
                                    </a>
                                    <a href={p.live}>
                                        <button>Live site</button>
                                    </a>
                                </div>
                            </section>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        projects ? loaded() : <h1>Loading...</h1>
    )
}