import React from 'react';
import { Course, Student, Assignment } from '../../types';
import { Calendar, Users, BookOpen, CheckSquare } from 'lucide-react';

interface TeacherDashboardProps {
  courses: Course[];
  upcomingAssignments: Assignment[];
}

export default function TeacherDashboard({ courses, upcomingAssignments }: TeacherDashboardProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <h3 className="font-semibold">Active Courses</h3>
          </div>
          <p className="text-3xl font-bold">{courses.length}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold">Total Students</h3>
          </div>
          <p className="text-3xl font-bold">
            {courses.reduce((acc, course) => acc + course.enrolled.length, 0)}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <CheckSquare className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold">Pending Assignments</h3>
          </div>
          <p className="text-3xl font-bold">{upcomingAssignments.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Classes</h2>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium">{course.name}</h4>
                  <p className="text-sm text-gray-600">
                    {course.schedule[0]?.dayOfWeek} {course.schedule[0]?.startTime} - {course.schedule[0]?.endTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Assignments</h2>
          <div className="space-y-4">
            {upcomingAssignments.map((assignment) => (
              <div key={assignment.id} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
                <div className="flex-1">
                  <h4 className="font-medium">{assignment.title}</h4>
                  <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  assignment.type === 'homework' ? 'bg-blue-100 text-blue-800' :
                  assignment.type === 'quiz' ? 'bg-green-100 text-green-800' :
                  assignment.type === 'test' ? 'bg-red-100 text-red-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {assignment.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}