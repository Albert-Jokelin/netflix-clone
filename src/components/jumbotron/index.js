import React from "react"
import { Inner } from './styles/Jumbotron'

export default function Jumbotron({ direction = 'row',  }){
    return(
        <Inner direction ={direction}>
            <p>Jimbo</p>
        </Inner>
    )
}