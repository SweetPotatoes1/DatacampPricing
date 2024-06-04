import React, { FunctionComponent } from 'react';
import styles from '../css/toggle-button.module.css';
import { joinClasses } from '../utils/style-utils';

type YearlyToggleProps = {
  isYearlyPeriodicity: boolean;
  toggleYearlyPeriodicity: (...args: any) => void;
};
const YearlyToggle: FunctionComponent<YearlyToggleProps> = ({
  isYearlyPeriodicity,
  toggleYearlyPeriodicity,
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Save with Yearly</span>
      <button
        onClick={toggleYearlyPeriodicity}
        className={
          isYearlyPeriodicity
            ? joinClasses(styles.toggleButton, styles.toggled)
            : styles.toggleButton
        }
      ></button>
      <div
        onClick={toggleYearlyPeriodicity}
        className={
          isYearlyPeriodicity
            ? joinClasses(styles.thumb, styles.toggled)
            : styles.thumb
        }
      ></div>
      <select id='currency-selector' className={styles.select}>
        <option value='USD'>$ USD</option>
        <option value='GBP'>£ GBP</option>
        <option value='CAD'>$ CAD</option>
        <option value='AUD'>$ AUD</option>
        <option value='EUR'>€ EUR</option>
        <option value='BRL'>$ BRL</option>
        <option value='MXN'>$ MXN</option>
        <option value='INR'>₹ INR</option>
      </select>
    </div>
  );
};

export default YearlyToggle;
