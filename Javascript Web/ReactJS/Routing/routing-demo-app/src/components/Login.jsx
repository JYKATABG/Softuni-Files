import { useState } from "react";

export function Login() {
    const [inputs, setInput] = useState({});

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    return (
        <>
            <h1>Login</h1>
            <form method="post">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name='username'
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name='password'
                        value={inputs.password || ""}
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" />
            </form>
        </>
    )
}