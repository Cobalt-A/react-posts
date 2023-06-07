import React, { FC } from "react";
import MainLayout from "./layout/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

const App: FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
