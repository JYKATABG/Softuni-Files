import { useState } from "react";

export function useForm(initialValue, onSubmitHandler) {
    const [formValues, setFormValues] = useState(initialValue);

    function onChangeHandler(e) {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    function onSubmit(e) {
        e.preventDefault();

        onSubmitHandler(formValues);
    }

    return {
        formValues,
        onSubmit,
        onChangeHandler
    }
}