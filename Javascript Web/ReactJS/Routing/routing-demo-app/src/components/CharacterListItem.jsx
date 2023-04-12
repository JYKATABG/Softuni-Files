import { Link } from 'react-router-dom'

export function Character({ name, url }) {

    let characterId = url.split('/').filter(x => x).pop();

    return (
        <div className='characters'>
            <Link to={`/characters/${characterId}`}>{name}</Link>
        </div>
    )
}