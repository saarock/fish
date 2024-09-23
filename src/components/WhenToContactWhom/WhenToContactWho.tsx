import React from 'react';

interface ContactInfo {
  name: string;
  role: string;
  image: string;
  details: string;
  email: string;
  phone: string;
}

const contacts: ContactInfo[] = [
  {
    name: 'Aayush Basnet',
    role: 'CEO',
    image: 'https://via.placeholder.com/150',
    details: 'For business inquiries and strategic partnerships, contact our CEO.',
    email: 'aayush@example.com',
    phone: '+1234567890',
  },
  {
    name: 'John Doe',
    role: 'Operations Manager',
    image: 'https://via.placeholder.com/150',
    details: 'For operational concerns and logistics, reach out to our Operations Manager.',
    email: 'john@example.com',
    phone: '+1234567891',
  },
  {
    name: 'Jane Smith',
    role: 'Aquaculture Specialist',
    image: 'https://via.placeholder.com/150',
    details: 'For questions about fish health and breeding, contact our Aquaculture Specialist.',
    email: 'jane@example.com',
    phone: '+1234567892',
  },
  {
    name: 'Emily Johnson',
    role: 'Customer Support',
    image: 'https://via.placeholder.com/150',
    details: 'For customer service inquiries and support, please contact our Customer Support.',
    email: 'emily@example.com',
    phone: '+1234567893',
  },
];

const WhenToContactWho: React.FC = () => {
  return (
    <div className="text-cyan-50 py-12 mt-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6">When to Contact Who</h1>
        <p className="text-lg text-center mb-8">
          Know who to contact for specific queries in our fish farming business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-[#0b2f2a] p-6 rounded-lg shadow-lg text-cyan-50">
              <img
                src={contact.image}
                alt={contact.name}
                className="mb-4 rounded-full w-32 h-32 object-cover mx-auto"
              />
              <h2 className="text-2xl font-semibold text-center mb-2">{contact.name}</h2>
              <p className="text-center italic mb-2">{contact.role}</p>
              <p className="text-center">{contact.details}</p>
              <p className="text-center mt-2">Email: <a href={`mailto:${contact.email}`} className="text-cyan-300">{contact.email}</a></p>
              <p className="text-center">Phone: <span className="text-cyan-300">{contact.phone}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhenToContactWho;
