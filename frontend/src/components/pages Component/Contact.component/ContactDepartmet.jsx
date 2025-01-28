import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


export default function ContactDepartmet() {
  return (
    <div className='max-w-5xl mx-4 md:mx-auto'>
      <h1 className='text-xl font-bold text-sky-900 py-4'>Contact</h1>
      <div>
        <Accordion type="single" collapsible className="w-full bg-slate-100 text-sky-900 p-4 rounded-xl">
            <AccordionItem value="item-1">
            <AccordionTrigger className='text-sky-800 font-bold'>Student Infromation Center</AccordionTrigger>
                <AccordionContent className='my-4'>
                        <p className='text-slate-500'>Phone : 0175555 9301</p>
                        <p className='text-slate-500'>Email : admission@bu.edu.bd</p>
                        <p className='text-slate-500'>Working Time : 09:00 AM - 5:00 PM</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
            <AccordionTrigger className='text-sky-800 font-bold'>Exam Controller Office</AccordionTrigger>
                <AccordionContent className='my-4'>
                        <p className='text-slate-500'>Phone : 0175555 9301</p>
                        <p className='text-slate-500'>Email : admission@bu.edu.bd</p>
                        <p className='text-slate-500'>Working Time : 09:00 AM - 5:00 PM</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
            <AccordionTrigger className='text-sky-800 font-bold'>Account Section</AccordionTrigger>
                <AccordionContent className='my-4'>
                        <p className='text-slate-500'>Phone : 0175555 9301</p>
                        <p className='text-slate-500'>Email : admission@bu.edu.bd</p>
                        <p className='text-slate-500'>Working Time : 09:00 AM - 5:00 PM</p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger className='text-sky-800 font-bold'>Admission Section</AccordionTrigger>
                    <AccordionContent className='my-4'>
                        <p className='text-slate-500'>Phone : 0175555 9301</p>
                        <p className='text-slate-500'>Email : admission@bu.edu.bd</p>
                        <p className='text-slate-500'>Working Time : 09:00 AM - 5:00 PM</p>
                    </AccordionContent>
            </AccordionItem>


            <AccordionItem value="item-5">
                <AccordionTrigger className='text-sky-800 font-bold'>Versity medical center</AccordionTrigger>
                    <AccordionContent className='my-4'>
                        <p className='text-slate-500'>Phone : 0175555 9301</p>
                        <p className='text-slate-500'>Email : admission@bu.edu.bd</p>
                        <p className='text-slate-500'>Working Time : 09:00 AM - 5:00 PM</p>
                    </AccordionContent>
            </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
