import React from 'react';
import { 
  Users, 
  BookOpen, 
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

const stats = [
  { 
    label: 'Total Students',
    value: '2,847',
    icon: Users,
    change: '+12%',
    positive: true
  },
  {
    label: 'Active Courses',
    value: '186',
    icon: BookOpen,
    change: '+5%',
    positive: true
  },
  {
    label: 'Attendance Rate',
    value: '94.2%',
    icon: Calendar,
    change: '-2%',
    positive: false
  }
];

const recentActivities = [
  {
    id: 1,
    type: 'grade',
    message: 'New grades posted for Mathematics 101',
    time: '2 hours ago',
    icon: CheckCircle,
    color: 'text-green-500'
  },
  {
    id: 2,
    type: 'alert',
    message: 'Student attendance below 80% in Physics',
    time: '3 hours ago',
    icon: AlertCircle,
    color: 'text-red-500'
  },
  {
    id: 3,
    type: 'performance',
    message: 'Class average improved by 15% in English',
    time: '5 hours ago',
    icon: TrendingUp,
    color: 'text-blue-500'
  }
];

export default function Dashboard() {
  return (
    <div className="p-6 ml-64 mt-16">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <stat.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <span className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4">
                <div className={`mt-1 ${activity.color}`}>
                  <activity.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">{activity.message}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">15</span>
              </div>
              <div>
                <h4 className="font-medium">Parent-Teacher Conference</h4>
                <p className="text-sm text-gray-600">3:00 PM - 6:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">18</span>
              </div>
              <div>
                <h4 className="font-medium">Science Fair</h4>
                <p className="text-sm text-gray-600">9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}