import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import db from "../Firebase";

const Details = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    //Grab the movie info from database 
      db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //savve the movie data in the state
          setMovie(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
  }, [id])
  
  return ( 

    
      <Container>
        {movie && (
          <>
                <Background>
                    <img src={movie.backgroundImg} alt = ""/>
                </Background>
                <ImageTitle>
                    <img src={movie.titleImg} alt = ""/>
                </ImageTitle>
                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-black.png" alt = ""/>
                        <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/play-icon-white.png" alt = ""/>
                        <span>TRAILER</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    <GroupWatchButton>
                        <img src="/images/group-icon.png" alt = ""/>
                    </GroupWatchButton>
                </Controls>
                <SubTitle>
                {movie.subTitle}
                </SubTitle>
                <Description>
                {movie.description}
                </Description>
        </>  
        )}
      </Container>
    
    
   );
}
 
export default Details;

const Container = styled.div `
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 0px;
  padding: 0 calc(3.5vw + 5px);
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
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
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
  max-width: 760px;
`