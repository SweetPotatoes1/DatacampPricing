'use client';
import { useCallback, useState } from 'react';
import PriceOptionList from './components/PriceOptionList';
import styles from './css/page.module.css';
import YearlyToggle from './components/YearlyToggle';

export default function Home() {
  const [isYearlyPeriodicity, setIsYearlyPeriodicity] = useState(true);
  const [currency, setCurrency] = useState('USD');
  const changeCurrency = useCallback(
    (newCurrency: string) => setCurrency(newCurrency),
    []
  );
  const toggleYearlyPeriodicity = useCallback(
    () => setIsYearlyPeriodicity(!isYearlyPeriodicity),
    [isYearlyPeriodicity, setIsYearlyPeriodicity]
  );
  return (
    <body style={{ backgroundColor: '#05192D' }}>
      <main className='p-24'>
        <div className={styles.container}>
          <YearlyToggle
            currency={currency}
            changeCurrency={changeCurrency}
            isYearlyPeriodicity={isYearlyPeriodicity}
            toggleYearlyPeriodicity={toggleYearlyPeriodicity}
          ></YearlyToggle>
          <PriceOptionList
            isYearlyPeriodicity={isYearlyPeriodicity}
            currency={currency}
          />
        </div>
      </main>
    </body>
  );
}
