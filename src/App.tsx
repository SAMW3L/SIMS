import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Dashboard from './components/Dashboard';
import StudentList from './components/students/StudentList';
import CourseList from './components/courses/CourseList';
import TeacherDashboard from './components/teachers/TeacherDashboard';
import AttendanceTracker from './components/attendance/AttendanceTracker';
import MessageCenter from './components/messages/MessageCenter';
import ScheduleManager from './components/schedule/ScheduleManager';
import ProtectedRoute from './components/layout/ProtectedRoute';
import Layout from './components/layout/Layout';
import { useAuthStore } from './store/authStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <Layout>
                <StudentList students={[]} onSelectStudent={() => {}} />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Layout>
                <CourseList courses={[]} onSelectCourse={() => {}} />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/teachers"
          element={
            <ProtectedRoute>
              <Layout>
                <TeacherDashboard courses={[]} upcomingAssignments={[]} />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/attendance"
          element={
            <ProtectedRoute>
              <Layout>
                <AttendanceTracker 
                  students={[]} 
                  attendance={[]} 
                  onMarkAttendance={() => {}} 
                />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <Layout>
                <MessageCenter 
                  messages={[]} 
                  currentUser={useAuthStore.getState().user!}
                  onSendMessage={() => {}} 
                />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/schedule"
          element={
            <ProtectedRoute>
              <Layout>
                <ScheduleManager courses={[]} events={[]} />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;