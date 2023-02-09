import React from "react"
import '../App.css';

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.imgUrl} alt="character" onClick={props.handleClick}></img>
        </div>
    )
}