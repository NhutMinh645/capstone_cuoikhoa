import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import JobListingPage from "../pages/JobListPage";
// import NotFoundPage from "../pages/NotFoundPage";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobs" element={<JobListingPage />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default RouterConfig;
