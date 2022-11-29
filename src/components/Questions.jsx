import React from "react"
export default function Questions(props){
    //console.log(props.data)
    return(
        <div className="page">
            <h5 className="questions">{props.data}</h5>
        </div>
    )
}