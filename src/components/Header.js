import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return ( 
    <Nav>
      <Logo src = "/images/logo.svg"/>
      <NavMenu>
        <Link to="/">
          <img src = "/images/home-icon.svg" alt = "Home icon"></img>
          <span>HOME</span>
        </Link>
        <Link to="/">
          <img src = "/images/search-icon.svg" alt = "Search icon"></img>
          <span>SEARCH</span>
        </Link>
        <Link to="/"a>
          <img src = "/images/watchlist-icon.svg" alt = "WatchList icon"></img>
          <span>WATCHLIST</span>
        </Link>
        <Link to="/">
          <img src = "/images/original-icon.svg" alt = "Originals icon"></img>
          <span>ORIGINALS</span>
        </Link>
        <Link to="/">
          <img src = "/images/movie-icon.svg" alt = "Movie icon"></img>
          <span>MOVIES</span>
        </Link>
        <Link to="/">
          <img src = "/images/series-icon.svg" alt = "Series icon"></img>
          <span>SERIES</span>
        </Link>
      </NavMenu>
      <UserProfile src = "https://media-exp3.licdn.com/dms/image/C5603AQFl8S3jchuyoQ/profile-displayphoto-shrink_100_100/0/1565099021456?e=1628726400&v=beta&t=FhIDwfZ-bVPvzU5W88ao4GycEJJ24wN8KLfqqpmf_Ts">
      </UserProfile>

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

const UserProfile = styled.img `
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
`