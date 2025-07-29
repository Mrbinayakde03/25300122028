import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import URLShortenerPage from "../pages/URLShortenerPage";
import RedirectPage from "../pages/RedirectPage";
import StatesPage from "../pages/StatesPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page: URL Shortener Form */}
        <Route path="/" element={<URLShortenerPage />} />

        {/* Shortened URL Redirection Page */}
        <Route path="/:shortcode" element={<RedirectPage />} />

        {/* Stats Page */}
        <Route path="/states/:shortcode" element={<StatesPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
