import React from "react";
import styled from "styled-components";

const StyledArtist = styled.button`
  border-radius: 5px;
  padding: 20px 50px;
  width: 90%;
  margin-inline: auto;
  font-weight: 700;
  &:hover {
    background-color: rgb(227, 227, 227);
  }
`

const Artist = (props) => {
  return (
    <StyledArtist onClick={props.answer}>{props.name}</StyledArtist>
  );
};

export default Artist;
