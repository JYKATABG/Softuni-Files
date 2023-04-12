import { useState } from "react"

export function Create({ onCreateGameSubmit }) {

    const [inputs, setInput] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    });

    function handleChanges(e) {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        setInput(x => ({ ...x, [name]: value }));
    };

    function onSubmit(e) {
        e.preventDefault();
        onCreateGameSubmit(inputs)
    }

    return (
        <>
            {/* <!-- Create Page ( Only for logged-in users ) --> */}
            <section id="create-page" className="auth">
                <form id="create" onSubmit={onSubmit}>
                    <div className="container">

                        <h1>Create Game</h1>
                        <label htmlFor="leg-title">Legendary title:</label>
                        <input value={inputs.title} onChange={handleChanges} type="text" id="title" name="title" placeholder="Enter game title..." />

                        <label htmlFor="category">Category:</label>
                        <input value={inputs.category} onChange={handleChanges} type="text" id="category" name="category" placeholder="Enter game / category..." />

                        <label htmlFor="levels">MaxLevel:</label>
                        <input value={inputs.maxLevel} onChange={handleChanges} type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                        <label htmlFor="game-img">Image:</label>
                        <input value={inputs.imageUrl} onChange={handleChanges} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                        <label htmlFor="summary">Summary:</label>
                        <textarea value={inputs.summary} onChange={handleChanges} name="summary" id="summary"></textarea>
                        <input className="btn submit" type="submit" value="Create Game" />
                    </div>
                </form>
            </section>
        </>
    )
}