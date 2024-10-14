import React, { useState } from 'react';

interface Appointment {
  id: number;
  date: string;
  time: string;
  client: string;
  service: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

const HairdresserDashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, date: '2024-03-15', time: '14:00', client: 'Sophie Martin', service: 'Coupe et brushing', status: 'confirmed' },
    { id: 2, date: '2024-03-15', time: '16:00', client: 'Lucas Dubois', service: 'Coupe homme', status: 'pending' },
    { id: 3, date: '2024-03-16', time: '10:00', client: 'Emma Leroy', service: 'Coloration', status: 'pending' },
  ]);

  const updateAppointmentStatus = (id: number, newStatus: 'confirmed' | 'cancelled') => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tableau de bord coiffeur</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Rendez-vous à venir</h2>
        </div>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id} className="px-6 py-4 border-b border-gray-200 last:border-b-0">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{appointment.service}</p>
                  <p className="text-sm text-gray-600">
                    {appointment.date} à {appointment.time} - {appointment.client}
                  </p>
                </div>
                <div className="flex items-center">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {appointment.status === 'confirmed' ? 'Confirmé' :
                     appointment.status === 'pending' ? 'En attente' : 'Annulé'}
                  </span>
                  {appointment.status === 'pending' && (
                    <div className="ml-4">
                      <button
                        onClick={() => updateAppointmentStatus(appointment.id, 'confirmed')}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded mr-2"
                      >
                        Accepter
                      </button>
                      <button
                        onClick={() => updateAppointmentStatus(appointment.id, 'cancelled')}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                      >
                        Refuser
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HairdresserDashboard;