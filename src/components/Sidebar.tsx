import React from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  Settings,
  Bell,
  Home
} from 'lucide-react';
import { User } from '../types';

interface SidebarProps {
  user: User;
}

export default function Sidebar({ user }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: Users, label: 'Students', href: '/students' },
    { icon: GraduationCap, label: 'Teachers', href: '/teachers' },
    { icon: BookOpen, label: 'Courses', href: '/courses' },
    { icon: Calendar, label: 'Schedule', href: '/schedule' },
    { icon: MessageSquare, label: 'Messages', href: '/messages' },
  ];

  return (
    <div className="h-screen w-64 bg-indigo-900 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="w-8 h-8" />
        <h1 className="text-xl font-bold">EduManager</h1>
      </div>

      <div className="space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-800 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-indigo-800">
          <img
            src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}`}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-indigo-300 capitalize">{user.role}</p>
          </div>
          <Settings className="w-5 h-5 text-indigo-300 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
}