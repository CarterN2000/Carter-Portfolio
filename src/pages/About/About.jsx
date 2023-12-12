import {useState, useEffect} from 'react'
import './About.css'

export default function About() {
    const [about, setAbout] = useState(null)

    async function fetchAboutMe() {
        try {
            const response = await fetch('../../about.json')
            const data = await response.json()
            setAbout(data)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchAboutMe()
    }, [])

    function loaded() {
        return(
            <div>
                <h2>{about.name}</h2>
                <h3>{about.email}</h3>
                <img className="headshot" src={about.headshot} alt="Failed" />
                <p>{about.bio}</p>
            </div>
        )
    }

    return (
        about ? loaded() : <h1>Loading...</h1>
    )
}   