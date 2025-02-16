'use client';

import { useState } from "react";

interface QuizProps {
  title: string;
  date: string;
  winners: string[];
  finalists: string[];
  participants: string[];
  quiz_link: string;
}

const QuizItem = ({ title, date, winners, finalists, participants, quiz_link }: QuizProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-xl p-4 mb-4 shadow-lg bg-white">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</span>
      </div>
      {isOpen && (
        <div className="mt-2 p-2 border-t">
          <h3 className="font-semibold">Winners</h3>
          <ul className="list-disc ml-5 text-sm text-gray-700">
            {winners.map((winner, index) => (
              <li key={index}>{winner}</li>
            ))}
          </ul>
          <h3 className="font-semibold mt-2">Finalists</h3>
          <ul className="list-disc ml-5 text-sm text-gray-700">
            {finalists.map((finalist, index) => (
              <li key={index}>{finalist}</li>
            ))}
          </ul>
          <h3 className="font-semibold mt-2">Participants</h3>
          <ul className="list-disc ml-5 text-sm text-gray-700">
            {participants.map((participant, index) => (
              <li key={index}>{participant}</li>
            ))}
          </ul>
          {quiz_link && (
            <div className="mt-4">
              <a 
                href={quiz_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline text-sm"
              >
                View Quiz Details
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizItem;
