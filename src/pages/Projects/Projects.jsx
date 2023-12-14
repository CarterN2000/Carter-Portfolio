import { useState, useEffect } from 'react'

export default function Projects() {

    const [projects, setProjects] = useState(null)

    async function fetchProjects() {
        try {
            const response = await fetch('../../projects.json')
            const data = await response.json()
            setProjects(data)
        }
        catch(err) {
            console.log(err)
        }
    }
    useEffect(() => { 
        fetchProjects() 
    }, []);

    function loaded () {
        return (
            projects.map(function(p, idx) {
                return(
                    <div key={idx}>
                        <h1>{p.name}</h1>
                        <img className="project-images" src={p.image} alt="Project Image" />
                        <a href={p.git}>
                            <button>Github</button>
                        </a>
                        <a href={p.live}>
                            <button>Live site</button>
                        </a>
                    </div>
                )
            })
        )
    }

    return (
        projects ? loaded() : <h1>Loading...</h1>
    )
}