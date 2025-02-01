import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import blogImage1 from '../../../assets/commonPhoto/home1.jpg'
import blogImage2 from '../../../assets/commonPhoto/home2.jpg'
import blogImage3 from '../../../assets/commonPhoto/home3.jpg'
import { Link } from "react-router-dom"

export function Notices() {

  const notices = [
    {data: 16, notice: "Exam Schedule Released"},
    {data: 20, notice: "Semester Break Announcement"},
    {data: 25, notice: "Exam Preparation Tips"},
    {data: 26, notice: "Post-Vacation Class Resumption"},
    {data: 30, notice: "Class start "},
  ]

  const Bus = [
    {Time: "8:00 AM - 9:00Am",  place: "Mirpur to Campass"},
    {Time: "10:00AM - 11:00Am",  place: "iqbal road to Campass"},
    {Time: "1:00 AM - 2:00 Pm",  place: "capass road to Mirpur"},
    {Time: "3:00 Pm - 3:30 Pm",  place: "capass road to iqbal road"},
    {Time: "5:00 Pm - 5:00 Pm",  place: "capass road to iqbal road"},
  ]

  const Blog = [
    {imgSrc: blogImage1 , name: "Nazmul hasan" , Dept: "CSE", Title: "The Future of Web Development"},
    {imgSrc: blogImage2 , name: "Nazmul hasan" , Dept: "BBA", Title: "Mastering Full-Stack JavaScript"},
    {imgSrc: blogImage3 , name: "Nazmul hasan" , Dept: "Law", Title: "10 Tips for Clean Code"},
  ]


  return (
    <Tabs defaultValue="Notices" className="max-w-5xl md:mx-auto mt-6 bg-slate-50 rounded-xl p-2 py-4 md:my-8 mx-5">
      <TabsList className="flex gap-2 md:gap-4 items-center justify-start py-2 bg-slate-50 my-5">
        <TabsTrigger value="Notices"  className='md:px-6 px-4 py-2 rounded-full border-red-400 border '>Notices</TabsTrigger>
        <TabsTrigger value="BusSchedule" className='md:px-6 px-4 py-2 rounded-full border-red-400 border '>Bus Schedule</TabsTrigger>
        <TabsTrigger value="Blogs" className='md:px-6 px-4 py-2 rounded-full border-red-400 border '>Blogs</TabsTrigger>
      </TabsList>

      
      <TabsContent value="Notices">
      <Table className='bg-white shadow-xl'>
        <TableHeader>
            <TableRow>
              <TableHead className="md:w-[70px] w-[50px]">Date</TableHead>
              <TableHead>Notice</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
          {
            notices.map((item, index)=>(
              <TableRow key={index} className='border-t border-gray-200'>
                <TableCell className="font-semibold text-sky-950">{item.data}</TableCell>
                <TableCell className='line-clamp-1 text-sky-950'>{item.notice}</TableCell>
              </TableRow>
             
            ))
          }
        </TableBody>
      </Table>
      </TabsContent>

      <TabsContent value="BusSchedule">
        <Table className='bg-white shadow-xl'>
          <TableHeader>
              <TableRow>
                <TableHead className="md:w-[200px] w-[150px]">Time</TableHead>
                <TableHead>Schedule</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
            {
              Bus.map((item, index)=>(
                <TableRow key={index} className='border-t border-gray-200'>
                  <TableCell className="font-semibold text-sky-950">{item.Time}</TableCell>
                  <TableCell className='line-clamp-1 text-sky-950'>{item.place}</TableCell>
                </TableRow>
              
              ))
            }
          </TableBody>
        </Table>
      </TabsContent>

      <TabsContent value="Blogs">
        <Table className='bg-white shadow-xl'>
            <TableHeader>
                <TableRow>
                  <TableHead className="md:w-[150px] w-[100px]">Blog Image</TableHead>
                  <TableHead>Blos Title</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
              {
                Blog.map((item, index)=>(
                  <TableRow key={index}  className='border-t border-gray-200 cursor-pointer'>
                    <TableCell className="font-semibold text-sky-950"><img src={item.imgSrc} className="w-24 object-cover"/></TableCell>
                    <TableCell className=' text-sky-950'>
                      <Link to={'single/blog'} className=" line-clamp-2 font-semibold">{item.Title}</Link>
                      <h2 className="text-sm ">{item.name}</h2>
                      <h2 className="text-xs">{item.Dept}</h2>
                    </TableCell>
                  </TableRow>
                
                ))
              }
            </TableBody>
          </Table>
      </TabsContent>
    </Tabs>
  )
}
