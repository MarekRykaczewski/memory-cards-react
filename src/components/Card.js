import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <h2 className="card-val">{props.value}</h2>
        </div>
    )
}