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

const PriceOptionList: FunctionComponent = () => {
  return (
    <div className={styles.priceOptionList}>
      <PriceOption
        title={'basic'}
        subTitle={'Limited Access'}
        priceInUSD={'Free'}
        buttonText='Get Started'
        featureList={BasicPlanOptions}
      />
      <PriceOption
        title={'premium'}
        subTitle={'For Individuals'}
        priceInUSD={'$25'}
        buttonText='Subscribe now'
        isHighlighted
        isBestValue
        featureList={PremiumPlanOption}
      />
      <PriceOption
        title={'teams'}
        subTitle={'For teams of 2 and up'}
        priceInUSD={'$25'}
        buttonText='Set Up a Team'
        isBestValue
        includesPreviousOptionText='Everything in Premium plus:'
        featureList={TeamPlanOption}
      />
      <PriceOption
        title={'enterprise'}
        subTitle={'Bespoke Solutions'}
        priceInUSD={'Contact sales for pricing'}
        buttonText='Request a Demo'
        includesPreviousOptionText='Everything in Teams plus:'
        featureList={EnterprisePlanOption}
      />
    </div>
  );
};

export default PriceOptionList;
