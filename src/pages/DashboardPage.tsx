import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Brain, Activity, AlertTriangle, Users } from 'lucide-react';

const data = [
  { time: '00:00', value: 3 },
  { time: '04:00', value: 2 },
  { time: '08:00', value: 4 },
  { time: '12:00', value: 3 },
  { time: '16:00', value: 5 },
  { time: '20:00', value: 2 },
  { time: '24:00', value: 3 },
];

const patients = [
  { id: 1, name: 'Muhammad Sufyan', status: 'Stable', lastReading: '2 mins ago' },
  { id: 2, name: 'Waqar Ali Mugal', status: 'Warning', lastReading: '5 mins ago' },
  { id: 3, name: 'Muhammad Masood', status: 'Critical', lastReading: '1 min ago' },
];

export default function DashboardPage() {
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Patients</p>
              <h3 className="text-2xl font-bold">1,234</h3>
            </div>
            <Users className="h-8 w-8 text-indigo-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Active Monitoring</p>
              <h3 className="text-2xl font-bold">56</h3>
            </div>
            <Activity className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Alerts Today</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
            <AlertTriangle className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Analysis Complete</p>
              <h3 className="text-2xl font-bold">89%</h3>
            </div>
            <Brain className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">EEG Activity Monitor</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Active Patients</h3>
            <div className="space-y-4">
              {patients.map(patient => (
                <div
                  key={patient.id}
                  className={`p-4 rounded-lg cursor-pointer transition ${
                    selectedPatient.id === patient.id
                      ? 'bg-indigo-50 border-2 border-indigo-500'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedPatient(patient)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{patient.name}</h4>
                      <p className="text-sm text-gray-500">Last reading: {patient.lastReading}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        patient.status === 'Stable'
                          ? 'bg-green-100 text-green-800'
                          : patient.status === 'Warning'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {patient.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}