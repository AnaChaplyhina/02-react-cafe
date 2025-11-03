

import styles from './FeedbackOptions.module.css';
import { type FeedbackKey } from '../../types/votes';

interface FeedbackOptionsProps {
  options: FeedbackKey[]; 
  onLeaveFeedback: (key: FeedbackKey) => void; 
}

const FeedbackOptions = ({ options, onLeaveFeedback }: FeedbackOptionsProps) => {
  return (
    <div className={styles.optionsWrapper}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`${styles.button} ${styles[option]}`}
          onClick={() => onLeaveFeedback(option)} 
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;