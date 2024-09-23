import React, { useRef, useEffect } from 'react';
import "./CompanyHead.css";
import WhenToContactWho from '../WhenToContactWhom/WhenToContactWho';
import PositiveMessage from '../positiveMessage/PositiveMessage';

interface Employee {
  name: string;
  position: string;
  image: string;
  details: string;
}

const employees: Employee[] = [
  {
    name: 'Dev Bahadur Basnet',
    position: 'CEO',
    image: 'https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/439227134_1213330786746120_6976123446971841480_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHV2Jp-VifBtvQ4LuyirXJLoxvyT907zGyjG_JP3TvMbHVAtVDTaZ3yww4L4ne1P__AYXxzg3XEgdLqlw1vMhgP&_nc_ohc=PpFC0ATOS-QQ7kNvgFXEICz&_nc_ht=scontent.fktm7-1.fna&_nc_gid=Ajs6frqyIW9yqqIkPQYf9kR&oh=00_AYByIV3Yzo2CnJZ4wxe4nzO10bRET2MWF-wGIoWinznLTw&oe=66F6FB69',
    details: 'Dev Bahadur Basnet leads the company with a vision for sustainable aquaculture.',
  },
  {
    name: 'Khagendra Adhikari',
    position: 'Operations Manager',
    image: 'https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/331419681_578746817238966_411909836266333695_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGO67ChJSYSXvsI402_O1qVW6LDOV21ze1bosM5XbXN7TSNiFaf024B0UdPgF3gC4g_wMK5YBzVMlkf_rnmd6II&_nc_ohc=08UxuXsoasYQ7kNvgGevacP&_nc_ht=scontent.fktm10-1.fna&_nc_gid=Aoqb_5a6YPjB2_m4l9_s5MH&oh=00_AYC5AMffn3Je6HH0TAFcdkzVv_6Aqxk_QZUQ-DrdDN240A&oe=66F6DBBA',
    details: 'Khagendra Adhikari ensures smooth operations and quality control.',
  },
  {
    name: 'Subash Basnet',
    position: 'Aquaculture Specialist',
    image: 'https://scontent.fktm7-1.fna.fbcdn.net/v/t1.6435-9/80352536_1376010309419855_8068342957436043264_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=c7cdda&_nc_eui2=AeEXJlMJ5BUcbodGKa-anIhRiSmHiE-3R3qJKYeIT7dHeml0LPp6nq5LT_OZx6jiagFqRlCkyzIGtyWSBsyMVaFi&_nc_ohc=BWNotosq1DgQ7kNvgHt1IfQ&_nc_ht=scontent.fktm7-1.fna&oh=00_AYCQR3RvMzzMOWylhCeVbEqj1m0J4h8RXrY177twY3UmoQ&oe=6718989D',
    details: 'Subash Basnet specializes in fish health and environmental practices.',
  },
  // Add more employees as needed
];

const CompanyHead: React.FC = () => {


  return (
    <section className="bg-[#092420] py-12 text-cyan-50 all-worker">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6">Meet Our Team</h1>
        <p className="text-lg text-center mb-8">
          Our dedicated team is committed to sustainable fish farming and delivering high-quality products.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {employees.map((employee, index) => (
            <div
              key={index}
              className="employee-card relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={employee.image}
                alt={employee.name}
                className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-xl font-semibold text-white">{employee.name}</h2>
                <p className="text-sm text-white">{employee.position}</p>
                <p className="text-xs text-white mt-2">{employee.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WhenToContactWho/>
      <PositiveMessage/>

    </section>
  );
};

export default CompanyHead;
