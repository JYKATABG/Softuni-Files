export default function Shoot() {
    const shoot = () => {
        alert('Nice shot!');
    }

    return (
        <button onClick={shoot}>Take the shot!</button>
    )
}