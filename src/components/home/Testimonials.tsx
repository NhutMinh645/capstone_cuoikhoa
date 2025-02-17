import Slider from "react-slick";
import { useState, useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import user4 from "../../assets/user4.jpg";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import testimonial1 from "../../assets/videos/testimonial-1.mp4";
import testimonial2 from "../../assets/videos/testimonial-2.mp4";
import testimonial3 from "../../assets/videos/testimonial-3.mp4";
import testimonial4 from "../../assets/videos/testimonial-4.mp4";

const Testimonials: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const testimonials = [
    {
      id: 1,
      name: "Kay Kim",
      position: "Co-Founder",
      logo: logo1,
      quote: "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.",
      image: user1,
      video: testimonial1,
    },
    {
      id: 2,
      name: "Caitlin Tormey",
      position: "Chief Commercial Officer",
      logo: logo2,
      quote: "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day.",
      image: user2,
      video: testimonial2,
    },
    {
      id: 3,
      name: "Brighid Gannon (DNP, PMHNP-BC)",
      position: "Co-Founder",
      logo: logo3,
      quote: "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world.",
      image: user3,
      video: testimonial3,
    },
    {
      id: 4,
      name: "Tim and Dan Joo",
      position: "Co-Founders",
      logo: logo4,
      quote: "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does.",
      image: user4,
      video: testimonial4,
    },
  ];

  const handlePlayPause = (index: number) => {
   
    if (playingVideo === index) {
      setPlayingVideo(null);
      const video = videoRefs.current[index];
      if (video) {
        video.pause();
        video.currentTime = 0; 
        video.style.display = "none"; 
      }
    } else {
     
      setPlayingVideo(index);
      videoRefs.current.forEach((video, index) => {
        if (video && index !== index) {
          video.pause();
          video.currentTime = 0;
          video.style.display = "none";
        }
      });
  
     
      const video = videoRefs.current[index];
      if (video) {
        video.style.display = "block"; 
        video.play(); 
      }
    }
  };
  

  
  const handleAfterChange = (index: number) => {
    setPlayingVideo(null); 
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
        video.style.display = "none"; 
      }
    });
  };

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <ArrowButton className="left" onClick={onClick}>
        <LeftOutlined />
      </ArrowButton>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <ArrowButton className="right" onClick={onClick}>
        <RightOutlined />
      </ArrowButton>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    afterChange: handleAfterChange, // Dừng tất cả video khi chuyển slide
  };

  return (
    <Section>
      <Container>
        <SliderContainer>
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <TestimonialCard key={item.id}>
                <Media>
                  {playingVideo === index ? (
                    <Video
                      ref={(el) => (videoRefs.current[index] = el)} // Gán tham chiếu video
                      src={item.video}
                      controls
                      autoPlay
                      onEnded={() => setPlayingVideo(null)} // Dừng video khi kết thúc
                    />
                  ) : (
                    <Thumbnail onClick={() => handlePlayPause(index)}>
                      <img src={item.image} alt={item.name} />
                      {playingVideo !== index && <CustomPlayButton />}
                    </Thumbnail>
                  )}
                </Media>
                <Content>
                  <h4>
                    {item.name}, {item.position} | <CompanyLogo src={item.logo} alt="Company Logo" />
                  </h4>
                  <p>{item.quote}</p>
                </Content>
              </TestimonialCard>
            ))}
          </Slider>
        </SliderContainer>
      </Container>
    </Section>
  );
};

export default Testimonials;






// Styled Components
const Section = styled.section`
  padding: 50px 100px;
  background-color: #fff;

  @media (max-width: 1024px) {
    padding: 40px 50px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
  


`;
const Container = styled.div`
 max-width: 1400px;
 margin: auto;
`

const SliderContainer = styled.div`
  .slick-slider {
    display: flex !important;
  }

  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    height: auto !important;
  }
`;


const TestimonialCard = styled.div`
  display: flex !important; 
  flex: 1;
  align-items: center;
  gap: 40px;
  padding: 20px;
  min-height: 300px;
  width: 100% !important; 
  max-width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  &.slick-slide {
    display: flex !important; 
    justify-content: center;
    align-items: center;
    height: auto !important;
  }
`;

const Media = styled.div`
  flex: 1;
  min-width: 300px;
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const Thumbnail = styled.div`
  position: relative;
  cursor: pointer;
  display: flex !important; 
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    border-radius: 10px;
    display: flex !important;
  }
`;

const CompanyLogo = styled.img`
  height: 35px;
  object-fit: contain;
`;


const CustomPlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: url(https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/desktop-play-button.c1196d6.png)
    no-repeat center;
  background-size: contain;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  transition: transform 0.2s ease, opacity 0.3s ease;
  display: block;  
  
  &:hover {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
  &:focus,
  &:active {
    outline: none;
    border: none;
    box-shadow: none;
  }
`;


const Video = styled.video`
  width: 100%;
  border-radius: 10px;
`;

const Content = styled.div`

  flex: 1;
  text-align: left;

  h4 {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: normal;
    color: #6c757d;
    margin-bottom: 8px;

    span {
      font-weight: bold;
      color: #000;
      margin-left: 8px;
    }
  }

  p {
    font-style: italic;
    font-size: 28px;
    color: #014d00;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 16px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  color: black;
  font-size: 20px;
  border: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%; 
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
  }

  &.slick-disabled {
    opacity: 1 !important; 
    cursor: pointer !important;
  }

  &.left {
    left: -60px;
  }

  &.right {
    right: -60px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;


