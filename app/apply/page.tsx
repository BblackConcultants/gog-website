'use client';


import Image from 'next/image';
import React, { useState, FormEvent } from 'react';
import type { IconType } from 'react-icons';
import { 
  FaCheckCircle, 
  FaUser, 
  FaGraduationCap, 
  FaBriefcase,
  FaBuilding,
  FaUsers,
  // Navigation icons will be used in future updates
  // FaChevronRight,
  // FaChevronLeft
} from 'react-icons/fa';

type TabType = 'learner' | 'programme' | 'employment' | 'provider' | 'guardian';

const tabs: { id: TabType; label: string; icon: IconType }[] = [
  { id: 'learner', label: 'Learner Details', icon: FaUser },
  { id: 'programme', label: 'Programme Details', icon: FaGraduationCap },
  { id: 'employment', label: 'Employment Details', icon: FaBriefcase },
  { id: 'provider', label: 'Provider Details', icon: FaBuilding },
  { id: 'guardian', label: 'Guardian Details', icon: FaUsers },
];

const titles = ['Mr', 'Mrs', 'Miss', 'Dr', 'Prof', 'Rev'] as const;
type Gender = 'Male' | 'Female' | 'Other';
type Ethnicity = 'Black African' | 'Coloured' | 'Indian' | 'White' | 'Other';

interface FormData {
  // Learner Details
  title?: string;
  firstName?: string;
  surname?: string;
  idNumber?: string;
  citizenship?: string;
  dateOfBirth?: string;
  gender?: Gender;
  ethnicity?: Ethnicity;
  homeAddress?: string;
  postalAddress?: string;
  email?: string;
  phone?: string;
  cell?: string;

  // Programme Details
  programmeChoice?: 'certificate' | 'diploma' | 'degree';
  studyMode?: 'fullTime' | 'partTime' | 'distance';
  startDate?: string;
  previousQualification?: string;

  // Employment Details
  employmentStatus?: 'employed' | 'selfEmployed' | 'unemployed' | 'student';
  occupation?: string;
  employer?: string;
  employmentStartDate?: string;
  employmentEndDate?: string;

  // Provider Details
  providerName?: string;
  providerAccreditation?: string;
  providerAddress?: string;
  providerContact?: string;
  providerPhone?: string;

  // Guardian Details
  guardianTitle?: string;
  guardianFirstName?: string;
  guardianSurname?: string;
  guardianId?: string;
  guardianHomeAddress?: string;
  guardianPostalAddress?: string;
  guardianEmail?: string;
  guardianPhone?: string;
  guardianCell?: string;
}

export default function Apply() {
  const [activeTab, setActiveTab] = useState<TabType>('learner');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({});

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  return (
    <div>
      
      {/* Apply Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/apply-hero.jpg"
          alt="Apply Now"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 flex items-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Apply Now
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-delay">
              Take the first step towards your theological education
            </p>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-[#1A2B4C] mb-8 text-center">Student Application Form</h2>
            
            {/* Tabs */}
            <div className="flex space-x-4 mb-8 border-b border-gray-200">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center space-x-2 pb-4 px-4 border-b-2 transition-colors ${activeTab === tab.id ? 'border-[#3399FF] text-[#3399FF]' : 'border-transparent text-gray-500 hover:text-[#1A2B4C]'}`}
                >
                  <div className="w-5 h-5">
                    {React.createElement(tab.icon)}
                  </div>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-gray-200 rounded-full mb-8">
              <div 
                className="h-full bg-[#3399FF] rounded-full transition-all duration-500"
                style={{ width: `${((tabs.findIndex(t => t.id === activeTab) + 1) / tabs.length) * 100}%` }}
              />
            </div>

            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Form Content */}
                <div className="space-y-6">
                  {activeTab === 'programme' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="programmeChoice" className="block text-sm font-medium text-gray-700">Programme Choice</label>
                          <select
                            id="programmeChoice"
                            name="programmeChoice"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.programmeChoice || ''}
                          >
                            <option value="">Select Programme</option>
                            <option value="certificate">Certificate</option>
                            <option value="diploma">Diploma</option>
                            <option value="degree">Degree</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="studyMode" className="block text-sm font-medium text-gray-700">Study Mode</label>
                          <select
                            id="studyMode"
                            name="studyMode"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.studyMode || ''}
                          >
                            <option value="">Select Study Mode</option>
                            <option value="fullTime">Full Time</option>
                            <option value="partTime">Part Time</option>
                            <option value="distance">Distance Learning</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Preferred Start Date</label>
                          <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.startDate || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="previousQualification" className="block text-sm font-medium text-gray-700">Previous Highest Qualification</label>
                          <input
                            type="text"
                            id="previousQualification"
                            name="previousQualification"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.previousQualification || ''}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'employment' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700">Employment Status</label>
                          <select
                            id="employmentStatus"
                            name="employmentStatus"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.employmentStatus || ''}
                          >
                            <option value="">Select Status</option>
                            <option value="employed">Employed</option>
                            <option value="selfEmployed">Self Employed</option>
                            <option value="unemployed">Unemployed</option>
                            <option value="student">Student</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label>
                          <input
                            type="text"
                            id="occupation"
                            name="occupation"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.occupation || ''}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="employer" className="block text-sm font-medium text-gray-700">Employer</label>
                        <input
                          type="text"
                          id="employer"
                          name="employer"
                          required
                          className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                          onChange={handleInputChange}
                          value={formData.employer || ''}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="employmentStartDate" className="block text-sm font-medium text-gray-700">Employment Start Date</label>
                          <input
                            type="date"
                            id="employmentStartDate"
                            name="employmentStartDate"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.employmentStartDate || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="employmentEndDate" className="block text-sm font-medium text-gray-700">Employment End Date</label>
                          <input
                            type="date"
                            id="employmentEndDate"
                            name="employmentEndDate"
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.employmentEndDate || ''}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'provider' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="providerName" className="block text-sm font-medium text-gray-700">Provider Name</label>
                          <input
                            type="text"
                            id="providerName"
                            name="providerName"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.providerContact || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="providerPhone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                          <input
                            type="tel"
                            id="providerPhone"
                            name="providerPhone"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.providerPhone || ''}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="providerAddress" className="block text-sm font-medium text-gray-700">Provider Address</label>
                        <textarea
                          id="providerAddress"
                          name="providerAddress"
                          rows={3}
                          required
                          className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                          onChange={handleInputChange}
                          value={formData.providerAddress || ''}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="providerContact" className="block text-sm font-medium text-gray-700">Contact Person</label>
                          <input
                            type="text"
                            id="providerContact"
                            name="providerContact"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.providerContact || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="providerAccreditation" className="block text-sm font-medium text-gray-700">Accreditation Number</label>
                          <input
                            type="text"
                            id="providerAccreditation"
                            name="providerAccreditation"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.providerPhone || ''}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'learner' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                          <select
                            id="title"
                            name="title"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.title || ''}
                          >
                            <option value="">Select Title</option>
                            {titles.map(title => (
                              <option key={title} value={title}>{title}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.firstName || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
                          <input
                            type="text"
                            id="surname"
                            name="surname"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.surname || ''}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">ID Number</label>
                        <input
                          type="text"
                          id="idNumber"
                          name="idNumber"
                          required
                          className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                          onChange={handleInputChange}
                          value={formData.idNumber || ''}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="homeAddress" className="block text-sm font-medium text-gray-700">Home Address</label>
                          <textarea
                            id="homeAddress"
                            name="homeAddress"
                            rows={3}
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.homeAddress || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="postalAddress" className="block text-sm font-medium text-gray-700">Postal Address</label>
                          <textarea
                            id="postalAddress"
                            name="postalAddress"
                            rows={3}
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.postalAddress || ''}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.email || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.phone || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="cell" className="block text-sm font-medium text-gray-700">Cell Number</label>
                          <input
                            type="tel"
                            id="cell"
                            name="cell"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.cell || ''}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'guardian' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="guardianTitle" className="block text-sm font-medium text-gray-700">Title</label>
                          <select
                            id="guardianTitle"
                            name="guardianTitle"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.guardianTitle || ''}
                          >
                            <option value="">Select Title</option>
                            {titles.map(title => (
                              <option key={title} value={title}>{title}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="guardianFirstName" className="block text-sm font-medium text-gray-700">First Name</label>
                          <input
                            type="text"
                            id="guardianFirstName"
                            name="guardianFirstName"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.guardianFirstName || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="guardianSurname" className="block text-sm font-medium text-gray-700">Surname</label>
                          <input
                            type="text"
                            id="guardianSurname"
                            name="guardianSurname"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.guardianSurname || ''}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="guardianHomeAddress" className="block text-sm font-medium text-gray-700">Home Address</label>
                          <textarea
                            id="guardianHomeAddress"
                            name="guardianHomeAddress"
                            rows={3}
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.guardianHomeAddress || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="guardianPostalAddress" className="block text-sm font-medium text-gray-700">Postal Address</label>
                          <textarea
                            id="guardianPostalAddress"
                            name="guardianPostalAddress"
                            rows={3}
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.guardianPostalAddress || ''}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="guardianEmail" className="block text-sm font-medium text-gray-700">Email Address</label>
                          <input
                            type="email"
                            id="guardianEmail"
                            name="guardianEmail"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.guardianEmail || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="guardianPhone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                          <input
                            type="tel"
                            id="guardianPhone"
                            name="guardianPhone"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.guardianPhone || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="guardianCell" className="block text-sm font-medium text-gray-700">Cell Number</label>
                          <input
                            type="tel"
                            id="guardianCell"
                            name="guardianCell"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                            onChange={handleInputChange}
                            value={formData.guardianCell || ''}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Form Actions */}
                  <div className="mt-8">
                    {!isSubmitted && (
                      <div className="flex justify-between items-center">
                        {activeTab !== tabs[0].id && (
                          <button
                            type="button"
                            onClick={() => handleTabChange(tabs[tabs.findIndex(t => t.id === activeTab) - 1].id)}
                            className="px-6 py-3 rounded-lg text-[#1A2B4C] border-2 border-[#1A2B4C] hover:bg-gray-50 transition-colors"
                          >
                            Previous Step
                          </button>
                        )}
                        {activeTab === 'guardian' ? (
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-8 py-3 rounded-lg text-lg font-semibold transition-colors ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1A2B4C] hover:bg-[#3399FF]'} text-white ml-auto`}
                          >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleTabChange(tabs[tabs.findIndex(t => t.id === activeTab) + 1].id)}
                            className="px-8 py-3 rounded-lg text-lg font-semibold bg-[#1A2B4C] hover:bg-[#3399FF] text-white transition-colors ml-auto"
                          >
                            Next Step
                          </button>
                        )}
                      </div>
                    )}

                    {/* Success Message */}
                    {isSubmitted && (
                      <div className="text-center space-y-4 mt-8 bg-green-50 p-8 rounded-lg border border-green-100">
                        <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                        <p className="text-xl font-semibold text-[#1A2B4C]">Application Submitted Successfully!</p>
                        <p className="text-gray-600">Thank you for your application. We will review your details and contact you shortly with further instructions.</p>
                        <button
                          type="button"
                          onClick={() => window.location.href = '/'}
                          className="mt-4 px-6 py-3 rounded-lg text-[#1A2B4C] border-2 border-[#1A2B4C] hover:bg-gray-50 transition-colors"
                        >
                          Return to Homepage
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
