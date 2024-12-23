export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div>
      <p>Good:{feedback.good}</p>
      <p>Neutral:{feedback.neutral}</p>
      <p>Bad:{feedback.bad}</p>
      {totalFeedback > 0 && <p>Total: {totalFeedback}</p>}
      {totalFeedback > 0 && <p>Positive: {positiveFeedback}%</p>}
    </div>
  );
}
