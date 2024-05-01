import { useLocation } from "react-router-dom"
import React from "react"





export default function Home() {
    const location = useLocation()
    return(
        <div>
            <h1>WELCOME USER {location.state.id}</h1>
            <p>What would you like to do?</p>
            <a href="/">
                <button>Logout</button>
            </a>
            <p></p>
            <a href="/viewflights">
                <button>View Flights</button>
            </a>
        </div>
    )
}