// services/apiService.ts
const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MyIsIkhldEhhblN0cmluZyI6IjAzLzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0ODkwODgwMDAwMCIsIm5iZiI6MTcyMTkyNjgwMCwiZXhwIjoxNzQ5MDU2NDAwfQ.4vXhg2MxiO2LMiVclRYdrEmoivaG2QbYXjyqWf9mxGk";

const API_URL = "https://fiverrnew.cybersoft.edu.vn/api/cong-viec";

const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/lay-menu-loai-cong-viec`, {
      headers: {
        accept: "application/json",
        tokenCybersoft: API_TOKEN,
      },
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data.content || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

const fetchSubCategories = async (categoryId: string) => {
  try {
    const response = await fetch(`${API_URL}/lay-chi-tiet-loai-cong-viec/${categoryId}`, {
      headers: {
        accept: "application/json",
        tokenCybersoft: API_TOKEN,
      },
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    if (Array.isArray(data.content) && data.content.length > 0) {
      return data.content[0].dsNhomChiTietLoai || [];
    } else {
      console.warn(`Invalid data format for category ${categoryId}:`, data.content);
      return [];
    }
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    return [];
  }
};

export { fetchCategories, fetchSubCategories };
