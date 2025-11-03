
export type FeedbackKey = 'good' | 'neutral' | 'bad';

export interface FeedbackState {
  good: number;
  neutral: number;
  bad: number;
}