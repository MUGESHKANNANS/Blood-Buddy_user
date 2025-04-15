export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'donor' | 'recipient';
  phoneNumber?: string;
  location?: {
    latitude: number;
    longitude: number;
    address: string;
  };
}

export interface DonorProfile extends User {
  bloodType: BloodType;
  isAvailable: boolean;
  lastDonationDate?: string;
  medicalConditions?: string[];
  donationHistory?: {
    date: string;
    recipient: string;
    hospital: string;
  }[];
  privacySettings: {
    showContact: boolean;
    showLocation: boolean;
    showHistory: boolean;
  };
}

export interface BloodRequest {
  id: string;
  requesterId: string;
  bloodType: BloodType;
  unitsNeeded: number;
  urgency: 'normal' | 'urgent' | 'emergency';
  hospital: {
    name: string;
    address: string;
    contact: string;
  };
  status: 'open' | 'in-progress' | 'fulfilled' | 'cancelled';
  createdAt: string;
}