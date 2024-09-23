import "./ourGallary.css"

const images = [
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqjkYy5-o9iJ92_uav_39hFdc6B_e03VqJA&s', alt: 'Fish 1 in the pond' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqjkYy5-o9iJ92_uav_39hFdc6B_e03VqJA&s', alt: 'Fish 2 in the pond' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqjkYy5-o9iJ92_uav_39hFdc6B_e03VqJA&s', alt: 'Fish 2 in the pond' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqjkYy5-o9iJ92_uav_39hFdc6B_e03VqJA&s', alt: 'Fish 2 in the pond' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqjkYy5-o9iJ92_uav_39hFdc6B_e03VqJA&s', alt: 'Fish 2 in the pond' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqjkYy5-o9iJ92_uav_39hFdc6B_e03VqJA&s', alt: 'Fish 2 in the pond' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqjkYy5-o9iJ92_uav_39hFdc6B_e03VqJA&s', alt: 'Fish 2 in the pond' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqjkYy5-o9iJ92_uav_39hFdc6B_e03VqJA&s', alt: 'Fish 2 in the pond' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqjkYy5-o9iJ92_uav_39hFdc6B_e03VqJA&s', alt: 'Fish 2 in the pond' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqjkYy5-o9iJ92_uav_39hFdc6B_e03VqJA&s', alt: 'Fish 2 in the pond' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqjkYy5-o9iJ92_uav_39hFdc6B_e03VqJA&s', alt: 'Fish 2 in the pond' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqjkYy5-o9iJ92_uav_39hFdc6B_e03VqJA&s', alt: 'Fish 2 in the pond' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqjkYy5-o9iJ92_uav_39hFdc6B_e03VqJA&s', alt: 'Fish 2 in the pond' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQqjkYy5-o9iJ92_uav_39hFdc6B_e03VqJA&s', alt: 'Fish 2 in the pond' },

];

const OurGallary = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-white mb-6">Some Memories of the Pond</h1>
      <div className="all-images-and-videos">
        {images.map((image, index) => (
          <div key={index} className="img-parent-div">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGallary;
