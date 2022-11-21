import React from "react"
import styled from "styled-components"

const StyledPoints = styled.h2`
    text-align: right;
    height: fit-content;
    position: absolute;
    bottom: 0;
    right: 0;
`

const Points = (props) => {
    return (
        <StyledPoints>Points Gained: {props.pointTotal}</StyledPoints>
    )
}

export default Points