import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { GiBus } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { MdMenuBook } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { FaBuildingColumns } from "react-icons/fa6";
import { GiSportMedal } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CardContents = [
  { icon: <GiBus />, label: "Transport" , Link:'transport'},
  { icon: <PiStudent />, label: "Student" , Link:'student'},
  { icon: <MdMenuBook />, label: "Library" , Link:'library'},
  { icon: <FaBuildingColumns />, label: "Blogs", Link:'blogs' },
  { icon: <GiSportMedal />, label: "Club", Link:'club/cricket/cricketmembers' },
  { icon: <FaGraduationCap />, label: "Alumni" , Link:'alumni'},
  { icon: <RiContactsBook3Line />, label: "Contact", Link:'contact' },
];

export default function IconCard() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % CardContents.length);
    }, 1000); // Scroll every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl my-5 mx-auto mt-12">
      <Carousel className="w-full max-w-7xl" slideIndex={currentSlide}>
        <CarouselContent className="flex md:gap-4 md:px-4">
          {CardContents.map((Cards, index) => (
           <Link to={Cards.Link} key={index} className="flex-shrink-0 basis-1/4 hover:scale-105 transition-all duration-300">
            <CarouselItem className=" ">
              <div className="p-1">
                <Card className="h-full shadow-none">
                  <CardContent className="flex flex-col text-slate-400 hover:text-red-500 cursor-pointer aspect-square items-center justify-center p-2">
                    <span className="text-4xl font-semibold">{Cards.icon}</span>
                    <span className="text-md font-semibold">{Cards.label}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
           </Link>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
