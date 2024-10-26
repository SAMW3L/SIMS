import React from 'react';
import { Course, Event } from '../../types';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface ScheduleManagerProps {
  courses: Course[];
  events: Event[];
}

export default function ScheduleManager({ courses, events }: ScheduleManagerProps) {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = Array.from({ length: 12 }, (_, i) => i + 8); // 8 AM to 7 PM

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Schedule</h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary">Previous Week</button>
          <button className="btn btn-secondary">Next Week</button>
          <button className="btn btn-primary">Add Event</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-6 divide-x">
          {/* Time column */}
          <div className="w-24">
            <div className="h-16 border-b"></div>
            {timeSlots.map((time) => (
              <div key={time} className="h-20 border-b p-2">
                <span className="text-sm text-gray-500">
                  {time % 12 || 12}:00 {time < 12 ? 'AM' : 'PM'}
                </span>
              </div>
            ))}
          </div>

          {/* Days columns */}
          {daysOfWeek.map((day) => (
            <div key={day} className="flex-1">
              <div className="h-16 border-b p-4">
                <h3 className="font-medium">{day}</h3>
              </div>
              {timeSlots.map((time) => {
                const coursesAtTime = courses.filter((course) =>
                  course.schedule.some(
                    (s) =>
                      s.dayOfWeek === day &&
                      parseInt(s.startTime.split(':')[0]) === time
                  )
                );

                const eventsAtTime = events.filter((event) => {
                  const eventDate = new Date(event.startDate);
                  return (
                    daysOfWeek[eventDate.getDay() - 1] === day &&
                    eventDate.getHours() === time
                  );
                });

                return (
                  <div key={`${day}-${time}`} className="h-20 border-b p-2">
                    {coursesAtTime.map((course) => (
                      <div
                        key={course.id}
                        className="mb-1 p-2 rounded bg-indigo-100 text-indigo-800 text-sm"
                      >
                        <div className="font-medium">{course.name}</div>
                        <div className="flex items-center gap-1 text-xs">
                          <Clock className="w-3 h-3" />
                          {course.schedule[0].startTime} - {course.schedule[0].endTime}
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <MapPin className="w-3 h-3" />
                          {course.schedule[0].room}
                        </div>
                      </div>
                    ))}
                    {eventsAtTime.map((event) => (
                      <div
                        key={event.id}
                        className="mb-1 p-2 rounded bg-green-100 text-green-800 text-sm"
                      >
                        <div className="font-medium">{event.title}</div>
                        <div className="flex items-center gap-1 text-xs">
                          <Clock className="w-3 h-3" />
                          {new Date(event.startDate).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}