import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { jobApi } from "../../api/jobApi"; 
import JobCard from "./JobCard";
import { Pagination, Select, Input } from "antd";

const { Option } = Select;

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await jobApi.getJobs();
        setJobs(response.data);
        setFilteredJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    let filtered = jobs.filter((job) =>
      job.tenCongViec.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOption === "priceAsc") {
      filtered.sort((a, b) => a.giaTien - b.giaTien);
    } else if (sortOption === "priceDesc") {
      filtered.sort((a, b) => b.giaTien - a.giaTien);
    }

    setFilteredJobs(filtered);
  }, [searchTerm, sortOption, jobs]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Filters>
        <Input
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select value={sortOption} onChange={setSortOption}>
          <Option value="default">Sort by</Option>
          <Option value="priceAsc">Price: Low to High</Option>
          <Option value="priceDesc">Price: High to Low</Option>
        </Select>
      </Filters>
      <JobGrid>
        {filteredJobs.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            image={job.hinhAnh}
            title={job.tenCongViec}
            price={job.giaTien}
          />
        ))}
      </JobGrid>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={filteredJobs.length}
        onChange={handlePageChange}
      />
    </Container>
  );
};

export default JobList;

const Container = styled.div`
  padding: 40px;
`;

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const JobGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;
