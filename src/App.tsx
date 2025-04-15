import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import FindDonors from './components/FindDonors';
import BloodRequests from './components/BloodRequests';

function AppContent() {
  const { user, login, register } = useAuth();

  const handleSubmit = async (data: any) => {
    try {
      if (data.name) {
        await register(data);
      } else {
        await login(data.email, data.password);
      }
    } catch (error) {
      console.error('Authentication error:', error);
      alert('Invalid credentials');
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AuthForm type="login" onSubmit={handleSubmit} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Dashboard />
      <FindDonors />
      <BloodRequests />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;