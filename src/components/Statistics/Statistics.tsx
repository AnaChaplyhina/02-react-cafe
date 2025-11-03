// src/components/Statistics/Statistics.tsx

import styles from './Statistics.module.css';

// Локальний інтерфейс
interface StatisticsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

const Statistics = ({ good, neutral, bad, total, positivePercentage }: StatisticsProps) => {
  return (
    <div className={styles.statsWrapper}>
      <p className={styles.statItem}>Good: <span className={styles.goodValue}>{good}</span></p>
      <p className={styles.statItem}>Neutral: <span className={styles.neutralValue}>{neutral}</span></p>
      <p className={styles.statItem}>Bad: <span className={styles.badValue}>{bad}</span></p>
      <p className={styles.statItemTotal}>Total: <span>{total}</span></p>
      <p className={styles.statItemPercentage}>Positive feedback: <span>{positivePercentage}%</span></p>
    </div>
  );
};

export default Statistics;