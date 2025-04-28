import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Calendar } from "lucide-react"

interface ExperienceCardProps {
  position: string
  company: string
  location: string
  duration: string
  description: string
}

export default function ExperienceCard({ position, company, location, duration, description }: ExperienceCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow border-gray-800 bg-gray-900">
      <CardHeader className="flex flex-row items-start gap-4">
        <div className="mt-1 bg-gray-800 p-2 rounded-full">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl">{position}</CardTitle>
          <CardDescription className="text-base font-medium mt-1">{company}</CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <MapPin size={14} />
              {location}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar size={14} />
              {duration}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}
