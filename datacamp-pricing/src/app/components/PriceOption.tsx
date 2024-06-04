import React, { FunctionComponent, useEffect } from 'react';
import styles from '../css/price-option.module.css';
import { joinClasses } from '../utils/style-utils';
import { currencyToSymbol } from '../const/CurrencyConst';

type PricingOptionProps = {
  title: string;
  subTitle: string;
  isHighlighted?: boolean;
  isBestValue?: boolean;
  linkAtTheBottom?: string;
  includesPreviousOptionText?: string;
  priceInUSD: number;
  currency: string;
  isYearlyPeriodicity: boolean;
  buttonText: string;
  featureList: string[];
};

const PriceOption: FunctionComponent<PricingOptionProps> = ({
  title,
  subTitle,
  isBestValue,
  isHighlighted,
  priceInUSD,
  currency,
  isYearlyPeriodicity,
  linkAtTheBottom,
  includesPreviousOptionText,
  buttonText,
  featureList,
}) => {
  const currencySymbol = currencyToSymbol[`${currency}`];

  let recurranceTextTop = '';
  let recurranceTextBottom = '';

  if (title === 'premium') {
    if (isYearlyPeriodicity) {
      recurranceTextTop = '/month';
      recurranceTextBottom = 'billed annually';
    } else {
      (recurranceTextTop = ''), (recurranceTextBottom = '/month');
    }
  }

  if (title === 'teams') {
    if (isYearlyPeriodicity) {
      recurranceTextTop = 'per user /month';
      recurranceTextBottom = 'billed annually';
    } else {
      recurranceTextTop = '';
      recurranceTextBottom = 'per user /month';
    }
  }

  let priceToBeDisplayed: string | number = priceInUSD;
  if (priceInUSD === 0) priceToBeDisplayed = 'Free';
  if (priceInUSD < 0) priceToBeDisplayed = 'Contact sales for pricing';

  return (
    <article
      className={joinClasses(
        styles.priceOption,
        styles[`${title}`],
        styles[`${currency}`]
      )}
    >
      {isHighlighted && (
        <strong className={styles.mostPopular}> MOST POPULAR </strong>
      )}
      {isBestValue && <strong className={styles.bestValue}>Best Value</strong>}
      <div style={{ marginLeft: '24px', marginRight: '24px' }}>
        <h2 className={joinClasses(styles.title, styles[`${title}`])}>
          {title}
        </h2>
        <strong className={styles.subtitle}>{subTitle}</strong>
      </div>
      <div
        className={joinClasses(
          styles.price,
          styles[`${title}`],
          styles[currency]
        )}
      >
        <strong className={joinClasses(styles.priceText, styles[`${title}`])}>
          {`${priceInUSD > 0 ? currencySymbol : ''}${priceToBeDisplayed}`}
        </strong>
        {(title === 'premium' || title === 'teams') && (
          <div
            className={joinClasses(
              styles.priceRecurrence,
              styles[`${title}`],
              styles[`${currency}`]
            )}
          >
            <div>
              <span
                className={joinClasses(
                  styles.recurrenceText,
                  styles[`${currency}`]
                )}
              >
                {recurranceTextTop}
              </span>
            </div>
            <div>
              <span
                className={joinClasses(
                  styles.recurrenceText,
                  styles[`${currency}`]
                )}
              >
                {recurranceTextBottom}
              </span>
            </div>
          </div>
        )}
        <div></div>
      </div>
      <div className={styles.buttonGroup}>
        <a className={joinClasses(styles.button, styles[`${title}`])}>
          <span className={styles.buttonText}>{buttonText}</span>
        </a>
        {includesPreviousOptionText && (
          <p className={styles.listElement}>{includesPreviousOptionText}</p>
        )}
        <ul>
          {featureList.map((feature: string, index: number) => {
            return (
              <li className={styles.listElement} key={index}>
                <svg
                  className={styles.checkmark}
                  viewBox='0 0 18 18'
                  height='18'
                  width='18'
                  role='img'
                >
                  <title>Checkmark</title>
                  <path
                    fill='currentColor'
                    d='M13.746 4.337a1.015 1.015 0 011.409-.099c.417.354.462.97.101 1.378l-7.13 8.047a1.015 1.015 0 01-1.483.03L2.771 9.67a.961.961 0 01.044-1.38 1.015 1.015 0 011.412.041l3.113 3.235 6.406-7.229z'
                    fillRule='evenodd'
                  ></path>
                </svg>
                <p>{feature}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default PriceOption;
