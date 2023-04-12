import { useState } from "react"

export function CreateGame({ onCreateGameSubmit }) {

    const [values, setValues] = useState({
        title: "",
        category: "",
        maxLevel: "",
        imageUrl: "",
        description: ""
    })

    function handleChange(e) {
        setValues(x => ({ ...x, [e.target.name]: e.target.value }))
    }

    function onSubmit(e) {
        e.preventDefault();

        onCreateGameSubmit(values);
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={handleChange} placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={handleChange} placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value={values.maxLevel} onChange={handleChange} placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." value={values.imageUrl} onChange={handleChange} />

                    <label htmlFor="description">Summary:</label>
                    <textarea name="description" id="summary" value={values.description} onChange={handleChange}></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    )
}