import { useState } from "react";

export function useForm(inititalValues, onSubmit) {
    const [formValues, setFormValues] = useState(inititalValues)

    const handleChange = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmit(inititalValues);
    }

    return {
        formValues,
        onSubmit,
        handleChange
    }
}