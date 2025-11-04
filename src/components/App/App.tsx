import { useState } from 'react';
import styles from './App.module.css';
import { type Votes, type VoteType } from '../../types/votes';
import CafeInfo from '../CafeInfo/CafeInfo.tsx'; 
import VoteOptions from '../VoteOptions/VoteOptions.tsx';
import VoteStats from '../VoteStats/VoteStats.tsx';
import Notification from '../Notification/Notification.tsx';

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [votes, setVotes] = useState<Votes>(initialVotes);
  
  // Обчислення
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  // Обробники
  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes(initialVotes);
  };
  
  const canReset = totalVotes > 0;

  return (
    <div className={styles.app}>
      <CafeInfo />
      <VoteOptions 
        onVote={handleVote} 
        onReset={resetVotes} 
        canReset={canReset}
      />
      
      {totalVotes > 0 ? (
        <VoteStats 
          votes={votes} 
          totalVotes={totalVotes} 
          positiveRate={positiveRate} 
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;