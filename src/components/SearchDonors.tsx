import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';

const MOCK_DONORS = [
  { id: '1', name: 'John Doe', bloodType: 'A+', location: 'City Hospital', lastDonation: '2024-02-15' },
  { id: '2', name: 'Jane Smith', bloodType: 'O-', location: 'Downtown Clinic', lastDonation: '2024-02-10' },
  { id: '3', name: 'Mike Johnson', bloodType: 'B+', location: 'Central Hospital', lastDonation: '2024-02-01' },
];

export default function SearchDonors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [bloodType, setBloodType] = useState('');

  const filteredDonors = MOCK_DONORS.filter(donor => 
    (donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     donor.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (bloodType === '' || donor.bloodType === bloodType)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Find Blood Donors</h2>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            placeholder="Search by name or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="block w-full sm:w-48 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
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

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {filteredDonors.map((donor) => (
            <li key={donor.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-semibold">{donor.bloodType}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{donor.name}</div>
                    <div className="text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {donor.location}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
                    Contact
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}