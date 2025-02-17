const API_URL = "https://fiverrnew.cybersoft.edu.vn/api/cong-viec";

export const fetchJobs = async () => {
  try {
    const response = await fetch(`${API_URL}/phan-trang-tim-kiem?page=1&pageSize=10`, {
      headers: {
        accept: "application/json",
        tokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MyIsIkhldEhhblN0cmluZyI6IjAzLzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0ODkwODgwMDAwMCIsIm5iZiI6MTcyMTkyNjgwMCwiZXhwIjoxNzQ5MDU2NDAwfQ.4vXhg2MxiO2LMiVclRYdrEmoivaG2QbYXjyqWf9mxGk"
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const data = await response.json();
    return data.content || [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};
