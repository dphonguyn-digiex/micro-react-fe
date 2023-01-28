import React from "react";
import { Route, Routes } from 'react-router-dom';
import ContentContainer from "./ContentContainer";

import { HomePage, MissingPage, LogoPage } from "./pages";
import HeaderModel from "@states/header";
import { GUIDELINES_INDEX, ID_ROUTES } from "@constants/declaration.js";

const GuidelinesContent = () => {
  const headerModel = new HeaderModel();
  const renderSubRoute = (parentPath) => {
    return (
      <Route
        path={parentPath}
        element={
          <ContentContainer
            headerModel={headerModel}
            baseUrl={ID_ROUTES.HOME}
          />
        }
      >
        <Route index path={ID_ROUTES.HOME} element={<HomePage headerModel={headerModel} />} />
        <Route index path={ID_ROUTES.LOGO} element={<LogoPage headerModel={headerModel} />} />
        <Route path="*" element={<MissingPage />} />
      </Route>
    )
  }

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* this route is for standalone */}
          {renderSubRoute("/")}
          {/* this route is for Micro-FE */}
          {renderSubRoute(`/${GUIDELINES_INDEX}`)}
        </Routes>
      </React.Suspense>
    </React.Fragment>
  )
}

export default GuidelinesContent;
