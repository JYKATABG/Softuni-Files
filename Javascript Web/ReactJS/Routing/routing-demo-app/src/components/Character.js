import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

const url = 'https://swapi.dev/api/people'

export function Character() {
    let { characterId } = useParams();
    const [characterInfo, setCharacterInfo] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`${url}/${characterId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCharacterInfo(data);
            })
    }, [characterId])

    function backButton() {
        navigate('/characters')
    }

    return (
        <>
            <div>
                <h1>Character Info</h1>
                <h2>Name: {characterInfo.name}</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" alt="star wars logo" />
            </div>
            <button onClick={backButton}>Back</button>
        </>
    )
}