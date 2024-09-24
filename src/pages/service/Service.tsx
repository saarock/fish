import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
interface FishType {
  name: string;
  image: string;
  description: string;
  available: boolean;
}

const fishTypes: FishType[] = [
  {
    name: "Common",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxMrLlffMAW8qSWn06xOIadE_MBK-pb_pFw&s",
    description: "Common is a popular freshwater fish known for its mild taste.",
    available: true,
  },
  {
    name: "Silver",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEhAQFRUVEhcREBUVEhIQFRUWGBMWFxYVFRUYICggGBolGxUXITEtJikrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGi0dHR8tKy0tLS0rLS0tLS0tLS03LS0tLSstLS4tLSsrNys3LS0tLS0rKysrKy0rKystKy0rLf/AABEIALMBGgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYCAwUBB//EAD8QAAIBAgQDBgMEBwcFAAAAAAABAgMRBBIhMQVBUQYTYXGBoSIykSNCseEUUnKCwdHwJDM0c7PS8QdDYmOS/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAAICAgMBAAAAAAAAAAAAAQIREiEDQRMxUYH/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGqtiYQ1nOMf2pKP4gbQcjEdp8DD5sVS8lLO+m0b8yJPtrgVdKpUk1e6jRq8t94rbmXjWblJ7WIFYfbbDu+WniGk0m8iss3y8+fI8fbGDajHDV223GzUY2kvutt2Ttr08di8L+J8mP6s56VGfbVq39jr2c8l24xSfWV9o8r7bWvdX3T7V1NbYOo7XbeeNlomtbWu000t2ONOeK0EfE42lSV5zjHzevotymYvjuOqT7vupU4uLknBSd0rfNU2i/C6epxZYlRleaea9nnvdPprt1OXkyyxnU21MpV2xvaNJfZQzdHK6XolqyZwXFVaqlKo4b2SjFpfVt3KxwbCSxTupxyL5mmn6JXuXXD0I04qEVojPjuV7yWtoAOoAAAAAAAAAAAAAAAAAAAAAABGxuPpUUnUmo32W7fklqwJJoxOLp0lepUhBdZSUfxPn3He2ddU6tWX9loxn3eayqVZN7JLrz02vz1ZxsDhJYiphcR30q9Ks388Un8kneT0ejWzQZuS5cX/6jYCg3FTlVntlppb9Ls40e3OJxWlCNKk76wnd1bLfR/wArG/jPC3GeHjSp02mpSkmrO6cbO66akrFcJi0pZYZo6qSSUovk789reUi43vtjLdcWvRx1bSpjMR+7Luk9dPhjZK+1vUjR7NQbbleT1s5vM73U46tXsno3uy2RhdRT0b/jbTz3NscK3l16P0sducjn8dv2r+H7P0k/kjba+ma0rPTxUtv1VsTVwiKV1G3WyVujjf8AV69WdSOGl/Xmeui0no9ur6j5KvxRjhsJCKist7XV3Ztxktb9X/M30cLS5qPyunJdYcl5amuEZa6bevqb4UL219vYxcq3MYyq4WlUi4zytTjlqK3zJbJ+C12JEcPSilFRVrqVraXVrS89Ea40JXis3W1rGnupOybk7t29Cba1EyUIO+61zPTx1fm+ZreFppWjdaNdbeKT5mhRfV7fgzXNyvrtfV9LkGNbgeHlb7KGmqskrJtOSWml2tbG6PCZJ/Z1a0FroqspLlb4ZXVl78zTOVvfmewxiXsXtNRkqeOhtXU1ZaTpQd7P4tY5d9LdLMxXGcZD+8w1KaS1dKq4t23tGa58vi1Nn6d6782Zx4i/1OnIfw1+VhT7V0E7VYV6L/8AZSdtr/NDMttd+R1sHjqNZZqVWnUXWE4zXscmeIoyupUlz5eN+hBr8Gwc25xh3c3rmg5U5J23UotO6Gou6toKm6WLh/c4ybtrarGNZW2tylv4kOpx3ikGoulhZ3dm4542stW1KWnPqTic14MZzUVdtJdW7FGfays24PSSdpRUUrfXU5+Jr1qreeU34Xdjj5PJMG52uuL7QYene0s76R19zgYztZXk8tKEI30V7zl9PyOLDDS2vv6sunZ/gcaEVOSTm/b8zGGeWd+tLYx4HQxcrVK9aSW6hlir/tJq8fLc7oB3QAAAAAAAAKb2s4dPv44nM3HKoRXJdY+r1LkY1IKSaaTT3TV0wlfN+0XBIY2k6MouSkk52koVFNfLUpt6XWzvyOjwDgkcPToU/uUIZYJtSk2/mqTa0zO7201ZYMTwNXcqcmv/ABev0e/1I0qUo6STXn/WprpntnG0nm8LLrYTo6O/NWsKdxVi5RdpWbW9lp5LYo8jDTXytz2PVGN1q0787LlY4kMHUpStGrOzd9Wp677vkTHKsla8JecfDwaJtE+lGV9/qbJXvHTRb2fW/wCRzKWMknrFLyb/AJE+niL2a8L+/wCY3FZyzNSSir5U9999PI2UlLVpR5OOrfny1jueQaXN/Lb33NtOaslfp126BXkYzVrzWkuS68jPu1s3L5s25jOcVfbfTmYOvHV3fXoFZVqaWtuq36ka3graXu3tyNtSvGz366+JpWJik7taaMJTvXtZf/PoeObfL26Eeti03+GtiNKvKT+FX9C9Mpsq1tbr2W5o/TdbaDD4OctZWR1sNw2O9vVmLnPTUxrlfpvNnkcVB82tvIs8aStZ2fojRW4bQn81Km/3Vf6mpkca4DnHTROze35EXiFOUoWu1ye70ennvY7Vbsxh3rDvKb3TjOW/k3YqXaXh+Lw6VpZo3dpWunfk1919CzKJZXK4VHPVqydr5nG/w8vLyLBJqMertpt/FFa4LUlSzXtd767vmdmliU5K/XTbb/k8O5c66elg7McOzN1pp2T+C/N9fQtBpwaShDLtlVvobj1SaQABQAAAAAAAAAAA8lFPRq56AIlXARe2nuiHWwU47K/lr7HXBdpqKy5ZXskZSqp/1YsFSjGW8U/NJkefDKT+615Nl3E1XFqVUrWXPnYkRrpf8WJr4THlKXswuFr9d/RE6TVQ5Si+mu5qTfK3qjpx4ZHnKXsjYuH0/F/vP+BdrpyKkW1vb29DS6V7/Fe6tZXf4HfjgaS+4vXX8TfGCWiSXkrE2cVY/RKutoSd1bVP662NlDglabvOUYK2iSzPTbTZFlAtOLhU+z2X/u5vOH5kynw+UdLx+jR0QZuMrSLSwltW7+yJQAkkAAFAwqU1JOMkmno09U0ZgCjdoezLpXq0U3D70fvR8U+a/D3XEwFSzs9uun8T6nYrnGOzUZN1aNoy3cdk/Lp/Wxyz8fuCTwLHppU2/wBn/ads+dwxE6TcZpxmvuvT6Fz4LxHvoa/NHfxXJm8buDogA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiY/h1KustSCl0ezXk1sc7h/AHQqKdOtLLs4yim3HpdW/A7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA10K0ZxjOLvGUVKL6pq6f0ZsIHAP8Lhf8in/AKcSeAAAAAAAAAAAAAjcRxLpUqlRJScYuSTmqadus3pFeIEkFYo9pJRk3OC7uc04TzOOSOTD3zJwWmato3q/A0w7UV9ZujSy5JzUFVaqaUqM4R1iknacnryi3y1C2gr1PtDNqMnQhGLnTg3+kKWs038OSLU1tbK3e/KzI8e1NSMY5qMJSy3koVXo/tLu2TSEe7tJ/dctnzC0g4HDONynPERmlaLUqTjJSjUXd03kouyz2lLd2fxx0syPU7UySjajTk3BSSjXctWpvT4NYpwSk+TklZgWcHJ4fxWpV71OhaUGrKNTPmTqTg3eSjazpyflbnoY8QxdSFSdqloQpOrV+zU2uUIx6ydpv0XVAdgFUxPFcbSjiM/cxdPDd7ncU6am4xyLSabk5d4rabRfPXLiPHMTCVXJ3fdrLkqNxdNKVnH483NKbd0rfBa+ZMC0gqVTtLUSk4zoy0p5k7U+6lKOeSlmlf5VbWyzyjHrbq8E4vLETrRcHFRacE/mjG7jaqt4zbTlZ/da8QOwAAAAAAAAAAAAAAACBwH/AAuF/wAin/pxJ4AAAAAAAAAAAADxgAAAAAAAHgA9QAAAAAEAB6AAAAAAAAAAAAAAAD//2Q==",
    description: "Catfish are bottom feeders with a unique flavor profile.",
    available: true,
  },
  {
    name: "Grass",
    image:
      "data:image/webp;base64,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",
    description: "Salmon is a nutritious fish rich in omega-3 fatty acids.",
    available: true,
  },

];

const Service: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    if (containerRef.current) {
      tl.fromTo(
        containerRef.current,
        { opacity: 0, scale: 1 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.2 }
      );
      tl.fromTo(
        ".fish-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.6 },
        "-=1"
      );
    }
  }, []);

  const filteredFishTypes = fishTypes.filter((fish) =>
    fish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={containerRef} className="py-12 mt-12 text-[#f5f5f5]  min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 relative">
          <h1 className="text-5xl font-bold">Dangerous Waters

            
          </h1>
          <p className="text-lg text-#0e2b27e0 mt-4">Explore our fish collection that lurks in the darkest depths.</p>
  
        </div>

        {/* Search Input */}
        <div className="mb-12 text-center">
          <input
            type="text"
            placeholder="Search for a fish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-3 rounded-lg border border-b-green-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-900 transition duration-300 w-full max-w-xs text-black"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFishTypes.map((fish, index) => (
            <div
              key={index}
              className="fish-card bg-[#0e2b27e0] p-6 rounded-lg shadow-xl hover:shadow-green-900 transition duration-300 hover:scale-105 transform text-[#f5f5f5]"
            >
              <img
                src={fish.image}
                alt={fish.name}
                className="mb-4 rounded w-full h-40 object-cover hover:opacity-90 transition duration-300"
              />
              <h2 className="text-3xl font-semibold text-center mb-2">
                {fish.name}
              </h2>
              <p className="text-center text-gray-400 mb-4">{fish.description}</p>
              <p className="text-center font-bold">
                Availability:{" "}
                <span
                  className={
                    fish.available ? "text-green-500" : "text-red-500"
                  }
                >
                  {fish.available ? "In Stock" : "Out of Stock"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
