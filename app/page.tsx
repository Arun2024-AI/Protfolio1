import Image from "next/image"
import { Download, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SocialLinks from "@/components/social-links"
import ProjectCard from "@/components/project-card"
import CertificationCard from "@/components/certification-card"
import EducationCard from "@/components/education-card"
import ExperienceCard from "@/components/experience-card"
import SkillsSection from "@/components/skills-section"
import ResumeViewer from "@/components/resume-viewer"
import GitHubStats from "@/components/github-stats"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-center opacity-10"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image src="/images/profile.jpg" alt="Arun Kumar Giri" fill className="object-cover" priority />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Arun Kumar Giri</h1>
              <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">Aspiring Front-End Developer</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">React</Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">JavaScript</Badge>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">HTML/CSS</Badge>
                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">Python</Badge>
                <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">SQL</Badge>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="gap-2">
                  <Download size={16} />
                  Download Resume
                </Button>
                <Button variant="outline" className="gap-2">
                  <Mail size={16} />
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-7 mb-8">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="resume">Resume</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Aspiring Front-End Developer with Experience in Web development and system Integration. Skilled in
                  Programming, and Problem-solving. Codeforces Rating: 1050+, LeetCode Rating: 1800+, Codechef Rating:
                  1000+
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Extra-Curricular Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Regional Knowledge Science Fair 2022</h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    Science Fair Robotics Secured All India Rank 2nd (2022) — Science Fair Robotics Secured All India
                    Rank 4th (2023)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    <span className="font-medium">Project:</span> Robotics —
                    <span className="font-medium">Sponsor:</span> ISRO
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    Demonstrated innovative robotics concepts, securing top national ranks in a prestigious competition.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone size={18} className="text-gray-500" />
                    <span>+918795132422</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={18} className="text-gray-500" />
                    <span>arun.giri2024@nst.rishihood.edu.in</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <GitHubStats />
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="space-y-6">
            <EducationCard
              degree="Bachelor of Technology (Artificial intelligence)"
              institution="Newton School Of Technology, Rishihood University"
              duration="2024 - 2028"
            />
            <EducationCard
              degree="Intermediate (Class XII)"
              institution="Naga Ji Saraswati Vidya Mandir Senior Secondary School"
              duration="2023 - 2024"
            />
            <EducationCard
              degree="Matriculation (Class X)"
              institution="Naga Ji Saraswati Vidya Mandir Senior Secondary School"
              duration="2021 - 2022"
            />
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6">
            <ExperienceCard
              position="Cybersecurity Analyst"
              company="Tata Group"
              location="Remote"
              duration="January 2025 - February 2025"
              description="Completed a remote Cybersecurity Analyst internship at Tata Group, specializing in vulnerability assessments, threat analysis, and network security."
            />
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="ShopMe"
              description="Apple Vision Pro, here's a simple React component that displays a clean, informative section—perfect for a landing page or product details"
              techStack={["HTML", "CSS", "JavaScript", "React"]}
              githubLink="#"
              demoLink="#"
              date="February 2025"
            />
            <ProjectCard
              title="Apple Vision Pro"
              description="Took on the challenge of cloning the Apple Vision Pro website. This project pushed my skills to the next level"
              techStack={["HTML", "CSS", "JavaScript", "Vercel"]}
              githubLink="#"
              demoLink="#"
              date="February 2025"
            />
            <ProjectCard
              title="Spotify Clone Page"
              description="Developed a responsive clone of the Home Page Spofity using HTML, CSS, and JavaScript, replicating its design and interactivity."
              techStack={["HTML", "CSS", "JavaScript", "React"]}
              githubLink="#"
              demoLink="#"
              date="January 2025"
            />
            <ProjectCard
              title="Portfolio"
              description="A responsive portfolio showcasing diverse web development projects, focusing on interactive features, responsive design, and optimized Performance"
              techStack={["HTML", "CSS", "JavaScript"]}
              githubLink="#"
              demoLink="#"
              date="December 2024"
            />
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <SkillsSection />
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications" className="space-y-6">
            <CertificationCard
              title="Tata Group - Cybersecurity Analyst Job Simulation"
              issuer="Tata Group"
              date="February 2025"
              link="#"
              description="Tata Group - Cybersecurity Analyst Job Simulation"
            />
            <CertificationCard
              title="Innovating with Google Cloud Artificial Intelligence"
              issuer="Google Cloud"
              date="January 2025"
              link="#"
              description="Skill Innovating with Artificial Intelligence"
            />
            <CertificationCard
              title="Digital Transformation with Google Cloud"
              issuer="Google Cloud"
              date="January 2025"
              link="#"
              description="Skill Digital Transformation"
            />
            <CertificationCard
              title="Introduction to Gemini for Google Workspace"
              issuer="Google Cloud"
              date="January 2025"
              link="#"
              description="Gemini for Google Workspace"
            />
            <CertificationCard
              title="Minor in Artificial Intelligence"
              issuer="Indian Institute of Technology Ropar"
              date="November 2024"
              link="#"
              description="Coursework: Machine Learning, Deep Learning, Natural Language Processing, AI for Robotics, Computer Vision, Probabilistic Graphical Models"
            />
            <CertificationCard
              title="Verizon - Cloud Platform Job Simulation"
              issuer="Forage"
              date="October 2024"
              link="#"
              description="Verizon - Cloud Platform Job Simulation"
            />
            <CertificationCard
              title="AWS Solutions Architecture Virtual Experience Program"
              issuer="Amazon Web Services — Forage"
              date="October 2024"
              link="#"
              description="AWS Solutions Architecture Virtual Experience Program"
            />
          </TabsContent>

          {/* Resume Tab */}
          <TabsContent value="resume">
            <ResumeViewer />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
