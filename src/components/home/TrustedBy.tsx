import styled from "styled-components";
import FacebookLogo from "../../assets/trustby/fb.png";
import GoogleLogo from "../../assets/trustby/google.png";
import NetflixLogo from "../../assets/trustby/netflix.png";
import PaypalLogo from "../../assets/trustby/paypal.png";
import PGLogo from "../../assets/trustby/pg.png";

const TrustedByWrapper = styled.div`
  width: 100%;
  background: #fafafa;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-size: 14px;
  color: #b0b0b0;
  font-weight: 600;
  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
`;

const Logo = styled.img`
  height: 70px;
 
  object-fit: contain;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
  
  &:hover {
    opacity: 1;
  }
  @media (max-width: 1024px) {
    height: 60px;
  }

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const TrustedBySection = () => {
  return (
    <TrustedByWrapper>
      <span>Trusted by:</span>
      <Logo src={FacebookLogo} alt="Facebook" />
      <Logo src={GoogleLogo} alt="Google" />
      <Logo src={NetflixLogo} alt="Netflix" />
      <Logo src={PaypalLogo} alt="Paypal" />
      <Logo src={PGLogo} alt="P&G" />
    </TrustedByWrapper>
  );
};

export default TrustedBySection;
