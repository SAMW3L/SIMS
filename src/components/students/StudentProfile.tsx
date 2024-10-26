import React from 'react';
import { User, Student } from '../../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  AlertCircle,
  Activity,
  BookOpen,
  Calendar
} from 'lucide-react';

interface StudentProfileProps {
  student: Student;
}

export default function StudentProfile({ student }: StudentProfileProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-start gap-6">
          <img
            src={`https://ui-avatars.com/api/?name=${student.firstName}+${student.lastName}`}
            alt={`${student.firstName} ${student.lastName}`}
            className="w-24 h-24 rounded-full"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{student.firstName} {student.lastName}</h1>
            <p className="text-gray-600">Student ID: {student.studentId}</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{student.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{student.contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{student.contactInfo.address}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-primary">Edit Profile</button>
            <button className="btn btn-secondary">Contact Parent</button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold">Current GPA</h3>
          </div>
          <p className="text-3xl font-bold">{student.academicRecord.gpa}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-green-500" />
            <h3 className="font-semibold">Attendance Rate</h3>
          </div>
          <p className="text-3xl font-bold">{student.academicRecord.attendance}%</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-5 h-5 text-purple-500" />
            <h3 className="font-semibold">Current Courses</h3>
          </div>
          <p className="text-3xl font-bold">{student.academicRecord.currentCourses.length}</p>
        </div>
      </div>

      {/* Health Information */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Health Information</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Allergies</h3>
            <ul className="list-disc list-inside space-y-1">
              {student.healthInfo.allergies.map((allergy, index) => (
                <li key={index} className="text-gray-600">{allergy}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Medications</h3>
            <ul className="list-disc list-inside space-y-1">
              {student.healthInfo.medications.map((medication, index) => (
                <li key={index} className="text-gray-600">{medication}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-medium mb-2">Emergency Contact</h3>
          <div className="flex items-center gap-2 text-gray-600">
            <AlertCircle className="w-4 h-4" />
            <span>
              {student.contactInfo.emergencyContact.name} ({student.contactInfo.emergencyContact.relationship}) - 
              {student.contactInfo.emergencyContact.phone}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}