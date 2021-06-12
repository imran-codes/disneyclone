import React, {useEffect} from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../Firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState
} from "../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user) {
        dispatch(setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
        history.push("/"); 
      }
    })
  }, [userName])

  //signin function
  // const signIn = () => {
  //   auth.signInWithPopup(provider)
  //   .then((result) => {
  //     let user = result.user;
  //       dispatch(setUserLoginDetails({
  //         name: user.displayName,
  //         email: user.email,
  //         photo: user.photoURL
  //       }))
  //       history.push("/");
  //   })
  // }

  // const signOut = () => {
  //   auth.signOut()
  //   .then(() => {
  //     dispatch(setSignOutState);
  //     history.push("/login");
  //   })
  // }

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/login");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };


  return ( 
    <Nav>
      <Logo src = "/images/logo.svg"/>
      {!userName ? (
        <LoginContainer>
            <Login onClick={handleAuth}>Login</Login>
        </LoginContainer>
      ) :
        <>
              <NavMenu>
                <Link to="/">
                  <img src = "/images/home-icon.svg" alt = "Home icon"></img>
                  <span>HOME</span>
                </Link>
                <a>
                  <img src = "/images/search-icon.svg" alt = "Search icon"></img>
                  <span>SEARCH</span>
                </a>
                <a>
                  <img src = "/images/watchlist-icon.svg" alt = "WatchList icon"></img>
                  <span>WATCHLIST</span>
                </a>
                <a>
                  <img src = "/images/original-icon.svg" alt = "Originals icon"></img>
                  <span>ORIGINALS</span>
                </a>
                <a>
                  <img src = "/images/movie-icon.svg" alt = "Movie icon"></img>
                  <span>MOVIES</span>
                </a>
                <a>
                  <img src = "/images/series-icon.svg" alt = "Series icon"></img>
                  <span>SERIES</span>
                </a>
              </NavMenu>
            <SignOut>
              <UserImg src={userPhoto} alt={userName} />
              <DropDown>
                <span onClick={handleAuth}>Sign out</span>
              </DropDown>
          </SignOut>
      </>
      }
    </Nav>
   );
}
 
export default Header;

const Nav = styled.nav `
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  z-index: 3;
`

const Logo = styled.img `
  width: 80px;
`

const NavMenu = styled.div `
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      z-index: auto;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      color: white;
      text-decoration: none;
      
      &:after {
        content:"";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform-origin: left center;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const Login = styled.div `
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0,0,0,0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`

const LoginContainer = styled.div `
//shift to end
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: fixed;
  top: 48px;
  right: 15px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
