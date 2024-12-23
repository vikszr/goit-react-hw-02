export default function Feedback({ feedback, totalFeedback }) {
  return (
    <div>
      <p>Good:{feedback.good}</p>
      <p>Neutral:{feedback.neutral}</p>
      <p>Bad:{feedback.bad}</p>
      {totalFeedback > 0 && <p>Total: {totalFeedback}</p>}
      {totalFeedback > 0 && (
        <p>Positive: {Math.round((feedback.good / totalFeedback) * 100)}%</p>
      )}
    </div>
  );
}
