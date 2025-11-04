

import styles from './VoteOptions.module.css'; 
import { type VoteType } from '../../types/votes'; 


interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => {
  const options: VoteType[] = ['good', 'neutral', 'bad'];

  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          key={option}
          className={styles.button}
          onClick={() => onVote(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}

      {canReset && (
        <button 
          className={`${styles.button} ${styles.reset}`} 
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default VoteOptions;