import { useState, useEffect } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import Banner1 from "../../assets/1.png";
import Banner2 from "../../assets/2.png";
import Banner3 from "../../assets/3.png";
import Banner4 from "../../assets/4.png";
import Banner5 from "../../assets/5.png";

const banners = [Banner1, Banner2, Banner3, Banner4, Banner5];

const keywords = ["Website Design", "WordPress", "Logo Design", "Video Editing"];
const placeholders = ["Try 'building mobile app'", "Try 'logo design'", "Try 'SEO expert'"];

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  text-align: center;

  @media (max-width: 1024px) {
    height: 600px;
  }
  @media (max-width: 768px) {
    height: 500px;
    padding: 20px;
  }
`;

const BannerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const BannerImage = styled.img<{ $active: boolean }>`
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;




const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: left;
  max-width: 600px;
margin-right: 50%;

   @media (max-width: 768px) {
    margin-right: 0;
    text-align: center;
    width: 100%;
  }
`;

const Title = styled.h1`
  
    font-size: 47px;
    font-weight: 600;
    line-height: 1.2;
  margin-bottom: 15px;
  span {
    font-style: italic;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SearchBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledInput = styled(Input)`
  flex: 1;
  height: 50px;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  border: none;

  @media (max-width: 768px) {
    border-radius: 5px;
    width: 100%;
  }
  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

const StyledButton = styled(Button)`
  background-color: #1dbf73;
  color: white;
  font-weight: bold;
  border: none;
  height: 50px;
  padding: 0 20px;
  border-radius: 0 5px 5px 0;
  &:hover {
    background-color: #19a463;
  }
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 5px;
    margin-top: 10px;
  }
`;

const KeywordsWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const KeywordTag = styled.span`
  background: transparent ;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 2px 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    color: black;
  }
`;

const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const placeholderInterval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 2500);

    return () => clearInterval(placeholderInterval);
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/jobs/search/${searchTerm}`);
    }
  };


  return (
    <HeroWrapper>
      <BannerWrapper>
        {banners.map((banner, index) => (
       <BannerImage key={index} src={banner} alt="Banner" $active={index === currentBanner} />
        ))}
      </BannerWrapper>
      <ContentWrapper>
        <Title>
          Find the perfect <span>freelance</span> services for your business
        </Title>
        <SearchBox>
        <StyledInput
            placeholder={placeholders[placeholderIndex]}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onPressEnter={handleSearch}
          />
          <StyledButton onClick={handleSearch}>Search</StyledButton>
        </SearchBox>
        <KeywordsWrapper>
          <span style={{ color: "#fff", fontWeight: "bold" }}>Popular:</span>
          {keywords.map((keyword, index) => (
            <KeywordTag key={index}>{keyword}</KeywordTag>
          ))}
        </KeywordsWrapper>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default HeroSection;
