import { useState } from 'react';
import styles from './App.module.css';
import { type FeedbackState, type FeedbackKey } from '../../types/votes';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

const initialFeedbackState: FeedbackState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
 
  const [feedback, setFeedback] = useState<FeedbackState>(initialFeedbackState);


  const handleLeaveFeedback = (key: FeedbackKey) => {
   
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [key]: prevFeedback[key] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;


  const countTotalFeedback = (): number => {
    return good + neutral + bad;
  };


  const countPositiveFeedbackPercentage = (): number => {
    const total = countTotalFeedback();

    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  
  // Динамічний масив ключів: ['good', 'neutral', 'bad']
  const options: FeedbackKey[] = Object.keys(feedback) as FeedbackKey[];

  return (
    <div className={styles.container}>
      
      <Section title="Будь ласка, залиште свій відгук">
        <FeedbackOptions 
          options={options} 
          onLeaveFeedback={handleLeaveFeedback} 
        />
      </Section>

      <Section title="Статистика">
        {total === 0 ? (

          <p className={styles.notification}>Ще немає відгуків</p>
        ) : (
          
          <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={total} 
            positivePercentage={positivePercentage} 
          />
        )}
      </Section>
    </div>
  );
};

export default App;