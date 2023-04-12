import { useEffect, useState } from 'react'
import { Character } from './CharacterListItem.jsx';
import './Characters.css'
const url = 'https://swapi.dev/api/people'

export function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results)
            })
    }, [])

    return (
        <>
            <h1>Characters List</h1>
            <img src="https://imgix.ranker.com/list_img_v2/995/380995/original/380995-u2" alt="star wars" />
            <ul>
                {characters.map(character => <Character key={character.url} {...character} />)}
            </ul>
        </>
    )
}