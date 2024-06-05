'use client';
import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from '../css/price-option-list.module.css';
import { joinClasses } from '../utils/style-utils';
import PriceOption from './PriceOption';
import {
  BasicPlanOptions,
  PremiumPlanOption,
  TeamPlanOption,
  EnterprisePlanOption,
} from '../const/PlanOptions';
import { API_REQUEST_URL } from '../const/ApiCredentials';
import { getFirstTwoDecimals } from '../utils/numberUtils';

type PriceOptionListProps = {
  isYearlyPeriodicity: boolean;
  currency: string;
};
const PriceOptionList: FunctionComponent<PriceOptionListProps> = ({
  isYearlyPeriodicity,
  currency,
}) => {
  let data: any;
  const [exchangeRates, setExchangeRates] = useState({} as any);
  const fetchExchangeRates = async () => {
    await fetch(API_REQUEST_URL)
      .then((response) => response.json())
      .then((data) => setExchangeRates(data.data));
  };
  useEffect(() => {
    fetchExchangeRates();
  }, []);
  const exchangeMultiplier =
    currency !== 'USD' && exchangeRates ? exchangeRates[`${currency}`] : 1;
  const yearlyMultiplier = isYearlyPeriodicity ? 1 : 3;

  return (
    <div className={styles.priceOptionList}>
      <PriceOption
        title={'basic'}
        subTitle={'Limited Access'}
        priceInUSD={0}
        currency={currency}
        isYearlyPeriodicity={isYearlyPeriodicity}
        buttonText='Get Started'
        featureList={BasicPlanOptions}
      />
      <PriceOption
        title={'premium'}
        subTitle={'For Individuals'}
        priceInUSD={Math.round(25 * yearlyMultiplier * exchangeMultiplier)}
        decimalPrice={getFirstTwoDecimals(
          25 * yearlyMultiplier * exchangeMultiplier
        )}
        currency={currency}
        isYearlyPeriodicity={isYearlyPeriodicity}
        buttonText='Subscribe now'
        isHighlighted
        isBestValue
        featureList={PremiumPlanOption}
      />
      <PriceOption
        title={'teams'}
        subTitle={'For teams of 2 and up'}
        priceInUSD={Math.round(25 * yearlyMultiplier * exchangeMultiplier)}
        decimalPrice={getFirstTwoDecimals(
          25 * yearlyMultiplier * exchangeMultiplier
        )}
        currency={currency}
        isYearlyPeriodicity={isYearlyPeriodicity}
        buttonText='Set Up a Team'
        isBestValue
        includesPreviousOptionText='Everything in Premium plus:'
        featureList={TeamPlanOption}
      />
      <PriceOption
        title={'enterprise'}
        subTitle={'Bespoke Solutions'}
        priceInUSD={-1}
        currency={currency}
        isYearlyPeriodicity={isYearlyPeriodicity}
        buttonText='Request a Demo'
        includesPreviousOptionText='Everything in Teams plus:'
        featureList={EnterprisePlanOption}
      />
    </div>
  );
};

export default PriceOptionList;
