import React from "react";
import styled from "styled-components";

const Detail = () => {
  return ( 
      <Container>
          <Background>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BB1FBFA805ACA487CA62FFB3617BE172535636042E25D21D7E274F6E6F580B6/scale?width=1200&aspectRatio=1.78&format=jpeg" alt = ""></img>
          </Background>
          <ImageTitle>
              <img src="/images/viewers-marvel.png" alt = ""></img>
          </ImageTitle>
          <Controls>
              <PlayButton>
                  <img src="/images/play-icon-black.png" alt = ""></img>
                  <span>PLAY</span>
              </PlayButton>
              <TrailerButton>
                  <img src="/images/play-icon-white.png" alt = ""></img>
                  <span>TRAILER</span>
              </TrailerButton>
              <AddButton>
                  <span>+</span>
              </AddButton>
              <GroupWatchButton>
                  <img src="/images/group-icon.png" alt = ""></img>
              </GroupWatchButton>
          </Controls>
          <SubTitle>
            gboquhbfdouewfduowhfedihweoihefoi
          </SubTitle>
          <Description>
            ioehfoipwfhohoihiohiohiohiohiohiohihoihio
          </Description>

      </Container>

   );
}
 
export default Detail;

const Container = styled.div `
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    //cover the entire thing
    object-fit: cover;
  }
`

const ImageTitle = styled.div `
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  // with all images give it a parent then insert the below
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div `
  display: flex;
  align-items: center;


`

const PlayButton = styled.button `
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb (249,249,249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-sapcing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198)
  }

`

const TrailerButton = styled(PlayButton) `
  background: rgba(0,0,0,0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;

`

const AddButton = styled.button `
  border-radius: 50%;
  height: 44px;
  margin-right: 16px;
  width: 44px;
  display: flex;
  //vertical alignment
  align-items: center;
  //horizontal alignment
  justify-content: center;
  background: rgba(0,0,0,0.6);
  border: 2px solid white;
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`

const GroupWatchButton = styled(AddButton) `
  background: rgb(0,0,0);
`

const SubTitle = styled.div `
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;

`

const Description = styled.div `
  font-size: 20px;
  min-height: 20px;
  margin-top: 16px;
  line-height: 1.4;
`