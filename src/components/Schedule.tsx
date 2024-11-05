import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Schedule() {
  const schedule = [
    {
      date: "March 15",
      events: [
        {
          time: "9:00 AM - 12:00 PM",
          title: "Algorithm Masterclass",
          description: "Deep dive into advanced algorithmic concepts",
          instructor: "Sarah Chen",
        },
        {
          time: "2:00 PM - 5:00 PM",
          title: "Problem Solving Strategies",
          description: "Learn effective approaches to competitive programming",
          instructor: "Michael Rodriguez",
        },
      ],
    },
    {
      date: "March 16",
      events: [
        {
          time: "9:00 AM - 12:00 PM",
          title: "System Design Workshop",
          description: "Learn how to design scalable systems",
          instructor: "David Kim",
        },
        {
          time: "2:00 PM - 5:00 PM",
          title: "Advanced Data Structures",
          description: "Master complex data structures",
          instructor: "Sarah Chen",
        },
      ],
    },
    {
      date: "March 17",
      events: [
        {
          time: "10:00 AM - 4:00 PM",
          title: "Mock Competition",
          description: "Full competition simulation with real-time feedback",
          instructor: "All Coaches",
        },
      ],
    },
  ];

  return (
    <div id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Bootcamp Schedule</h2>
          <p className="text-xl text-gray-600">Three days of intensive training with industry experts</p>
        </div>
        
        <div className="grid gap-8">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-yellow-500 text-white p-4">
                <h3 className="text-xl font-semibold">Day {dayIndex + 1} - {day.date}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="p-6">
                    <div className="flex flex-wrap gap-6 items-start">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            Instructor: {event.instructor}
                          </div>
                        </div>
                      </div>
                      <button className="group bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition flex items-center">
                        Register
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}