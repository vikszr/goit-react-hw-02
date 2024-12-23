import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setFeedback({ ...feedback, good: feedback.good + 1 });
        break;
      case "bad":
        setFeedback({ ...feedback, bad: feedback.bad + 1 });
        break;
      case "neutral":
        setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
        break;
      case "reset":
        setFeedback({
          good: 0,
          neutral: 0,
          bad: 0,
        });
        break;

      default:
        break;
    }
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options
        feedback={feedback}
        onUpdate={updateFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
