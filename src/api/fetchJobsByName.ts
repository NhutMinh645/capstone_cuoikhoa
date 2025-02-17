import axios from "axios";



export const fetchJobsByName = async (searchTerm: string) => {
  try {
    const response = await axios.get(
      `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${searchTerm}`,
      {
        headers: {
          TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MyIsIkhldEhhblN0cmluZyI6IjAzLzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0ODkwODgwMDAwMCIsIm5iZiI6MTcyMTkyNjgwMCwiZXhwIjoxNzQ5MDU2NDAwfQ.4vXhg2MxiO2LMiVclRYdrEmoivaG2QbYXjyqWf9mxGk", // Đảm bảo token đúng
        },
      }
    );
    return response.data.content; // Kiểm tra nếu API trả về đúng format
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};
