import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <FlashCards />
    </div>
  );
}
const questions = [
  {
    id: 3457,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 7336,
    question: " Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
  },
  {
    id: 8832,
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
  {
    id: 1297,
    question: " What is the chemical symbol for gold?",
    answer: "Au",
  },
  {
    id: 9103,
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
  },
  {
    id: 2002,
    question: "What year did the Titanic sink?",
    answer: "1912",
  },
];

function FlashCards() {
  const [selected, setSelected] = useState(null);
  function flip(id) {
    setSelected(selected !== id ? id : null);
  }
  return (
    <div className="questions">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selected ? "selected" : ""}
          onClick={() => flip(question.id)}
        >
          <p>
            {selected === question.id ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
