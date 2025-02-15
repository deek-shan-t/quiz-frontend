import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import LeaderboardChart from "@/app/components/LeaderboardChart";

export default function QuizSocietyLanding() {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-900 p-6 font-fredoka">
      <div className="bg-gray-900 w-full max-w-6xl h-[700px] p-4 flex flex-col">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
          Quiz Club IIT Jodhpur
        </h1>

        <div className="flex flex-1 space-x-2">
          {/* Left Column */}
          <div className="flex flex-col flex-[2] space-y-2">
            {/* Welcome Section */}
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Welcome to Quiz Society</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Test your knowledge and compete with the best minds! Our club hosts regular quizzes covering a variety of topics, providing a fun and engaging experience for all.
                </p>
              </CardContent>
            </Card>

            {/* Leaderboard Progression */}
            <div className="flex-[2]">
              <LeaderboardChart />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col flex-[1] space-y-2">
            {/* Person of Interest */}
            <Card className="flex-[7]">
              <CardHeader>
                <CardTitle>Featured Member</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contact info, achievements, or any highlight here.</p>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Link href="/past_quizzes" className="flex-[1.1]">
              <Button className="w-full h-full" variant="secondary">Past Quizzes</Button>
            </Link>
            <Link href="/upcoming_quizzes" className="flex-[1.1]">
              <Button className="w-full h-full" variant="secondary">Upcoming Quizzes</Button>
            </Link>
            <Link href="/leaderboards" className="flex-[1.1]">
              <Button className="w-full h-full" variant="secondary">Leaderboards</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
