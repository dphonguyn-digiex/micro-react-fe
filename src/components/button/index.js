import { clsx } from '@utils';
import React from 'react';
import styles from './index.module.scss';

const Button = ({
  mode = 'BASE', 
  children = null,
  onClick = null,
  icon = null,
  fitContent = false,
  highlight = false
}) => {
  return (
    <div className={clsx(styles.button,
        mode === 'OUTLINED' && styles.outlinedButton,
        mode === 'TRANSPARENT' && styles.transparentButton,
        fitContent && styles.fitContent,
        highlight && styles.isHighlight
      )}
      onClick={onClick}>
      {icon && icon}
      <p>{children}</p>
    </div>
  )
}

export default Button;