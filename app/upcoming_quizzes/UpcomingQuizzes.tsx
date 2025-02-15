"use client";

import { useEffect, useState } from "react";

interface Quiz {
  id: number;
  title: string;
  qms: string[] ; // Handle null cases
  date: string;
  registration_link: string;
}

const UpcomingQuizzes = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/upcoming_quizzes");
      if (!res.ok) throw new Error("Failed to fetch quizzes");
      const data = await res.json();
      setQuizzes(data);
    } catch (error) {
      console.error("Error fetching upcoming quizzes:", error);
    }
  };

  return (
    <div className="p-6">
      {/* <h1 className="text-2xl font-bold mb-4">Upcoming Quizzes</h1> */}
      {quizzes.length > 0 ? (
        quizzes.map((quiz) => (
          <div key={quiz.id} className="border rounded-xl p-4 mb-4 shadow-lg bg-white">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{quiz.title}</h2>
              <span className="text-sm text-gray-500">{new Date(quiz.date).toLocaleDateString()}</span>
            </div>
            {quiz.qms && quiz.qms.length > 0 ? (
              <p className="text-gray-700 mt-2">
                <strong>Quiz Masters:</strong> {quiz.qms.join(", ")}
              </p>
            ) : (
              <p className="text-gray-500 mt-2">No Quiz Masters listed.</p>
            )}
            <a
              href={quiz.registration_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-2 block"
            >
              Register Here
            </a>
          </div>
        ))
      ) : (
        <p>No upcoming quizzes available.</p>
      )}
    </div>
  );
};

export default UpcomingQuizzes;
