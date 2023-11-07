import { Component } from 'react';
import { Statistics } from './statistics';
import { FeedbackOptions } from './button';
import { Section } from './section';
import { Notification } from './notification';

export class ContainerWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.countFeedback}
            options={['good', 'neutral', 'bad']}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
          {total === 0 && <Notification message="There is no feedback" />}
        </Section>
      </div>
    );
  }
}
