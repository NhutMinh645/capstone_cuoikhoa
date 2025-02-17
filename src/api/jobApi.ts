import axios from "axios";

const API_URL = "https://fiverrnew.cybersoft.edu.vn/api";

export const jobApi = {
  getJobs: async () => {
    const response = await axios.get(`${API_URL}/cong-viec`);
    return response.data;
  },
};
