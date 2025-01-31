import * as React from "react"
 
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export function CertificateConfirmBox() {
  return (
    <Card className="w-[400px] bg-white shadow-xl text-white">
      <CardHeader>
        <CardTitle className="text-xl text-red-400">Get your Certificate from</CardTitle>
        <CardDescription className="text-gray-600 text-sm">Bangladesh University</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="studentId" className="text-gray-700">Student ID :</Label>
              <Input className="bg-white text-gray-700" id="studentId" placeholder="Enter your Id" />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-gray-700">Password :</Label>
                <Input className="bg-white text-gray-700" id="password" placeholder="Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="text-gray-800 rounded-full">Cancel</Button>
        <Button className="bg-red-400 rounded-full hover:bg-red-600">Login</Button>
      </CardFooter>
    </Card>
  )
}