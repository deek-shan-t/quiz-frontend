"use client";

import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";


const LeaderboardsTable = () => {
  const [leaderboards, setLeaderboards] = useState([]);

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/leaderboard`);
        const data = await res.json();
        setLeaderboards(data);
        console.log("Leaderboards fetched:", res, data);

      } catch (error) {
        console.error("Error fetching leaderboards:", error);
      }
    };

    fetchLeaderboards();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="p-3 border">Quiz Name</th>
            <th className="p-3 border">Date</th>
            <th className="p-3 border">Mordor</th>
            <th className="p-3 border">Rivendell</th>
            <th className="p-3 border">HelmsDeep</th>
            <th className="p-3 border">Edoras</th>
          </tr>
        </thead>
        <tbody>
          {leaderboards.length > 0 ? (
            leaderboards
              .sort((a, b) => b.Mordor - a.Mordor) // Sort dynamically in case API changes
              .map((quiz) => (
                <tr key={quiz.id} className="text-center border-b text-gray-100">
                  <td className="p-3 border">{quiz.quiz_name}</td>
                  <td className="p-3 border">{new Date(quiz.quiz_date).toLocaleDateString()}</td>
                  <td className="p-3 border font-semibold">{quiz.mordor}</td>
                  <td className="p-3 border">{quiz.rivendell}</td>
                  <td className="p-3 border">{quiz.helmsdeep}</td>
                  <td className="p-3 border">{quiz.edoras}</td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan="6" className="p-3 text-center border">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardsTable;
