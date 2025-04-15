import React from 'react';
import { Menu, UserCircle, Bell, LogOut } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-400 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-red-600">Blood Buddy</span>
            </div>
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <a href="/dashboard" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
              Dashboard
            </a>
            <a href="/donors" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
              Find Donors
            </a>
            <a href="/requests" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
              Blood Requests
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-red-600">
              <Bell className="h-6 w-6" />
            </button>
            <button className="text-gray-400 hover:text-red-600">
              <UserCircle className="h-6 w-6" />
            </button>
            <button className="text-gray-400 hover:text-red-600">
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}