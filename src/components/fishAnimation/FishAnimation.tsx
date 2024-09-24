import { useState, useEffect } from 'react';
import Lottie  from 'lottie-react';
import "./fishAnimation.css"

const FishAnimation = ({url}: {url: string}) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the Lottie JSON from the provided URL
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(
          url
        );
        const json = await response.json();
        setAnimationData(json);
      } catch (error) {
        console.error('Error fetching the Lottie animation:', error);
      }
    };

    fetchAnimationData();
  }, []);

  return (
    <div className='fish-animation'>
      {animationData ? (
        <Lottie animationData={animationData} loop={true} autoplay={true} />
      ) : (
        <p>Loading animation...</p>
      )}
    </div>
  );
};

export default FishAnimation;
