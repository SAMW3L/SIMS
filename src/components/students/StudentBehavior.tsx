import React from 'react';
import { Student } from '../../types';
import { ThumbsUp, AlertTriangle } from 'lucide-react';

interface StudentBehaviorProps {
  student: Student;
}

export default function StudentBehavior({ student }: StudentBehaviorProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Behavior Record</h2>
        <button className="btn btn-primary">Add Entry</button>
      </div>

      <div className="space-y-4">
        {student.behaviorRecord.incidents.map((incident, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${
              incident.type === 'positive'
                ? 'border-green-100 bg-green-50'
                : 'border-red-100 bg-red-50'
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-2 rounded-full ${
                  incident.type === 'positive'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                }`}
              >
                {incident.type === 'positive' ? (
                  <ThumbsUp className="w-5 h-5" />
                ) : (
                  <AlertTriangle className="w-5 h-5" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">{incident.date}</p>
                  <p className="text-sm text-gray-500">Reported by: {incident.reportedBy}</p>
                </div>
                <p className="mt-1 text-gray-900">{incident.description}</p>
                {incident.actionTaken && (
                  <p className="mt-2 text-sm text-gray-600">
                    <strong>Action Taken:</strong> {incident.actionTaken}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}