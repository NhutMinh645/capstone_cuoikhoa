import React from "react";
import styled from "styled-components";

interface JobCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
}

const JobCard: React.FC<JobCardProps> = ({ id, image, title, price }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Details>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Details>
    </Card>
  );
};

export default JobCard;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 15px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Price = styled.p`
  font-size: 16px;
  color: #1dbf73;
  font-weight: bold;
`;
