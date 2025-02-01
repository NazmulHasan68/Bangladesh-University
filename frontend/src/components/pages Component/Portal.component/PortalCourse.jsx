import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const courseData = [
  {
    year: "First Year Courses",
    value: "item-1",
    courses: [
      { name: "Mathematics I", credit: 3, teacher: "Dr. John Smith", link: "/math1" },
      { name: "Physics", credit: 4, teacher: "Dr. Alice Johnson", link: "/physics" },
      { name: "Programming Fundamentals", credit: 3, teacher: "Prof. David Brown", link: "/programming" },
      { name: "English Composition", credit: 2, teacher: "Ms. Emily White", link: "/english" },
      { name: "Introduction to Engineering", credit: 1, teacher: "Dr. Robert Wilson", link: "/intro-eng" },
    ],
  },
  {
    year: "Second Year Courses",
    value: "item-2",
    courses: [
      { name: "Mathematics II", credit: 3, teacher: "Dr. Sarah Lee", link: "/math2" },
      { name: "Data Structures & Algorithms", credit: 4, teacher: "Prof. Michael Green", link: "/dsa" },
      { name: "Computer Organization", credit: 3, teacher: "Dr. Nancy Clark", link: "/computer-org" },
      { name: "Discrete Mathematics", credit: 3, teacher: "Prof. Henry Adams", link: "/discrete-math" },
      { name: "Software Engineering", credit: 3, teacher: "Dr. Olivia Taylor", link: "/software-eng" },
    ],
  },
  {
    year: "Third Year Courses",
    value: "item-3",
    courses: [
      { name: "Operating Systems", credit: 4, teacher: "Prof. William Davis", link: "/os" },
      { name: "Database Systems", credit: 4, teacher: "Dr. Sophia Harris", link: "/database" },
      { name: "Computer Networks", credit: 3, teacher: "Dr. Daniel Martinez", link: "/networks" },
      { name: "Artificial Intelligence", credit: 3, teacher: "Prof. Laura Rodriguez", link: "/ai" },
      { name: "Web Development", credit: 3, teacher: "Dr. Christopher Lopez", link: "/web-dev" },
    ],
  },
  {
    year: "Fourth Year Courses",
    value: "item-4",
    courses: [
      { name: "Machine Learning", credit: 4, teacher: "Dr. Anthony Walker", link: "/ml" },
      { name: "Cloud Computing", credit: 3, teacher: "Prof. Jessica Hall", link: "/cloud" },
      { name: "Cyber Security", credit: 3, teacher: "Dr. Benjamin Allen", link: "/cyber-security" },
      { name: "Blockchain Technology", credit: 3, teacher: "Prof. Megan Young", link: "/blockchain" },
      { name: "Capstone Project", credit: 6, teacher: "Dr. Elizabeth King", link: "/capstone" },
    ],
  },
];

export default function PortalCourse() {
  const [openItem, setOpenItem] = useState(null);

  const handleLinkClick = () => {
    setOpenItem(null);
  };

  return (
    <div className="md:w-full m-4 bg-white shadow-lg p-4">
      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full text-sky-900"
          value={openItem || ""}
          onValueChange={(value) => setOpenItem(value === openItem ? null : value)}
        >
          {courseData.map((year) => (
            <AccordionItem key={year.value} value={year.value}>
              <AccordionTrigger className="no-underline hover:no-underline focus:no-underline font-bold">
                {year.year}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                {year.courses.map((course, index) => (
                  <Link
                    key={index}
                    to={course.link}
                    className="w-full p-1 px-4 hover:bg-slate-200 flex justify-between items-center"
                    onClick={handleLinkClick}
                  >
                    <div className="flex flex-col">
                      <span className="font-medium text-sky-700">{course.name}</span>
                      <span className="text-sm text-gray-500">{course.teacher}</span>
                    </div>
                    <span className="text-gray-500">{course.credit} Cr</span>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
