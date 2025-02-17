import React from "react";
import styled from "styled-components";
import JobList from "../components/jobs/JobList";

const JobListPage: React.FC = () => {
  return (
    <PageContainer>
      <Title>Job Listings</Title>
      <JobList />
    </PageContainer>
  );
};

export default JobListPage;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;
