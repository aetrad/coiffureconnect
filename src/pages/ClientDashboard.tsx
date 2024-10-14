import React, { useState } from 'react';

interface Appointment {
  id: number;
  date: string;
  time: string;
  hairdresser: string;
  service: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

const ClientDashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, date: '2024-03-15', time: '14:00', hairdresser: 'Marie Dupont', service: 'Coupe et brushing', status: 'confirmed' },
    { id: 2, date: '2024-03-20', time: '10:30', hairdresser: 'Jean Martin', service: 'Coloration', status: 'pending' },
  ]);

  const cancelAppointment = (id: number) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: 'cancelled' as const } : app
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tableau de bord client</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Mes rendez-vous</h2>
        </div>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id} className="px-6 py-4 border-b border-gray-200 last:border-b-0">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{appointment.service}</p>
                  <p className="text-sm text-gray-600">
                    {appointment.date} à {appointment.time} avec {appointment.hairdresser}
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
                  {appointment.status !== 'cancelled' && (
                    <button
                      onClick={() => cancelAppointment(appointment.id)}
                      className="ml-4 text-red-600 hover:text-red-800"
                    >
                      Annuler
                    </button>
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

export default ClientDashboard;