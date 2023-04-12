import { useState } from "react"

export function Register() {

    const [inputs, setInputs] = useState({});

    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    return (
        <>
            <h1>Register</h1>
            {/* //Todo: continue the register form */}
            <form action="post">
                <div>
                    <label htmlFor="Username">Username:</label>
                    <input
                        type="text"
                        name='username'
                        value={inputs.username || ""}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="Email">Email:</label>
                    <input
                        type="email"
                        name='email'
                        value={inputs.email || ""}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name='password'
                        value={inputs.password || ""}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input type="submit" />
            </form>
        </>
    )
}