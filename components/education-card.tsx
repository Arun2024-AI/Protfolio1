import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

interface EducationCardProps {
  degree: string
  institution: string
  duration: string
}

export default function EducationCard({ degree, institution, duration }: EducationCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow border-gray-800 bg-gray-900">
      <CardHeader className="flex flex-row items-start gap-4">
        <div className="mt-1 bg-gray-800 p-2 rounded-full">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl">{degree}</CardTitle>
          <CardDescription className="text-base mt-1">{institution}</CardDescription>
          <Badge variant="outline" className="mt-2 flex items-center gap-1 w-fit">
            <Calendar size={14} />
            {duration}
          </Badge>
        </div>
      </CardHeader>
    </Card>
  )
}
