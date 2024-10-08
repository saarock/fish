import React from 'react';
import "./CompanyHead.css";
import WhenToContactWho from '../WhenToContactWhom/WhenToContactWho';
import HeaderContent from '../headerContent/HeaderContent';



interface Employee {
  name: string;
  position: string;
  image: string;
  details: string;
}

const employees: Employee[] = [
  {
    name: 'Subash Basnet',
    position: 'Aquaculture Specialist',
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/455675766_354491721063959_2539462229640721232_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Lk6iYdt402gQ7kNvgGNAds9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=AvFvsmVThWSbJmqu0kVN7kN&oh=03_Q7cD1QGUbR_tzFq6OkuCh-AtJQje43pWXslVmzWXJrNSms8ZDA&oe=6718C3C5',
    details: 'Subash Basnet specializes in fish health and environmental practices.',
  },
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
  // Add more employees as needed
];

const CompanyHead: React.FC = () => {
  return (
    <section className="bg-[#092420] py-12 text-cyan-50 all-worker">
      <div className="container mx-auto px-6">
     
        <HeaderContent heading="Meet Our Team" content='Our dedicated team is committed to sustainable fish farming and delivering high-quality products.'/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {employees.map((employee, index) => (
            <div
              key={index}
              className="employee-card relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={employee.image}
                alt={employee.name}
                className="w-full h-56 sm:h-72 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                <h2 className="text-lg font-semibold text-white">{employee.name}</h2>
                <p className="text-sm text-white">{employee.position}</p>
                <p className="text-xs text-white text-center mt-2">{employee.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WhenToContactWho />
      {/* <PositiveMessage /> */}
    </section>
  );
};

export default CompanyHead;
