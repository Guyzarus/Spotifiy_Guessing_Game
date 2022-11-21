import React from "react"
import styled from "styled-components"

const StyledTimer = styled.h2`
    margin: 0 auto 0;
    width: 5rem;
    height: 5rem;
    border: 1px solid red;
    border-radius: 100%;
    text-align: center;
    line-height: 5rem;
    font-size: 3rem;
    grid-column: 2 / 3;
`

const Timer = (props) => {
    return (
        <StyledTimer>60</StyledTimer>
    )
}

export default Timer