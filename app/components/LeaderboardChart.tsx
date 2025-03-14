"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { API_BASE_URL } from "../config";

// Define types for leaderboard data
interface LeaderboardEntry {
  quiz_name: string;
  mordor: number;
  rivendell: number;
  helmsdeep: number;
  edoras: number;
  quiz_date?: string;
}

const LeaderboardChart = () => {
  const [leaderboards, setLeaderboards] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/leaderboard`);
        const data: LeaderboardEntry[] = await res.json();

        // Sort quizzes by date (ascending)
        data.sort((a, b) =>
          new Date(a.quiz_date || 0).getTime() - new Date(b.quiz_date || 0).getTime()
        );

        // Initialize cumulative sums
        const cumulative = {
          mordor: 0,
          rivendell: 0,
          helmsdeep: 0,
          edoras: 0,
        };

        // Start with an initial zero-value entry for the graph origin
        const cumulativeData: LeaderboardEntry[] = [
          {
            quiz_name: "", // This will appear at the beginning of X-axis
            mordor: 0,
            rivendell: 0,
            helmsdeep: 0,
            edoras: 0,
            quiz_date: "1970-01-01",
          },
          ...data.map((quiz) => {
            cumulative.mordor += quiz.mordor;
            cumulative.rivendell += quiz.rivendell;
            cumulative.helmsdeep += quiz.helmsdeep;
            cumulative.edoras += quiz.edoras;

            return {
              quiz_name: quiz.quiz_name, // X-axis label
              ...cumulative, // Store cumulative totals
              quiz_date: quiz.quiz_date, // For sorting
            };
          }),
        ];

        setLeaderboards(cumulativeData);
        console.log("Cumulative Leaderboards:", cumulativeData);
      } catch (error) {
        console.error("Error fetching leaderboards:", error);
      }
    };

    fetchLeaderboards();
  }, []);

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Leaderboard Progression</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Track team scores over time based on quiz performances.
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={leaderboards}>
            <XAxis dataKey="quiz_name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="mordor" stroke="#ff0000" name="Mordor" />
            <Line type="monotone" dataKey="rivendell" stroke="#0000ff" name="Rivendell" />
            <Line type="monotone" dataKey="helmsdeep" stroke="#00ff00" name="HelmsDeep" />
            <Line type="monotone" dataKey="edoras" stroke="#ffa500" name="Edoras" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LeaderboardChart;
