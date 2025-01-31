import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import logo from "../../assets/commonPhoto/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
 

const Administration = [
  {
    title: "The vice-chancellor",
    href: "/vice",
    description:
      "About our vice-chancellor",
  },
  {
    title: "Pro vice-chancellor",
    href: "/pro_vice",
    description: "know about pro vice-chancellor",
  },
  {
    title: "Treasusrer",
    href: "/treasusrer",
    description:
      "Here you can the our treasusrer",
  },
  {
    title: "Register Office",
    href: "/register",
    description: "Our register office alway ready to help you",
  },
  {
    title: "Exam controll office",
    href: "/exam",
    description:
      "If have any proble ask exam controller office",
  },
  {
    title: "Apply Now",
    href: "/apply",
    description:
      "To join with us apply now",
  },
];

const Admission = [
  {
    title: "Academic Calender",
    href: "/calender",
    description:
      "Here you can the all Academic calender",
  },
  {
    title: "Academic Policy",
    href: "/policy",
    description: "Before Admit here check the policy",
  },
  {
    title: "Course and Tuition",
    href: "/course",
    description:
      "Check the course details and tuitions fees",
  },
  {
    title:"Offers and degrees",
    href: "/offer",
    description: "Visually or semantically separates content.",
  },

];

const Academic = [
  {
    title: "Faculty of Science and Engineering And Technology",
    parts: [
      { subject: "Computer Science and Engineering (CSE)", link: "https://cse.bu.edu.bd/home" },
      { subject: "Mathematics", link: "https://cse.bu.edu.bd/home" },
      { subject: "Pharmacy", link: "https://cse.bu.edu.bd/home" },
      { subject: "Electrical and Electronics Engineering (EEE)", link: "https://cse.bu.edu.bd/home" },
      { subject: "Architecture", link: "https://cse.bu.edu.bd/home" },
    ],
  },
  {
    title: "Faculty of Arts, Social Science, and Law",
    parts: [
      { subject: "English", link: "https://cse.bu.edu.bd/home" },
      { subject: "Sociology", link: "https://cse.bu.edu.bd/home" },
      { subject: "Law", link: "https://cse.bu.edu.bd/home" },
    ],
  },
  {
    title: "Faculty of Business Administration and Economics",
    parts: [
      { subject: "Business Administration", link: "https://cse.bu.edu.bd/home" },
      { subject: "Economics", link: "https://cse.bu.edu.bd/home" },
    ],
  },
];



import { GiBus } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { MdMenuBook } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { GiArchiveResearch } from "react-icons/gi";
import { FaPassport } from "react-icons/fa6";

const ListItem = React.forwardRef((props, ref) => {
  const { className, title, children, ...rest } = props;
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...rest}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Navigation() {
  return (
    <div className="w-full p-2 bg-white shadow-md fixed top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto justify-between flex gap-4 items-center">
        <Link to={'/'} className="md:w-28 w-12">
          <img src={logo} className="md:w-20 w-12" alt="bangladesh university" />
        </Link>

        <div className="flex-1 hidden md:block mx-auto">
          <div className="flex justify-between items-center text-white gap-4 text-xs mx-20">
            <Link to="/apply" className="text-red-500 hover:text-red-600 font-medium">Apply</Link>
            <Link to="/transport" className="text-red-500 hover:text-red-600 font-medium">Transport</Link>
            <Link to="/library" className="text-red-500 hover:text-red-600 font-medium">Library</Link>
            <Link to="/student" className="text-red-500 hover:text-red-600 font-medium">Student</Link>
            <Link to="/alumni" className="text-red-500 hover:text-red-600 font-medium">Alumni</Link>
            <Link to="/career" className="text-red-500 hover:text-red-600 font-medium">Career</Link>
            <Link to="/contact" className="text-red-500 hover:text-red-600 font-medium">Contact</Link>
          </div>
          <Separator className="w-full my-2" />

          <NavigationMenu className='mx-auto'>
            <NavigationMenuList className="w-full flex ">

              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <img src={logo} alt="logo"/>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/mission" title="Mission and vission" >
                      To Build a Future Bangladesh university is alaway ready
                    </ListItem>
                    <ListItem href="/founder" title="Founder">
                      When Bangladesh University it's star the juorney . it face lots of problem 
                    </ListItem>
                    <ListItem href="/leader" title="Leadership and Management">
                        here you can see all the leaders of Bangladesh university
                    </ListItem>

                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Academic</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 md:w-[400px] md:grid-cols-1 ">
                    <Accordion>
                      {Academic.map((component, index) => (
                        <AccordionItem value={`${index + 1}`} key={index}>
                          <AccordionTrigger>{component.title}</AccordionTrigger>
                          <AccordionContent>
                            <ul className="my-4 text-red-400">
                              {component.parts.map((item, idx) => (
                                <li key={idx} className="my-2">
                                  <Link to={item.link}>{item.subject}</Link>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Admission</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {Admission.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Administration</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {Administration.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href} className="hover:bg-slate-100 transition-all duration-300">
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

            
              <NavigationMenuItem>
                <Link to="/research">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Research</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/newsandevent">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Event & News</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/blogs">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blogs</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/certificate">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Certificate</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/portal">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Portal</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-1 rounded-xl bg-red-500 text-white md:hidden ">Portal</div>
          <Sheet>
            <SheetTrigger className='md:hidden block '>
              <FaBars className="text-2xl"/>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Bangladesh University</SheetTitle>
                <SheetDescription>
                  <div>
                    <Accordion type="single" collapsible>

                      <AccordionItem value="item-1">
                        <AccordionTrigger>About </AccordionTrigger>
                        <AccordionContent>
                          <ul className="text-left flex flex-col gap-2">
                            <Link to={'/mission'} className="text-gray-400 hover:text-red-400">Mission And Vission</Link>
                            <Link to={'/founder'} className="text-gray-400 hover:text-red-400">Founder</Link>
                            <Link to={'/leader'} className="text-gray-400 hover:text-red-400">Leadership & Management</Link>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>Academic</AccordionTrigger>
                        <AccordionContent>
                          <ul className="text-left grid grid-cols-2 gap-2">
                            <Link to={'/https://cse.bu.edu.bd/home'} className="text-gray-400 hover:text-red-400 shadow-md p-3">CSE</Link>
                            <Link to={'/https://cse.bu.edu.bd/home'} className="text-gray-400 hover:text-red-400 shadow-md p-3">EEE</Link>
                            <Link to={'/https://cse.bu.edu.bd/home'} className="text-gray-400 hover:text-red-400 shadow-md p-3">Pharmacy</Link>
                            <Link to={'/https://cse.bu.edu.bd/home'} className="text-gray-400 hover:text-red-400 shadow-md p-3">Math</Link>
                            <Link to={'/https://cse.bu.edu.bd/home'} className="text-gray-400 hover:text-red-400 shadow-md p-3">English</Link>
                            <Link to={'/https://cse.bu.edu.bd/home'} className="text-gray-400 hover:text-red-400 shadow-md p-3">LLB</Link>
                            <Link to={'/https://cse.bu.edu.bd/home'} className="text-gray-400 hover:text-red-400 shadow-md p-3">Socology</Link>
                            <Link to={'/https://cse.bu.edu.bd/home'} className="text-gray-400 hover:text-red-400 shadow-md p-3">BBA</Link>
                            <Link to={'/https://cse.bu.edu.bd/home'} className="text-gray-400 hover:text-red-400 shadow-md p-3">Economic</Link>
                            <Link to={'/https://cse.bu.edu.bd/home'} className="text-gray-400 hover:text-red-400 shadow-md p-3">Arch.</Link>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>


                      <AccordionItem value="item-3">
                        <AccordionTrigger>Admission</AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-2 text-left ">
                            <Link to={'/calender'} className="text-gray-400 hover:text-red-400">Academic Calender</Link>
                            <Link to={'/policy'} className="text-gray-400 hover:text-red-400">Academic Policy</Link>
                            <Link to={'/course'} className="text-gray-400 hover:text-red-400">Course and Tuition</Link>
                            <Link to={'/apply'} className="text-gray-400 hover:text-red-400">Offers and degrees</Link>
                            <Link to={'/rule'} className="text-gray-400 hover:text-red-400">Rules and Regulation</Link>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger>Admistration</AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-2 text-left ">
                            <Link to={'/vice'} className="text-gray-400 hover:text-red-400">The vice-chancellor</Link>
                            <Link to={'/pro_vice'} className="text-gray-400 hover:text-red-400">Pro-vice-chancellor</Link>
                            <Link to={'/treasusrer'} className="text-gray-400 hover:text-red-400">Treasusrer</Link>
                            <Link to={'/register'} className="text-gray-400 hover:text-red-400">Register Office</Link>
                            <Link to={'/exam'} className="text-gray-400 hover:text-red-400">Exam controll office</Link>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>


                    </Accordion>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <Link to={'/certificate'} className="bg-slate-100 hover:bg-slate-50  p-2 shadow-md text-2xl flex items-center gap-1" >
                      <GrCertificate/>
                      <p className="text-xs text-slate-400">Certificate</p>
                    </Link>
                    <Link to={'/newsandevent'} className="bg-slate-100 hover:bg-slate-50  p-2 shadow-md text-2xl flex items-center gap-1" >
                      <HiOutlineNewspaper/>
                      <p className="text-xs text-slate-400">Event & News</p>
                    </Link>
                    <Link to={'/research'} className="bg-slate-100 hover:bg-slate-50  p-2 shadow-md text-2xl flex items-center gap-1" >
                      <GiArchiveResearch/>
                      <p className="text-xs text-slate-400">Research</p>
                    </Link>
                    <Link to={'/portal'} className="bg-slate-100 hover:bg-slate-50  p-2 shadow-md text-2xl flex items-center gap-1" >
                      <FaPassport/>
                      <p className="text-xs text-slate-400">Portal</p>
                    </Link>

                    <Link to={'/transport'} className="bg-slate-100 hover:bg-slate-50  p-2 shadow-md text-3xl flex items-center gap-1" >
                      <GiBus/>
                      <p className="text-xs text-slate-400">Transport</p>
                    </Link>
                    <Link to={'/student'} className="bg-slate-100 hover:bg-slate-50  p-2 shadow-md text-2xl flex items-center gap-1" >
                      <PiStudent/>
                      <p className="text-xs text-slate-400">Student</p>
                    </Link>
                    <Link to={'/library'} className="bg-slate-100 hover:bg-slate-50  p-2 shadow-md text-2xl flex items-center gap-1" >
                      <MdMenuBook/>
                      <p className="text-xs text-slate-400">Library</p>
                    </Link>
                    <Link to={'/alumni'} className="bg-slate-100 hover:bg-slate-50  p-2 shadow-md text-2xl flex items-center gap-1" >
                      <FaGraduationCap/>
                      <p className="text-xs text-slate-400">Alumni</p>
                    </Link>
                    <Link to={'/career'} className="bg-slate-100 hover:bg-slate-50  p-2 shadow-md text-2xl flex items-center gap-1" >
                      <GiStairsGoal/>
                      <p className="text-xs text-slate-400">Career</p>
                    </Link>
                    <Link to={'/contact'} className="bg-slate-100 hover:bg-slate-50  p-2 shadow-md text-2xl flex items-center gap-1" >
                      <RiContactsBook3Line/>
                      <p className="text-xs text-slate-400">Contact</p>
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </div>
  );
}
