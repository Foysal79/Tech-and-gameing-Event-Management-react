import React from 'react';

const Teams = () => {
    return (
        <div className='w-10/12 space-y-4 mx-auto'>
            <h1 className=' py-8 lg:text-5xl font-extrabold text-center'>Our <span className='text-blue-700'>Team</span></h1>
            <div className="card lg:w-5/12 mx-auto bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/PxGTPk4/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-we.jpg" alt="Shoes" className="rounded-xl" />
    </figure>
   <div className="card-body items-center text-center">
    <h2 className="card-title font-bold ">Foysal Nur Ontor</h2>
    <p>Director, VP, or Head of Events <br />
    (CEO and Founder)</p>
     <div className="card-actions">
      <button className="btn btn-primary">massage</button>
      <button className="btn btn-primary">About</button>
    </div>
    </div>
    </div>
             

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {/* 1 */}
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/qBqJ518/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold ">Akbor Ali</h2>
    <p>Event / Marketing Coordinator</p>
    <div className="card-actions">
      <button className="btn btn-primary">massage</button>
      
    </div>
  </div>
</div>

{/* 2 */}

<div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/WvDz2Y3/expressive-woman-posing-outdoor.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold ">Miftahul Zannat</h2>
    <p>Marketing Lead </p>
    <div className="card-actions">
      <button className="btn btn-primary">massage</button>
    </div>
  </div>
</div>
{/* 3 */}

<div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/1v9BkDP/fpdl-in-cheerful-curly-business-girl-wearing-glasses-176420-206-normal.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold ">Tanisha</h2>
    <p>Designer / Experiential Designer</p>
    <div className="card-actions">
      <button className="btn btn-primary">massage</button>
    </div>
  </div>
</div>


            
        </div>
        </div>
    );
};

export default Teams;