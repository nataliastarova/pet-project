import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainPage } from "../../pages/MainPage/MainPage";
import { Header } from "../Header/Header";

import { MAIN_PAGE_ROUTE } from "../../constants/routes";

import "./App.pcss";

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path={MAIN_PAGE_ROUTE} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
