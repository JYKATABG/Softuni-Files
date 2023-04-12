import { useState } from "react";

export function useForm(initialValues, onSubmitHandler) {

    const [formValues, setFormValues] = useState(initialValues);

    function handleChange(e) {
        e.preventDefault();
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    function onSubmit(e) {
        e.preventDefault();

        if (handleChange) {
            onSubmitHandler(formValues);
        }
    }

    return {
        formValues,
        onSubmit,
        handleChange
    }
}