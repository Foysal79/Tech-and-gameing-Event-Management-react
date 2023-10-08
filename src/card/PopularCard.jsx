import React from "react";

const PopularCard = ({items}) => {
    const {name, img, short_details} = items;
    
  return (
    <div>
      <div className="card h-full  bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-56"
            src={img}
            alt="img coming soon"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="text-sm font-semibold text-left">
            {short_details}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
