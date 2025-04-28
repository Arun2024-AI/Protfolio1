"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"

export default function ResumeViewer() {
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(100)
  const totalPages = 1

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleZoomIn = () => {
    if (zoom < 200) {
      setZoom(zoom + 10)
    }
  }

  const handleZoomOut = () => {
    if (zoom > 50) {
      setZoom(zoom - 10)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handlePrevPage} disabled={currentPage === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button variant="outline" size="icon" onClick={handleNextPage} disabled={currentPage === totalPages}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleZoomOut} disabled={zoom <= 50}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm">{zoom}%</span>
          <Button variant="outline" size="icon" onClick={handleZoomIn} disabled={zoom >= 200}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button className="gap-2">
            <Download size={16} />
            Download PDF
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden border-gray-800 bg-gray-900">
        <CardContent className="p-0 flex justify-center bg-gray-900 min-h-[800px]">
          <div
            style={{
              transform: `scale(${zoom / 100})`,
              transformOrigin: "top center",
              transition: "transform 0.2s ease-in-out",
            }}
            className="bg-white shadow-lg my-4 w-[21cm] h-[29.7cm] p-8"
          >
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">Arun Kumar Giri</h1>
              <p className="text-gray-600">Front-End Developer</p>
              <div className="flex justify-center gap-4 mt-2 text-sm">
                <span>+918795132422</span>
                <span>•</span>
                <span>arun.giri2024@nst.rishihood.edu.in</span>
              </div>
              <div className="flex justify-center gap-2 mt-1 text-sm text-gray-600">
                <span>LinkedIn</span>
                <span>•</span>
                <span>Github</span>
                <span>•</span>
                <span>HackerEarth</span>
                <span>•</span>
                <span>HackerRank</span>
                <span>•</span>
                <span>CodeChef</span>
                <span>•</span>
                <span>Codeforces</span>
                <span>•</span>
                <span>Leetcode</span>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">PROFESSIONAL SUMMARY</h2>
              <p className="text-sm">
                Aspiring Front-End Developer with Experience in Web development and system Integration. Skilled in
                Programming, and Problem-solving. Codeforces Rating: 1050+, LeetCode Rating: 1800+, Codechef Rating:
                1000+
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">EDUCATION</h2>
              <div className="text-sm space-y-2">
                <div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Bachelor of Technology (Artificial intelligence)</span>
                    <span>2024 - 2028</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Newton School Of Technology, Rishihood University</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Intermediate (Class XII)</span>
                    <span>2023 - 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Naga Ji Saraswati Vidya Mandir Senior Secondary School</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Matriculation (Class X)</span>
                    <span>2021 - 2022</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Naga Ji Saraswati Vidya Mandir Senior Secondary School</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">INTERNSHIPS</h2>
              <div className="text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold">Cybersecurity Analyst</span>
                  <span>January 2025 - February 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Tata Group</span>
                  <span>Remote</span>
                </div>
                <p className="mt-1">
                  Completed a remote Cybersecurity Analyst internship at Tata Group, specializing in vulnerability
                  assessments, threat analysis, and network security.
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2">PROJECTS</h2>
              <div className="text-sm space-y-2">
                <div>
                  <div className="flex justify-between">
                    <span className="font-semibold">ShopMe</span>
                    <span>February 2025</span>
                  </div>
                  <p className="mt-1">
                    Apple Vision Pro, here's a simple React component that displays a clean, informative section—perfect
                    for a landing page or product details
                  </p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Apple Vision Pro</span>
                    <span>February 2025</span>
                  </div>
                  <p className="mt-1">
                    Took on the challenge of cloning the Apple Vision Pro website. This project pushed my skills to the
                    next level
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
