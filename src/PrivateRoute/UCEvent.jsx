import React from 'react';
import { Link } from 'react-router-dom';

const UCEvent = ({event}) => {
    
    const {name, img, price, short_details, id} = event;
    return (
        <div>
            <div className="card card-compact h-full   bg-base-100 shadow-xl">
  <figure><img className="h-60 pt-4"  src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{short_details}</p>
    <div className="card-actions ">
    <button className="btn btn-primary">Price {price} $</button>
    <Link to={`/eventDetails/${id}`} ><button className="btn btn-primary">Book Now</button></Link>
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default UCEvent;