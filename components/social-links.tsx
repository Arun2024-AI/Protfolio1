import { Github, Linkedin, Instagram, Code, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SocialLinks() {
  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "#", color: "bg-blue-600 hover:bg-blue-700" },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/Arun2024-AI",
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/atul._9/",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    { name: "LeetCode", icon: <Code size={20} />, url: "#", color: "bg-yellow-600 hover:bg-yellow-700" },
    { name: "CodeForces", icon: <Award size={20} />, url: "#", color: "bg-red-600 hover:bg-red-700" },
    { name: "CodeChef", icon: <BookOpen size={20} />, url: "#", color: "bg-green-600 hover:bg-green-700" },
    { name: "HackerRank", icon: <Code size={20} />, url: "#", color: "bg-purple-600 hover:bg-purple-700" },
  ]

  return (
    <TooltipProvider>
      <div className="flex flex-wrap justify-center gap-2">
        {socialLinks.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="icon" className={`rounded-full ${link.color}`}>
                  {link.icon}
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
