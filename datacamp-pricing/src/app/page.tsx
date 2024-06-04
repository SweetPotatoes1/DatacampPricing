'use client';
import { useCallback, useState } from 'react';
import PriceOptionList from './components/PriceOptionList';
import styles from './css/page.module.css';
import YearlyToggle from './components/YearlyToggle';

export default function Home() {
  const [isYearlyPeriodicity, setIsYearlyPeriodicity] = useState(true);
  const toggleYearlyPeriodicity = useCallback(
    () => setIsYearlyPeriodicity(!isYearlyPeriodicity),
    [isYearlyPeriodicity, setIsYearlyPeriodicity]
  );
  return (
    <body style={{ backgroundColor: '#05192D' }}>
      <main className='p-24'>
        <div className={styles.container}>
          <YearlyToggle
            isYearlyPeriodicity={isYearlyPeriodicity}
            toggleYearlyPeriodicity={toggleYearlyPeriodicity}
          ></YearlyToggle>
          <PriceOptionList />
        </div>
      </main>
    </body>
  );
}
