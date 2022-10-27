import React, { useState } from "react"
import { useHistory } from "react-router-dom";


function Login ({ user, setUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(user, password)
        })
            .then(resp => resp.json())
            .then(data => setUser(data))
            history.push('/Admin')
    }



    return (
        <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange = {(e) => setUsername(e.target.value)}
                    />
                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
                <button variant="fill" color="primary" type="submit">Login
                </button>
        </form>
    )
}
export default Login