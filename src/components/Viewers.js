import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return ( 
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt = "Disney Viewer"></img>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt = "Marvel Viewer"></img>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt = "National Viewer"></img>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt = "Pixar Viewer"></img>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt = "Starwars Viewer"></img>
      </Wrap>
    </Container>
   );
}
 
export default Viewers;

const Container = styled.div `
  margin-top: 30px;
  display: grid;
  padding: 30px 0 26px;
  // each column stretch out as much as possible - 5 columns
  grid-template-columns: repeat(5, minmax(0, 1fr));
  //create a gap in between columns
  grid-gap: 25px;
`

const Wrap = styled.div `
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px;
  //use for transitions always
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    //fit the image as much as possible
    object-fit: cover;    
  }
  
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
  }
`