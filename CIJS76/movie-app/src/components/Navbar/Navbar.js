import NetflixLogo from "../../assets/images/Netflix-logo-red-black-png.png";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import { useState } from "react";
import { useScrollY } from "../hooks";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const [scrollY] = useScrollY();
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
    keywords.length > 0
      ? navigate(`search?keywords=${keywords.trim()}`)
      : navigate("/");
  };

  const goHome = () => {
    navigate("/");
    setKeywords("");
  };
  return (
    <Navigation
      style={
        scrollY < 50
          ? { backgroundColor: " transparent" }
          : { backgroundColor: " var(--color-backgruond)" }
      }
    >
      <div className="navContainer">
        <div className="Logo" onClick={goHome}>
          <img src={NetflixLogo} alt="" />
        </div>
        <div className="navSearch">
          <MdSearch className="iconSearch" />
          <input
            type="text"
            placeholder="Input title, genres, people"
            onChange={handleChangeInput}
            value={keywords}
          />
        </div>
      </div>
    </Navigation>
  );
};

export default Navbar;

const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  transition-timing-function: ease-in;
  transition: all 1s;
  z-index: 10;
  @media only screen and (max-width: 600px) {
    height: 100px;
  }

  .navContainer {
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    height: 100% @media only screen and (max-width: 600px) {
      flex-direction: column;
    }

    .Logo {
      width: 120px;
      img {
        width: 100%;
      }

      cursor: pointer;
    }

    .navSearch {
      color: var(--color-white);
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;

      &:hover .iconSearch {
        color: var(--color-white);
      }
      .iconSearch {
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: translateX(24px) translateY(10px);
        color: #bbb;
      }

      input {
        font-size: 14px;
        border: 1px solid #fff;
        color: white;
        outline: none;
        width: 0;
        padding: 10px;
        cursor: pointer;
        opacity: 0;
        background: var(--color-background);
        transition: width 0.5s;

        &: focus {
          padding-left: 26px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }
  }
`;
