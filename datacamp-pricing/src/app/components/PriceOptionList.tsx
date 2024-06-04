'use client';
import React, { FunctionComponent } from 'react';
import styles from '../css/price-option-list.module.css';
import { joinClasses } from '../utils/style-utils';
import PriceOption from './PriceOption';
import {
  BasicPlanOptions,
  PremiumPlanOption,
  TeamPlanOption,
  EnterprisePlanOption,
} from '../const/PlanOptions';

type PriceOptionListProps = {
  isYearlyPeriodicity: boolean;
  currency: string;
};
const PriceOptionList: FunctionComponent<PriceOptionListProps> = ({
  isYearlyPeriodicity,
  currency,
}) => {
  const yearlyMultiplier = isYearlyPeriodicity ? 1 : 3;
  return (
    <div className={styles.priceOptionList}>
      <PriceOption
        title={'basic'}
        subTitle={'Limited Access'}
        priceInUSD={0 * yearlyMultiplier}
        currency={currency}
        buttonText='Get Started'
        featureList={BasicPlanOptions}
      />
      <PriceOption
        title={'premium'}
        subTitle={'For Individuals'}
        priceInUSD={25 * yearlyMultiplier}
        currency={currency}
        buttonText='Subscribe now'
        isHighlighted
        isBestValue
        featureList={PremiumPlanOption}
      />
      <PriceOption
        title={'teams'}
        subTitle={'For teams of 2 and up'}
        priceInUSD={25 * yearlyMultiplier}
        currency={currency}
        buttonText='Set Up a Team'
        isBestValue
        includesPreviousOptionText='Everything in Premium plus:'
        featureList={TeamPlanOption}
      />
      <PriceOption
        title={'enterprise'}
        subTitle={'Bespoke Solutions'}
        priceInUSD={-1 * yearlyMultiplier}
        currency={currency}
        buttonText='Request a Demo'
        includesPreviousOptionText='Everything in Teams plus:'
        featureList={EnterprisePlanOption}
      />
    </div>
  );
};

export default PriceOptionList;
