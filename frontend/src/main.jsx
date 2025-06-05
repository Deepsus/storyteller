import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// React Router Dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout.jsx";
import Homepage from "./pages/Homepage.jsx";
import BrowsePage from "./pages/BrowsePage.jsx";
import PrivateLayout from "./pages/PrivateLayout.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import StoryDetailSingle from "./pages/StoryDetailSingle.jsx";
import StoryReader from "./pages/StoryReader.jsx";

// Pages Import

// @Public

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* @Public Page */}

        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Homepage />} />
          <Route path="browse" element={<BrowsePage />} />
          <Route path="/story/:id" element={<StoryDetailSingle />} />
          <Route path="/read/:id" element={<StoryReader />} />
        </Route>

        {/* @Private Page */}
        <Route path="/user" element={<PrivateLayout />}>
          <Route path="create" element={<CreatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
