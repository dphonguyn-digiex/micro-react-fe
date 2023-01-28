import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react';
import HeaderGuideline from '@components/common/header';
import styles from "./index.module.scss";

const ContentContainer = observer(({ headerModel }) => {
  const navigate = useNavigate();
  const { selectedHeader } = headerModel;

  const contentPages = (path) => {
    navigate(path);
  };

  useEffect(() => {
    contentPages(selectedHeader);
  }, [selectedHeader]);

  return (
    <div className={styles.contentMainContainer}>
      <HeaderGuideline headerModel={headerModel}/>
      <Outlet headerModel={headerModel}/>
    </div>
  )
})

export default ContentContainer;
