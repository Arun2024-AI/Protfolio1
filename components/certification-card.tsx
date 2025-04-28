import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar } from "lucide-react"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  link: string
  description: string
}

export default function CertificationCard({ title, issuer, date, link, description }: CertificationCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow border-gray-800 bg-gray-900">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="outline" className="flex items-center gap-1">
            <Calendar size={14} />
            {date}
          </Badge>
        </div>
        <CardDescription className="text-base font-medium">{issuer}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="gap-1" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            <span>View Certificate</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
