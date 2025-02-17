import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import {  GlobalOutlined } from "@ant-design/icons";
import { Link , useNavigate } from "react-router-dom";
import logoWhite from "../../assets/logo-white.svg";
import logoBlack from "../../assets/logo-black.svg";
import CategoriesMenu from "./CategoriesMenu";



const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ $isScrolled }) => ($isScrolled ? "white" : "transparent")};
  box-shadow: ${({ $isScrolled }) => ($isScrolled ? "0px 2px 10px rgba(0, 0, 0, 0.1)" : "none")};
 
  transition: background 0.3s, box-shadow 0.3s;
  z-index: 1000;
  font-size: 16px;
  padding: 13px 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: 1024px) {
    padding: 10px 50px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    justify-content: space-between;
  }
`;

const Logo = styled(Link)`
  img {
    height: 32px;
    transition: opacity 0.3s ease;
  }
  @media (max-width: 768px) {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const SearchContainer = styled.div<{ $isScrolled: boolean }>`
  display: ${({ $isScrolled }) => ($isScrolled ? "flex" : "none")};
  align-items: center;
  border: 1px solid #e4e5e7;
  border-radius: 4px;
  overflow: hidden;
  flex: 0.5;
  max-width: 350px;
  margin: 0;
  background: white;

  @media (max-width: 768px) {
    max-width: 100%;
    flex: 1;
  }

  input {
    border: none;
    padding: 12px 15px;
    outline: none;
    flex: 1;
    font-size: 14px;
    color: #222325;
  }
  button {
    background: #1dbf73;
    color: white;
    border: none;
    padding: 23px 25px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    border-radius: 0;
    transition: background 0.3s ease;
    &:hover {
      background: #19a463;
    }
  }
`;

const NavLinks = styled.div<{ $isScrolled: boolean }>`
  display: flex;
  gap: 25px;
  font-size: 17px;
  align-items: center;
  font-weight: bold;
  margin-left: auto;

  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  a {
    text-decoration: none;
    color: ${({ $isScrolled }) => ($isScrolled ? "#74767e" : "white")};
    transition: color 0.3s ease;
    &:hover {
      color: #1dbf73;
    }
  }
`;

const JoinButton = styled(Link)`
  padding: 10px 20px;
  border: 1px solid #1dbf73;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  font-size: 17px;
  transition: background 0.3s ease, color 0.3s ease, border 0.3s ease;
  &:hover {
    border-color: #1dbf73;
    color: white;
  }
  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 14px;
  }
`;


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/jobs?search=${encodeURIComponent(searchTerm)}`);
    }
  };


  return (
   
      <>
        <HeaderContainer $isScrolled={isScrolled}>
          <Logo to="/">
            <img src={isScrolled ? logoBlack : logoWhite} alt="Fiverr Logo" />
          </Logo>
          <SearchContainer $isScrolled={isScrolled}>
        <Input
          placeholder="Find Services"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onPressEnter={handleSearch}
        />
        <Button onClick={handleSearch}>Search</Button>
      </SearchContainer>
          <NavLinks $isScrolled={isScrolled}>
            <Link to="/business">Fiverr Business</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/english">
              <GlobalOutlined />
              English
            </Link>
            <Link to="/usd">US$ USD</Link>
            <Link to="/seller">Become a Seller</Link>
            <Link to="/signin">Sign in</Link>
            <JoinButton to="/join">Join</JoinButton>
          </NavLinks>
        </HeaderContainer>
        {isScrolled && <CategoriesMenu />}
      </>
    );
    
  
};

export default Header;
