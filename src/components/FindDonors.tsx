import React, { useState } from 'react';
import { Search, MapPin, Calendar, Heart, AlertCircle } from 'lucide-react';

interface DonorProfile {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  bloodType: string;
  phone: string;
  email?: string;
  city: string;
  lastDonation: string;
  medicalConditions?: string;
  isAvailable: boolean;
}

const MOCK_DONORS: DonorProfile[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 28,
    gender: 'Male',
    bloodType: 'A+',
    phone: '+91 98765 43210',
    email: 'john@example.com',
    city: 'Chennai',
    lastDonation: '2024-02-15',
    isAvailable: true
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 32,
    gender: 'Female',
    bloodType: 'O-',
    phone: '+91 98765 43211',
    city: 'Coimbatore',
    lastDonation: '2024-01-20',
    medicalConditions: 'None',
    isAvailable: true
  }
];

export default function FindDonors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [selectedDonor, setSelectedDonor] = useState<DonorProfile | null>(null);

  const filteredDonors = MOCK_DONORS.filter(donor => 
    (donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     donor.city.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (bloodType === '' || donor.bloodType === bloodType)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Find Blood Donors</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  placeholder="Search by name or city"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="block w-full sm:w-48 pl-3 pr-10 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
              >
                <option value="">All Blood Types</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <ul className="divide-y divide-gray-100">
              {filteredDonors.map((donor) => (
                <li 
                  key={donor.id} 
                  className="py-4 cursor-pointer hover:bg-gray-50 transition duration-150"
                  onClick={() => setSelectedDonor(donor)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                        <span className="text-red-600 font-semibold">{donor.bloodType}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{donor.name}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        <p>{donor.city}</p>
                      </div>
                    </div>
                    <div>
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        donor.isAvailable 
                          ? 'bg-green-50 text-green-700 border border-green-100'
                          : 'bg-gray-50 text-gray-600 border border-gray-100'
                      }`}>
                        {donor.isAvailable ? 'Available' : 'Unavailable'}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          {selectedDonor ? (
            <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Donor Details</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Full Name</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedDonor.name}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Age</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedDonor.age} years</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Gender</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedDonor.gender}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Blood Group</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedDonor.bloodType}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Contact Number</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedDonor.phone}</p>
                </div>
                {selectedDonor.email && (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedDonor.email}</p>
                  </div>
                )}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">City</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedDonor.city}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Last Donation Date</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedDonor.lastDonation}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Medical Conditions</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedDonor.medicalConditions || 'None reported'}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Availability Status</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedDonor.isAvailable ? 'Available' : 'Not Available'}</p>
                </div>
                <button className="w-full mt-6 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Contact Donor
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 text-center">
              <Heart className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No donor selected</h3>
              <p className="mt-1 text-sm text-gray-500">
                Click on a donor to view their detailed information
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}