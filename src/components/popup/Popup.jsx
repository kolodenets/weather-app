import React from 'react';
import PropTypes from "prop-types";

import styles from './Popup.module.css'

const Popup = ({active, children}) => {
  return (
    <div className={active ? [styles.modal, styles.active].join(' ') : styles.modal}  >
      <div className={active ? [styles.modal__content, styles.active].join(' ') : styles.modal__content}>
        {children}
      </div>
    </div>
  );
};

Popup.propTypes = {
  active: PropTypes.any,
  children: PropTypes.object
};

export default Popup;