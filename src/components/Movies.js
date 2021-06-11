import React from "react";
import styled from "styled-components";

const Movies = () => {
  return ( 
      <Container>
        <h4>Recommended for You</h4>
        <Content>
          <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BB1FBFA805ACA487CA62FFB3617BE172535636042E25D21D7E274F6E6F580B6/scale?width=1200&aspectRatio=1.78&format=jpeg" alt = "Disney Viewer"></img>
          </Wrap>
          <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BB1FBFA805ACA487CA62FFB3617BE172535636042E25D21D7E274F6E6F580B6/scale?width=1200&aspectRatio=1.78&format=jpeg" alt = "Disney Viewer"></img>
          </Wrap>
          <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BB1FBFA805ACA487CA62FFB3617BE172535636042E25D21D7E274F6E6F580B6/scale?width=1200&aspectRatio=1.78&format=jpeg" alt = "Disney Viewer"></img>
          </Wrap>
          <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BB1FBFA805ACA487CA62FFB3617BE172535636042E25D21D7E274F6E6F580B6/scale?width=1200&aspectRatio=1.78&format=jpeg" alt = "Disney Viewer"></img>
          </Wrap>
          <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BB1FBFA805ACA487CA62FFB3617BE172535636042E25D21D7E274F6E6F580B6/scale?width=1200&aspectRatio=1.78&format=jpeg" alt = "Disney Viewer"></img>
          </Wrap>
          <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BB1FBFA805ACA487CA62FFB3617BE172535636042E25D21D7E274F6E6F580B6/scale?width=1200&aspectRatio=1.78&format=jpeg" alt = "Disney Viewer"></img>
          </Wrap>
          <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BB1FBFA805ACA487CA62FFB3617BE172535636042E25D21D7E274F6E6F580B6/scale?width=1200&aspectRatio=1.78&format=jpeg" alt = "Disney Viewer"></img>
          </Wrap>
          <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BB1FBFA805ACA487CA62FFB3617BE172535636042E25D21D7E274F6E6F580B6/scale?width=1200&aspectRatio=1.78&format=jpeg" alt = "Disney Viewer"></img>
          </Wrap>
        </Content>
      </Container>
   );
}
 
export default Movies;

const Container = styled.div `
  


`

const Content = styled.div `
  margin-top: 30px;
  display: grid;
  padding: 30px 0 26px;
  // each column stretch out as much as possible - 5 columns
  grid-template-columns: repeat(4, minmax(0, 1fr));
  //create a gap in between columns
  grid-gap: 25px;



`

const Wrap = styled.div`
    img {
      width: 100%;
      height: 100%;
      //fit the image as much as possible
      object-fit: cover;    
    }

    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px;
    //use for transitions always
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
    }

`