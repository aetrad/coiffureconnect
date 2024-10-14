import React, { useState } from 'react';

interface TimeSlot {
  id: number;
  time: string;
  available: boolean;
}

interface Service {
  id: number;
  name: string;
  duration: number;
  price: number;
}

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const services: Service[] = [
    { id: 1, name: 'Coupe homme', duration: 30, price: 25 },
    { id: 2, name: 'Coupe femme', duration: 45, price: 35 },
    { id: 3, name: 'Coloration', duration: 90, price: 70 },
    { id: 4, name: 'Brushing', duration: 30, price: 20 },
  ];

  const timeSlots: TimeSlot[] = [
    { id: 1, time: '09:00', available: true },
    { id: 2, time: '10:00', available: true },
    { id: 3, time: '11:00', available: false },
    { id: 4, time: '14:00', available: true },
    { id: 5, time: '15:00', available: true },
    { id: 6, time: '16:00', available: true },
  ];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleServiceChange = (serviceId: number) => {
    setSelectedService(serviceId);
  };

  const handleTimeChange = (timeId: number) => {
    setSelectedTime(timeId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { selectedDate, selectedService, selectedTime });
    alert('Réservation effectuée avec succès !');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Réserver un rendez-vous</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service
          </label>
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => handleServiceChange(service.id)}
                className={`p-4 border rounded-md text-left ${
                  selectedService === service.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-300'
                }`}
              >
                <h3 className="font-semibold">{service.name}</h3>
                <p className="text-sm text-gray-500">{service.duration} min</p>
                <p className="text-sm font-medium">{service.price} €</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Heure
          </label>
          <div className="grid grid-cols-3 gap-4">
            {timeSlots.map((slot) => (
              <button
                key={slot.id}
                type="button"
                onClick={() => handleTimeChange(slot.id)}
                disabled={!slot.available}
                className={`py-2 px-4 border rounded-md ${
                  selectedTime === slot.id
                    ? 'border-blue-500 bg-blue-50'
                    : slot.available
                    ? 'border-gray-300 hover:border-blue-300'
                    : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out"
        >
          Confirmer la réservation
        </button>
      </form>
    </div>
  );
};

export default Booking;