import { useState } from "react";
import styled from "styled-components";

// Import thumbnail video
import VideoThumbnail from "../../assets/video-thumbnail.jpg";

// Link video thực tế
const VIDEO_URL = "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7";

const SectionWrapper = styled.section`
  padding: 50px 100px;
  background: #F0FDF6;
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
 display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`

const LeftContent = styled.div`
  max-width: 45%;

  @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
  }
  h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 25px;
    color: #404145;
    line-height: 1.2;
  }
`;

const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    font-size: 18px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #404145;
    margin: 24px 0;
    @media (max-width: 1024px) {
    align-items: center;
  }
  }
  h6 {
    display: flex;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    color: black; 
  }
  span {
    font-weight: bold;
    font-size: 24px;
    margin-right: 12px;
    fill: rgb(122, 125, 133);
  }
  p {
    font-size: 16px;
    color: #555;
    line-height: 1.5;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    max-width: 600px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PlayButton = styled.button`
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

/* Modal Video */
const ModalOverlay = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const VideoModal = styled.div`
  width: 80%;
  max-width: 900px;
  position: relative;
  background: black;
  border-radius: 10px;
  overflow: hidden;
  iframe {
    width: 100%;
    height: 500px;
    border: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const TalentSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <SectionWrapper>
        <Container>

        <LeftContent>
          <h2>A whole world of freelance talent at your fingertips</h2>
           <BenefitList>
  <li>
    <h6>
      <span>
      <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg>
      </span>The best for every budget
      </h6>
    <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
  </li>

  <li>
    <h6><span>
    <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg>
      </span>Quality work done quickly</h6>
    <p>Find the right freelancer to begin working on your project within minutes.</p>
  </li>

  <li>
    <h6><span>
    <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg>
      </span>Protected payments, every time</h6>
    <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
  </li>

  <li>
    <h6><span>
    <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg>
      </span>24/7 support</h6>
    <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
  </li>
</BenefitList>

        </LeftContent>

      
        <VideoWrapper onClick={() => setIsPlaying(true)}>
          <img src={VideoThumbnail} alt="Video Thumbnail" />
          <PlayButton />
        </VideoWrapper>
        </Container>
      </SectionWrapper>

   
      <ModalOverlay show={isPlaying} onClick={() => setIsPlaying(false)}>
        <VideoModal onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setIsPlaying(false)}>✖</CloseButton>
          {isPlaying && (
            <iframe
              src={`${VIDEO_URL}?autoplay=1&mute=1`}
              title="Fiverr Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </VideoModal>
      </ModalOverlay>
    </>
  );
};

export default TalentSection;