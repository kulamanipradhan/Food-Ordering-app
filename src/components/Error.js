import React from 'react'
import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    return (
        <div><center><h1>oops!</h1>
            <p>Something went wrong</p>
            <h1> {err.status}: {err.statusText}</h1>
        </center></div>

    )
}

export default Error