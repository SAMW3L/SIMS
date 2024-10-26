import React from 'react';
import { Course } from '../../types';
import { Search, Filter, Plus, Users, Clock } from 'lucide-react';

interface CourseListProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

export default function CourseList({ courses, onSelectCourse }: CourseListProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Courses</h1>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onSelectCourse(course)}
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{course.name}</h3>
                  <p className="text-sm text-gray-500">{course.code}</p>
                </div>
              </div>
              
              <p className="mt-2 text-gray-600 line-clamp-2">{course.description}</p>
              
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-1 text-gray-500">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{course.enrolled.length}/{course.capacity}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{course.schedule[0]?.dayOfWeek}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}