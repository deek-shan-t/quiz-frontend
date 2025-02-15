"use client";

import { useEffect, useState } from "react";
import QuizItem from "../components/QuizItem";

interface Quiz {
  id: number;
  title: string;
  date: string;
  winners: string[];
  finalists: string[];
  participants: string[];
}

const PastQuizzes = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/past_quizzes");
        if (!res.ok) throw new Error("Failed to fetch quizzes");
        const data = await res.json();
        setQuizzes(data);
      } catch (error) {
        console.error("Error fetching past quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="p-6">
      {/* <h1 className="text-2xl font-bold mb-4">Past Quizzes</h1> */}
      {quizzes.length > 0 ? (
        quizzes.map((quiz) => (
          <QuizItem
            key={quiz.id}
            title={quiz.title}
            date={new Date(quiz.date).toLocaleDateString()}
            winners={quiz.winners}
            finalists={quiz.finalists}
            participants={quiz.participants}
          />
        ))
      ) : (
        <p>No past quizzes available.</p>
      )}
    </div>
  );
};

export default PastQuizzes;
