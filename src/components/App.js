import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./Layout";

const TweetsPage = lazy(() => import("../pages/TweetsPage"));
const HomePage = lazy(() => import("../pages/HomePage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/tweets" element={<TweetsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
