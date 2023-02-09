import React from "react"
import '../App.css';

export default function Card(props) {

    const styles = {
        // height: "100%",
        // width: "100%",
        // backgroundSize: "cover"

    }

    return (
        <div className="card">
            <img className="card--image" src={props.imgUrl} alt="character" onClick={props.handleClick}></img>
        </div>
    )
}