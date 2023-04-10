import React from 'react'
import './Input.css'

export const Input = (props) => {
    return (
        <>  
            {
                props.type == 'submit' ?
                <input className="submit" type={props.type} value={props.name} />
                :
                <input className="text" type={props.type} placeholder={props.name} />
            }
        </>
    )
}
