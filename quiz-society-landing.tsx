import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function QuizSocietyLanding() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">College Quiz Society</h1>

        {/* Introduction */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Welcome to Quiz Society</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Join us in our exciting world of quizzes! Our society organizes regular quiz events covering a wide range
              of topics. Whether you're a trivia enthusiast or just looking to learn something new, there's a place for
              you here.
            </p>
            <p className="mt-4 text-muted-foreground">
              Participate in our events, climb the leaderboard, and showcase your knowledge. Let's make learning fun
              together!
            </p>
          </CardContent>
        </Card>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Leaderboard */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Leaderboard</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {["Alice", "Bob", "Charlie", "David", "Eve"].map((name, index) => (
                <li key={name} className="flex justify-between items-center">
                  <span>
                    {index + 1}. {name}
                  </span>
                  <span className="font-semibold">{100 - index * 10} pts</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

      </div>

      {/* Quiz Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button className="w-full sm:w-auto" variant="outline">
          Past Quizzes
        </Button>
        <Button className="w-full sm:w-auto">Upcoming Quizzes</Button>
      </div>
    </div>
  )
}

