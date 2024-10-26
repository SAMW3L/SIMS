export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'teacher' | 'parent' | 'student';
  avatar?: string;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  grade: number;
  studentId: string;
  parentId: string;
  contactInfo: {
    address: string;
    phone: string;
    emergencyContact: {
      name: string;
      relationship: string;
      phone: string;
    };
  };
  healthInfo: {
    allergies: string[];
    medications: string[];
    conditions: string[];
    vaccinations: {
      name: string;
      date: string;
    }[];
  };
  academicRecord: {
    gpa: number;
    attendance: number;
    currentCourses: string[];
    transcripts: {
      year: string;
      semester: string;
      courses: {
        name: string;
        grade: string;
        credits: number;
      }[];
    }[];
  };
  behaviorRecord: {
    incidents: {
      date: string;
      type: 'positive' | 'negative';
      description: string;
      actionTaken?: string;
      reportedBy: string;
    }[];
  };
}

export interface Course {
  id: string;
  code: string;
  name: string;
  description: string;
  teacherId: string;
  schedule: {
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    room: string;
  }[];
  capacity: number;
  enrolled: string[];
  waitlist: string[];
  assignments: Assignment[];
  announcements: {
    id: string;
    date: string;
    title: string;
    content: string;
  }[];
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  description: string;
  type: 'homework' | 'quiz' | 'test' | 'project';
  dueDate: string;
  maxScore: number;
  weight: number;
  resources?: {
    title: string;
    url: string;
  }[];
}

export interface Grade {
  studentId: string;
  courseId: string;
  assignmentId: string;
  score: number;
  feedback: string;
  submittedDate: string;
  gradedBy: string;
  gradedDate: string;
}

export interface Attendance {
  studentId: string;
  courseId: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  notes?: string;
}

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  subject: string;
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: {
    name: string;
    url: string;
  }[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  type: 'school' | 'class' | 'exam' | 'meeting';
  location?: string;
  attendees: string[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'document' | 'video' | 'link';
  url: string;
  tags: string[];
  uploadedBy: string;
  uploadDate: string;
  accessLevel: 'public' | 'student' | 'teacher' | 'admin';
}