import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

export default function TransportRoute() {
  return (
    <div className='max-w-5xl mx-4 md:mx-auto'>
      <h1 className='text-xl font-bold text-sky-900 py-4'>Schedule</h1>
      <div>
        <Accordion type="single" collapsible className="w-full bg-slate-100 text-sky-900 p-4 rounded-xl">
            <AccordionItem value="item-1">
            <AccordionTrigger className='text-sky-800'>Route - 01 : Mirput to Bngladesh University</AccordionTrigger>
                <AccordionContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Pickup Time</TableHead>
                            <TableHead>Drop Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>08 : 45 AM </TableCell>
                            <TableCell>11 : 45 AM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>11 : 45 AM </TableCell>
                            <TableCell>01 : 45 PM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>02 : 45 PM </TableCell>
                            <TableCell>05 : 00 PM</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
            <AccordionTrigger className='text-sky-800'>Route - 02 : ikbal Road to Bngladesh University</AccordionTrigger>
                <AccordionContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Pickup Time</TableHead>
                            <TableHead>Drop Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>08 : 45 AM </TableCell>
                            <TableCell>11 : 45 AM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>11 : 45 AM </TableCell>
                            <TableCell>01 : 45 PM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>02 : 45 PM </TableCell>
                            <TableCell>05 : 00 PM</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
            <AccordionTrigger className='text-sky-800'>Route - 03 : Science Lab to Bngladesh University</AccordionTrigger>
                <AccordionContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Pickup Time</TableHead>
                            <TableHead>Drop Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>08 : 45 AM </TableCell>
                            <TableCell>11 : 45 AM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>11 : 45 AM </TableCell>
                            <TableCell>01 : 45 PM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>02 : 45 PM </TableCell>
                            <TableCell>05 : 00 PM</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
            <AccordionTrigger className='text-sky-800'>Route - 04 : Gabtoli to Bngladesh University</AccordionTrigger>
                <AccordionContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Pickup Time</TableHead>
                            <TableHead>Drop Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>08 : 45 AM </TableCell>
                            <TableCell>11 : 45 AM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>11 : 45 AM </TableCell>
                            <TableCell>01 : 45 PM</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>02 : 45 PM </TableCell>
                            <TableCell>05 : 00 PM</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </AccordionContent>
            </AccordionItem>

        </Accordion>
      </div>
    </div>
  )
}
