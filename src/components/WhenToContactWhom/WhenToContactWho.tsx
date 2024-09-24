import React from "react";
import HeaderContent from "../headerContent/HeaderContent";

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
    name: "Aayush Basnet",
    role: "CEO",
    image:
      "https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/439227134_1213330786746120_6976123446971841480_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHV2Jp-VifBtvQ4LuyirXJLoxvyT907zGyjG_JP3TvMbHVAtVDTaZ3yww4L4ne1P__AYXxzg3XEgdLqlw1vMhgP&_nc_ohc=PpFC0ATOS-QQ7kNvgFXEICz&_nc_ht=scontent.fktm7-1.fna&_nc_gid=Ajs6frqyIW9yqqIkPQYf9kR&oh=00_AYByIV3Yzo2CnJZ4wxe4nzO10bRET2MWF-wGIoWinznLTw&oe=66F6FB69",
    details:
      "For business inquiries and strategic partnerships, contact our CEO.",
    email: "aayush@example.com",
    phone: "+1234567890",
  },
  {
    name: "John Doe",
    role: "Operations Manager",
    image:
      "https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/439227134_1213330786746120_6976123446971841480_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHV2Jp-VifBtvQ4LuyirXJLoxvyT907zGyjG_JP3TvMbHVAtVDTaZ3yww4L4ne1P__AYXxzg3XEgdLqlw1vMhgP&_nc_ohc=PpFC0ATOS-QQ7kNvgFXEICz&_nc_ht=scontent.fktm7-1.fna&_nc_gid=Ajs6frqyIW9yqqIkPQYf9kR&oh=00_AYByIV3Yzo2CnJZ4wxe4nzO10bRET2MWF-wGIoWinznLTw&oe=66F6FB69",
    details:
      "For operational concerns and logistics, reach out to our Operations Manager.",
    email: "john@example.com",
    phone: "+1234567891",
  },
  {
    name: "Jane Smith",
    role: "Aquaculture Specialist",
    image:
      "https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/439227134_1213330786746120_6976123446971841480_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHV2Jp-VifBtvQ4LuyirXJLoxvyT907zGyjG_JP3TvMbHVAtVDTaZ3yww4L4ne1P__AYXxzg3XEgdLqlw1vMhgP&_nc_ohc=PpFC0ATOS-QQ7kNvgFXEICz&_nc_ht=scontent.fktm7-1.fna&_nc_gid=Ajs6frqyIW9yqqIkPQYf9kR&oh=00_AYByIV3Yzo2CnJZ4wxe4nzO10bRET2MWF-wGIoWinznLTw&oe=66F6FB69",
    details:
      "For questions about fish health and breeding, contact our Aquaculture Specialist.",
    email: "jane@example.com",
    phone: "+1234567892",
  },
];

const WhenToContactWho: React.FC = () => {
  return (
    <div className="text-cyan-50 py-12 mt-12">
      <div className="container mx-auto px-6">
     

        <HeaderContent heading=" When to Contact Who" content="Know who to contact for specific queries in our fish farming business."/>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-[#092420] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={contact.image}
                alt={contact.name}
                className="mb-4 rounded-full w-32 h-32 object-cover mx-auto border-4 border-cyan-300"
              />
              <h2 className="text-2xl font-semibold text-center mb-2">
                {contact.name}
              </h2>
              <p className="text-center italic mb-2">{contact.role}</p>
              <p className="text-center mb-4">{contact.details}</p>
              <p className="text-center mt-2">
                Email:{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="text-cyan-300 underline hover:text-cyan-400"
                >
                  {contact.email}
                </a>
              </p>
              <p className="text-center">
                Phone: <span className="text-cyan-300">{contact.phone}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhenToContactWho;
