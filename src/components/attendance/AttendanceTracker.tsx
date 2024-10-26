import React from 'react';
import { Student, Attendance } from '../../types';
import { Calendar, Check, X, Clock } from 'lucide-react';

interface AttendanceTrackerProps {
  students: Student[];
  attendance: Attendance[];
  onMarkAttendance: (studentId: string, status: Attendance['status']) => void;
}

export default function AttendanceTracker({ 
  students, 
  attendance,
  onMarkAttendance 
}: AttendanceTrackerProps) {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">Attendance Tracker</h2>
            <p className="text-sm text-gray-500">
              <Calendar className="w-4 h-4 inline mr-1" />
              {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary">Previous Day</button>
            <button className="btn btn-secondary">Next Day</button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => {
              const studentAttendance = attendance.find(
                (a) => a.studentId === student.id && a.date === today
              );

              return (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${student.firstName}+${student.lastName}`}
                        alt=""
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {student.firstName} {student.lastName}
                        </div>
                        <div className="text-sm text-gray-500">{student.studentId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      !studentAttendance ? 'bg-gray-100 text-gray-800' :
                      studentAttendance.status === 'present' ? 'bg-green-100 text-green-800' :
                      studentAttendance.status === 'absent' ? 'bg-red-100 text-red-800' :
                      studentAttendance.status === 'late' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {studentAttendance?.status || 'Not Marked'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {studentAttendance ? new Date().toLocaleTimeString() : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => onMarkAttendance(student.id, 'present')}
                        className="text-green-600 hover:text-green-900"
                      >
                        <Check className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => onMarkAttendance(student.id, 'absent')}
                        className="text-red-600 hover:text-red-900"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => onMarkAttendance(student.id, 'late')}
                        className="text-yellow-600 hover:text-yellow-900"
                      >
                        <Clock className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}