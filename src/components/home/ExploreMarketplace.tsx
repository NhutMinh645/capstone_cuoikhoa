import styled from "styled-components";
import { Link } from "react-router-dom";
import graphicsIcon from "../../assets/icons/graphics.svg";
import marketingIcon from "../../assets/icons/marketing.svg";
import writingIcon from "../../assets/icons/writing.svg";
import videoIcon from "../../assets/icons/video.svg";
import musicIcon from "../../assets/icons/music.svg";
import techIcon from "../../assets/icons/tech.svg";
import businessIcon from "../../assets/icons/business.svg";
import lifestyleIcon from "../../assets/icons/lifestyle.svg";
import dataIcon from "../../assets/icons/data.svg";

const categories = [
  { id: 1, name: "Graphics & Design", icon: graphicsIcon, link: "/categories/graphics-design" },
  { id: 2, name: "Digital Marketing", icon: marketingIcon, link: "/categories/digital-marketing" },
  { id: 3, name: "Writing & Translation", icon: writingIcon, link: "/categories/writing-translation" },
  { id: 4, name: "Video & Animation", icon: videoIcon, link: "/categories/video-animation" },
  { id: 5, name: "Music & Audio", icon: musicIcon, link: "/categories/music-audio" },
  { id: 6, name: "Programming & Tech", icon: techIcon, link: "/categories/programming-tech" },
  { id: 7, name: "Business", icon: businessIcon, link: "/categories/business" },
  { id: 8, name: "Lifestyle", icon: lifestyleIcon, link: "/categories/lifestyle" },
  { id: 9, name: "Data", icon: dataIcon, link: "/categories/data" },
];

const ExploreMarketplace = () => {
  return (
    <Section>
      <Container>
        <Title>Explore the Marketplace</Title>
        <CategoryList>
          <TopRow>
            {categories.slice(0, 6).map((category) => (
              <CategoryItem key={category.id}>
                <CategoryCard to={category.link}>
                  <CategoryIcon src={category.icon} alt={category.name} />
                  <Underline />
                  <CategoryName>{category.name}</CategoryName>
                </CategoryCard>
              </CategoryItem>
            ))}
          </TopRow>
          <BottomRow>
            {categories.slice(6).map((category) => (
              <CategoryItem key={category.id}>
                <CategoryCard to={category.link}>
                  <CategoryIcon src={category.icon} alt={category.name} />
                  <Underline />
                  <CategoryName>{category.name}</CategoryName>
                </CategoryCard>
              </CategoryItem>
            ))}
          </BottomRow>
        </CategoryList>
      </Container>
    </Section>
  );
};

export default ExploreMarketplace;

// Styled Components
const Section = styled.section`
  padding: 60px 100px;
  text-align: center;
  background: #ffffff;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;
const Container = styled.div`
  max-width: 1400px;
  margin: auto;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;
const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin: 60px 0 40px;
  text-align: left;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TopRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin-bottom: 20px;
`;

const BottomRow = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
`;

const CategoryItem = styled.li`
  flex: 1 1 16%;
  max-width: 16%;
  display: flex;
  justify-content: center;
  text-align: center;

  @media (max-width: 1024px) {
    flex: 1 1 25%;
    max-width: 25%;
  }

  @media (max-width: 768px) {
    flex: 1 1 45%;
    max-width: 45%;
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const Underline = styled.div`
  width: 50px;
  height: 2px;
  background: lightgray;
  margin-top: 5px;
  transition: transform 0.3s ease, background 0.3s ease;
  transform-origin: center;
`;

const CategoryCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
  position: relative;
  margin-top: 56px;

  &:hover ${Underline} {
    background: green;
    transform: scaleX(1.5);
    width: 60px;
  }
   @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const CategoryIcon = styled.img`
  display: block;
  height: 48px;
  margin: 0 auto 15px;
  width: 48px;

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const CategoryName = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
