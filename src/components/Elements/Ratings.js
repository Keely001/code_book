
export const Ratings = ({rating}) => {
    let arrayRatings = Array(5).fill(false);
    for(let i = 0; i < rating; i++){
        arrayRatings[i] = true;
    }
  return (
    <>
        {arrayRatings.map((value,index) => {
            return (value?
                <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>:
                <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
            )
        })}
    </>
  )
}
