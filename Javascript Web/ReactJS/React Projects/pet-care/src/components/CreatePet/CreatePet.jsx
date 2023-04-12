import { useState } from "react"
import { useForm } from "../../hooks/useForm.js";

export function CreatePet({ createPetOffer }) {

    const { formValues, handleChange, onSubmit } = useForm({
        name: '',
        breed: '',
        age: '',
        weight: '',
        imageUrl: ''
    }, (values) => {
        createPetOffer(values);
    })

    return (
        <section id="createPage">
            <form className="createForm" onSubmit={onSubmit}>
                <img src="./images/cat-create.jpg" />
                <div>
                    <h2>Create PetPal</h2>
                    <div className="name">
                        <label htmlFor="name">Name:</label>
                        <input name="name" id="name" value={formValues.name} onChange={handleChange} type="text" placeholder="Max" />
                    </div>
                    <div className="breed">
                        <label htmlFor="breed">Breed:</label>
                        <input name="breed" value={formValues.breed} onChange={handleChange} id="breed" type="text" placeholder="Shiba  Inu" />
                    </div>
                    <div className="Age">
                        <label htmlFor="age">Age:</label>
                        <input name="age" value={formValues.age} onChange={handleChange} id="age" type="text" placeholder="2 years" />
                    </div>
                    <div className="weight">
                        <label htmlFor="weight">Weight:</label>
                        <input name="weight" value={formValues.weight} onChange={handleChange} id="weight" type="text" placeholder="5kg" />
                    </div>
                    <div className="image">
                        <label htmlFor="imageUrl">Image:</label>
                        <input name="imageUrl" value={formValues.imageUrl} onChange={handleChange} id="image" type="text" placeholder="./image/dog.jpeg" />
                    </div>
                    <button className="btn" type="submit">Create Pet</button>
                </div>
            </form>
        </section>
    )
}