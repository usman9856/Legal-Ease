import React from 'react';
import { useNavigate } from 'react-router-dom';
import defaultImage from '../../Assets/Icon/image.png';

function Card({ advocateName, price, description, datePosted, location, imageUrl, tags, rating }) {
  const navigate = useNavigate();

  const handleChoose = () => {
    navigate('/AdvocateDetail', {
      state: {
        advocateName,
        price,
        description,
        datePosted,
        location,
        imageUrl,
        tags,
        rating
      }
    });
    console.log(advocateName, price, description, datePosted, location, imageUrl, tags, rating)
  };



  const renderStars = () => {
    console.log('Rating:', rating);
    const totalStars = 5;
    const filledStars = Math.round(rating);
    const emptyStars = totalStars - filledStars;

    console.log('Filled stars:', filledStars);
    console.log('Empty stars:', emptyStars);

    return (
      <>
        {[...Array(filledStars)].map((_, index) => (
          <span key={index} className="text-yellow-500 bg-transparent">★</span>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={index} className="text-gray-500 bg-transparent">★</span>
        ))}
      </>
    );
  };

  console.log('Rendering Card with rating:', rating);

  return (
    <div className="card my-5 overflow-y-auto" onClick={handleChoose}>
      <div className="card-container flex flex-col sm:flex-row">
        <div className="card-image-container flex justify-center items-center h-32 w-32 bg-white">
          <img src={imageUrl ? imageUrl : defaultImage} alt={advocateName} className="card-image w-6 h-6 bg-transparent" />
        </div>
        <div className="card-content border-l border-gray-500 hover:border-gray-300 flex-1 ml-0 sm:ml-4 mt-4 sm:mt-0">
          <p className="card-title">{advocateName}</p>
          {/* <p className="small-desc">{price}/hr</p> */}
          <p className="small-desc">{description}</p>
          <br />
          <div className="tags-container">
            {tags.map((tag, index) => (
              <span key={index} className="bg-[#FAF9F6] border-2 rounded-3xl py-1 px-2 m-1 cursor-pointer">{tag}</span>
            ))}
          </div>
          <br />
          <div className="flex items-end justify-between">
            <div className="flex">
              <p className="small-desc mr-2">{datePosted}</p>
              <p className="small-desc">{location}</p>
            </div>
            <div className="flex">
              {rating && renderStars()}
            </div>
          </div>
        </div>
      </div>
      <div className="go-corner hidden sm:block">
        <div className="go-arrow">→</div>
      </div>
    </div>
  );
  


};

export default Card;
