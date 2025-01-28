import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const events = [
  { name: 'Winter Fest', date: '25 Jan 2025', description: 'A celebration of the winter season with music, food, and activities.' },
  { name: 'Spring Carnival', date: '15 Mar 2025', description: 'An exciting carnival to welcome spring with fun games and rides.' },
  { name: 'Summer Bash', date: '20 Jun 2025', description: 'A summer event filled with beach games, music, and refreshments.' },
  { name: 'Autumn Fiesta', date: '10 Sep 2025', description: 'A fiesta to enjoy the autumn vibes with dance, food, and crafts.' },
  { name: 'Halloween Night', date: '31 Oct 2025', description: 'A spooky Halloween night with costumes, trick-or-treat, and haunted house.' },
  { name: 'Christmas Gala', date: '25 Dec 2025', description: 'A grand Christmas celebration with carols, gift exchange, and feast.' },
];

export default function FutureEventDate() {
  return (
    <div className="max-w-7xl md:mx-auto mx-4">
      <h1 className="text-xl font-bold text-sky-900 py-4">Future Event Dates</h1>
      <div>
        <Accordion type="single" collapsible className="w-full bg-slate-100 text-sky-900 p-4 rounded-xl">
          {events.map((event, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-sky-800 font-bold">{event.name}</AccordionTrigger>
              <AccordionContent className="my-4">
                <p className="text-slate-500">{event.description}</p>
                <p className="text-slate-500">{event.date}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
