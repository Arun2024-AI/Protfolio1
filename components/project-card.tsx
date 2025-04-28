import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  githubLink: string
  demoLink: string
  date: string
}

export default function ProjectCard({ title, description, techStack, githubLink, demoLink, date }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow border-gray-800 bg-gray-900">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="outline">{date}</Badge>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="gap-1" asChild>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </Button>
        <Button size="sm" className="gap-1" asChild>
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
