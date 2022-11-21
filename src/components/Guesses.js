import React from "react"
import styled from "styled-components"

const StyledGuesses = styled.h2`
    text-align: left;
    height: fit-content;
    position: absolute;
    bottom: 0;
`

const Guesses = (props) => {
    return (
        <StyledGuesses>Guesses Left: {props.guessTotal}</StyledGuesses>
    )
}

export default Guesses