// Define the Ratings functional component
export const Ratings = ({ rating }) => {
    // Create an array of 5 elements and set true for filled stars and false for empty stars
    let arrayRatings = Array(5).fill(false);
    for (let i = 0; i < rating; i++) {
      arrayRatings[i] = true;
    }
  
    // Return the JSX structure of the Ratings component
    return (
      <>
        {arrayRatings.map((value, index) => {
          return (
            value ? 
            <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i> :
            <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
          )
        })}
      </>
    )
  }
  