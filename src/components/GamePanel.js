import React from "react";
import styled from "styled-components";

const StyledGamePanel = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    justify-content: space-evenly;
    margin-bottom: 2rem;
    position: relative;
`

const GamePanel = ({children}) => {
    return (
        <StyledGamePanel>
            {children}
        </StyledGamePanel>
    )
}

export default GamePanel