

const fisDetails = [
    {
        name: "Fish Name 1",
        description: "Description for Fish 1. This fish is known for its vibrant colors and unique patterns.",
        image: "/path/to/fish1.jpg"
    },
    {
        name: "Fish Name 2",
        description: "Description for Fish 2. This species is popular in aquariums and is very easy to care for.",
        image: "/path/to/fish2.jpg"
    },
    {
        name: "Fish Name 3",
        description: "Description for Fish 3. This fish thrives in warm waters and has a fascinating behavior.",
        image: "/path/to/fish3.jpg"
    },
    // Add more fish details as needed
];

const FishDetails = () => {
    return (
        <div className="container mx-auto py-8">
            {fisDetails.map((fish, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center my-6`}>
                    {/* Image */}
                    <img src={fish.image} alt={fish.name} className="w-1/2 rounded-lg shadow-lg" />

                    {/* Content */}
                    <div className="w-1/2 px-4">
                        <h2 className="text-3xl font-bold mb-2">{fish.name}</h2>
                        <p className="text-lg text-gray-700">{fish.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FishDetails;
