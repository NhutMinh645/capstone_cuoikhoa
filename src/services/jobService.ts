import axios from "axios";

const API_URL = "https://fiverrnew.cybersoft.edu.vn/api/cong-viec";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MyIsIkhldEhhblN0cmluZyI6IjAzLzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0ODkwODgwMDAwMCIsIm5iZiI6MTcyMTkyNjgwMCwiZXhwIjoxNzQ5MDU2NDAwfQ.4vXhg2MxiO2LMiVclRYdrEmoivaG2QbYXjyqWf9mxGk";


export const fetchJobList = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Accept: "application/json",
        tokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
    return response.data.content; 
  } catch (error) {
    console.error("Lỗi khi gọi API danh sách công việc:", error);
    throw error;
  }
};
