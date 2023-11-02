import React from "react"
import { useNavigate } from "react-router-dom"
function Main() {
    const navigate = useNavigate();
    return (
        <>
            <h1>welcome Main!</h1>
            <button onClick={() => {navigate('/home')}}>to Home</button>
        </>
    )
}

export default Main