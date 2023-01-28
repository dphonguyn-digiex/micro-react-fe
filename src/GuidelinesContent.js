import React from "react";
import { Route, Routes } from 'react-router-dom';
import ContentContainer from "./ContentContainer";

import { HomePage, MissingPage } from "./pages";
import HeaderModel from "@states/header";
import { ID_GUIDELINES } from "@constants/declaration.js";

const GuidelinesContent = () => {
  const headerModel = new HeaderModel();
  const renderSubRoute = (parentPath) => {
    return (
      <Route path={parentPath}
        element={
          <ContentContainer
            headerModel={headerModel}
            baseUrl={ID_GUIDELINES.HOME}
          />
        }
      >
        <Route index path={ID_GUIDELINES.HOME} element={<HomePage headerModel={headerModel} />} />
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
          {renderSubRoute(`/${ID_GUIDELINES.INDEX}`)}
        </Routes>
      </React.Suspense>
    </React.Fragment>
  )
}

export default GuidelinesContent;
