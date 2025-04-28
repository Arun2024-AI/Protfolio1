import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const programmingSkills = [
    { name: "JavaScript", level: 85 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 70 },
  ]

  const softwareSkills = [
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "MySQL", level: 75 },
    { name: "Figma", level: 65 },
  ]

  const softSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Teamwork", level: 80 },
    { name: "Research", level: 85 },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="border-gray-800 bg-gray-900">
        <CardHeader>
          <CardTitle>Programming Languages</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {programmingSkills.map((skill) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-gray-800 bg-gray-900">
        <CardHeader>
          <CardTitle>Software & Tools</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {softwareSkills.map((skill) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-gray-800 bg-gray-900">
        <CardHeader>
          <CardTitle>Soft Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {softSkills.map((skill) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
