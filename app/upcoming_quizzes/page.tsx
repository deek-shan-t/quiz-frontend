import React from "react";
import UpcomingQuizzes from "./UpcomingQuizzes";
import Link from "next/link";

const QuizzesPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-900 p-6">
      <div className="bg-gray-900 w-full max-w-6xl h-[700px] p-4 flex flex-col">
        <Link href="/">
          <img 
            src="/logo.png" 
            alt="Home" 
            className="w-16 h-16 mx-auto mb-4 cursor-pointer" 
          />
        </Link>
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
          Upcoming Quizzes
        </h1>
        <div className="flex flex-1 space-x-2">
          <div className="flex flex-col flex-[2] space-y-2">
            <UpcomingQuizzes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;