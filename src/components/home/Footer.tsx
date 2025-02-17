import styled from "styled-components";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaPinterest, FaInstagram, FaGlobe } from "react-icons/fa";
import footerLogo from "../../assets/footerlogo.svg";
import personIcon from "../../assets/person.svg";




const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterItem>
          <FooterTitle>Categories</FooterTitle>
          <FooterList>
            <li><a href="#">Graphics & Design</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Writing & Translation</a></li>
            <li><a href="#">Video & Animation</a></li>
            <li><a href="#">Music & Audio</a></li>
            <li><a href="#">Programming & Tech</a></li>
            <li><a href="#">Data</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Lifestyle</a></li>
            <li><a href="#">Sitemap</a></li>
          </FooterList>
        </FooterItem>
        <FooterItem>
          <FooterTitle>About</FooterTitle>
          <FooterList>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press & News</a></li>
            <li><a href="#">Partnerships</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Intellectual Property Claims</a></li>
            <li><a href="#">Investor Relations</a></li>
          </FooterList>
        </FooterItem>
        <FooterItem>
          <FooterTitle>Support</FooterTitle>
          <FooterList>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Trust & Safety</a></li>
            <li><a href="#">Selling on Fiverr</a></li>
            <li><a href="#">Buying on Fiverr</a></li>
          </FooterList>
        </FooterItem>
        <FooterItem>
          <FooterTitle>Community</FooterTitle>
          <FooterList>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Community Standards</a></li>
            <li><a href="#">Podcast</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Invite a Friend</a></li>
            <li><a href="#">Become a Seller</a></li>
          </FooterList>
        </FooterItem>
        <FooterItem>
          <FooterTitle>More From Fiverr</FooterTitle>
          <FooterList>
            <li><a href="#">Fiverr Business</a></li>
            <li><a href="#">Fiverr Pro</a></li>
            <li><a href="#">Fiverr Logo Maker</a></li>
            <li><a href="#">Fiverr Guides</a></li>
            <li><a href="#">Get Inspired</a></li>
            <li><a href="#">Fiverr Select</a></li>
            <li><a href="#">ClearVoice</a></li>
            <li><a href="#">Working Not Working</a></li>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Fiverr Workspace</a></li>
            <li><a href="#">Fiverr Logo Maker</a></li>
          </FooterList>
        </FooterItem>
      </FooterTop>

      <FooterBottom>
        <FooterLeft>
          <Logo src={footerLogo} alt="Fiverr Logo" />
          <span>© Fiverr International Ltd. 2022</span>
        </FooterLeft>
        <FooterRight>
          <SocialIcons>
            <FaTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaPinterest />
            <FaInstagram />
          </SocialIcons>
          <Options>
            <Language><FaGlobe /> English</Language>
            <Currency>US$ USD</Currency>
            <UserIcon>
  <img src={personIcon} alt="User Icon" />
</UserIcon>

          
          </Options>
        </FooterRight>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #f7f7f7;
  padding: 50px 100px;
  color: #404145;
  font-size: 14px;
  border-top: 1px solid #ddd; 
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: auto;
  padding-bottom: 20px;
  flex-wrap: wrap;
  padding-top: 20px; 
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;




const FooterItem = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterTitle = styled.h6`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 16px;
`;
const FooterList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    padding-bottom: 16px;
  }

  a {
    text-decoration: none;
    color: #4f4f4f;
    transition: color 0.3s;

    &:hover {
      color: #1dbf73;
    }
  }
`;



const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: auto;
  padding-top: 10px;
  flex-wrap: wrap;
  border-top: 1px solid #ddd; 
  padding-top: 20px; 

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
const FooterLeft = styled.div`
display: flex;
align-items: center;
gap: 10px;
span {
  font-size: 13px;
  color: #b0b0b0;
}
`;
const Logo = styled.img`
  height: 24px;
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 18px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }

  svg {
    color: #b0b0b0;
    transition: color 0.3s;

    &:hover {
      color: #1dbf73;
    }
  }
`;
const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
  color: #b0b0b0;
`;
const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  svg {
    font-size: 16px;
  }
`;
const Currency = styled.div``;

const UserIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  img {
    width: 16px;
    height: 16px;
    filter: brightness(0) saturate(100%) invert(58%) sepia(0%) saturate(0%) hue-rotate(184deg) brightness(95%) contrast(87%);
    transition: filter 0.3s ease-in-out;
  }

  &:hover {
    border-color: #1dbf73;

    img {
      filter: brightness(0) saturate(100%) invert(50%) sepia(75%) saturate(500%) hue-rotate(90deg) brightness(95%) contrast(100%);
    }
  }
`;


