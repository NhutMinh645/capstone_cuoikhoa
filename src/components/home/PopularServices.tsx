import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import crs1 from "../../assets/popular/crs1.png";
import crs2 from "../../assets/popular/crs2.png";
import crs3 from "../../assets/popular/crs3.png";
import crs4 from "../../assets/popular/crs4.png";
import crs5 from "../../assets/popular/crs5.png";
import crs6 from "../../assets/popular/crs6.png";
import crs7 from "../../assets/popular/crs7.png";
import crs8 from "../../assets/popular/crs8.png";
import crs9 from "../../assets/popular/crs9.png";
import crs10 from "../../assets/popular/crs10.png";

const Section = styled.div`
padding: 50px 100px;
  background: #fff;
  position: relative;
`
const Container = styled.section`
  max-width: 1400px;
  margin: auto;

  @media (max-width: 1024px) {
    padding: 40px 50px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    padding: 10px 0;
  }

  .slick-track {
    display: flex;
    align-items: center;
    gap: 20px; 
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }

  .slick-slide img {
    width: 246px;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .slick-slide:hover img {
    transform: scale(1.05);
    opacity: 0.9;
  }

  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 50%;
    z-index: 10;
    transition: background 0.3s ease;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  
  .slick-prev {
    left: -60px !important; 
  }

  .slick-next {
    right: -60px !important; 
  }
  @media (max-width: 1024px) {
    .slick-slide img {
      width: 200px;
      height: 250px;
    }
    .slick-prev, .slick-next {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 768px) {
    .slick-slide img {
      width: 150px;
      height: 200px;
    }
    .slick-prev, .slick-next {
      display: none;
    }
  }
`;


const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 246px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const PopularProfessionalServices = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [crs1, crs2, crs3, crs4, crs5, crs6, crs7, crs8, crs9, crs10];

  return (
    <Section>
    <Container>
      <Title>Popular Professional Services</Title>
      <StyledSlider {...settings}>
        {images.map((image, index) => (
          <ImageContainer key={index} className="slick-slide">
            <Image src={image} alt={`Popular service ${index + 1}`} />
          </ImageContainer>
        ))}
      </StyledSlider>
    </Container>
    </Section>
  );
};


export default PopularProfessionalServices;
