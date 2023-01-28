import Button from '@components/button';
import { ID_GUIDELINES } from '@constants/declaration.js';
import React, { useState } from 'react';
import styles from './index.module.scss';

const HeaderGuideline = ({ headerModel }) => {
  const { selectedHeader, setSelectedHeader } = headerModel;
  const elmHeader = Object.values(ID_GUIDELINES);
  return (
    <header className={styles.header}>
      <nav className={styles.navHeader}>
        {elmHeader.map((elm, idx) => (
          <Button
            fitContent
            key={idx}
            highlight={elm.toLowerCase() === selectedHeader}
            onClick={() => setSelectedHeader(elm.toLowerCase())}
          >
            {elm}
          </Button>
        ))}
      </nav>
    </header>
  )
}

export default HeaderGuideline;