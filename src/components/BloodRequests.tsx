import React, { useState } from 'react';
import { Calendar, MapPin, AlertCircle, Clock } from 'lucide-react';

interface BloodRequest {
  id: string;
  patientName: string;
  bloodType: string;
  unitsNeeded: number;
  hospital: string;
  city: string;
  urgency: 'Normal' | 'Urgent' | 'Emergency';
  requiredDate: string;
  contactName: string;
  contactPhone: string;
  additionalInfo?: string;
  status: 'Open' | 'In Progress' | 'Fulfilled';
}

const MOCK_REQUESTS: BloodRequest[] = [
  {
    id: '1',
    patientName: 'Rahul Kumar',
    bloodType: 'B+',
    unitsNeeded: 2,
    hospital: 'City General Hospital',
    city: 'Chennai',
    urgency: 'Urgent',
    requiredDate: '2024-03-20',
    contactName: 'Priya Kumar',
    contactPhone: '+91 98765 43210',
    status: 'Open'
  },
  {
    id: '2',
    patientName: 'Anita Sharma',
    bloodType: 'O-',
    unitsNeeded: 1,
    hospital: 'Apollo Hospital',
    city: 'Coimbatore',
    urgency: 'Emergency',
    requiredDate: '2024-03-19',
    contactName: 'Rajesh Sharma',
    contactPhone: '+91 98765 43211',
    additionalInfo: 'Surgery scheduled for tomorrow',
    status: 'In Progress'
  }
];

export default function BloodRequests() {
  const [selectedRequest, setSelectedRequest] = useState<BloodRequest | null>(null);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Emergency':
        return 'bg-red-50 text-red-700 border border-red-100';
      case 'Urgent':
        return 'bg-yellow-50 text-yellow-700 border border-yellow-100';
      default:
        return 'bg-green-50 text-green-700 border border-green-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-blue-50 text-blue-700 border border-blue-100';
      case 'In Progress':
        return 'bg-yellow-50 text-yellow-700 border border-yellow-100';
      case 'Fulfilled':
        return 'bg-green-50 text-green-700 border border-green-100';
      default:
        return 'bg-gray-50 text-gray-600 border border-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Blood Requests</h2>
        <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700">
          Create New Request
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100">
            <ul className="divide-y divide-gray-100">
              {MOCK_REQUESTS.map((request) => (
                <li
                  key={request.id}
                  className="p-6 cursor-pointer hover:bg-gray-50 transition duration-150"
                  onClick={() => setSelectedRequest(request)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                            <span className="text-red-600 font-semibold">{request.bloodType}</span>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            {request.unitsNeeded} units needed
                          </p>
                        </div>
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getUrgencyColor(request.urgency)}`}>
                          {request.urgency}
                        </span>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          <p>{request.hospital}, {request.city}</p>
                        </div>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          <p>Required by {request.requiredDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          {selectedRequest ? (
            <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Request Details</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Patient Name</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedRequest.patientName}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Blood Type Needed</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedRequest.bloodType}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Units Required</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedRequest.unitsNeeded}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Hospital</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedRequest.hospital}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">City</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedRequest.city}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Required Date</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedRequest.requiredDate}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Contact Person</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedRequest.contactName}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Contact Number</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedRequest.contactPhone}</p>
                </div>
                {selectedRequest.additionalInfo && (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <label className="text-sm font-medium text-gray-500">Additional Information</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedRequest.additionalInfo}</p>
                  </div>
                )}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <span className={`mt-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(selectedRequest.status)}`}>
                    {selectedRequest.status}
                  </span>
                </div>
                <button className="w-full mt-6 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Respond to Request
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 text-center">
              <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No request selected</h3>
              <p className="mt-1 text-sm text-gray-500">
                Click on a request to view detailed information
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}