import React from "react";

const RecentEvent = () => {
  return (
    <div className="text-center pt-4 lg:pt-16  ">
      <h1 className="text-5xl font-extrabold">
        WELCOM TO <span className="text-blue-700">EVENTO</span>{" "}
      </h1>
      <div className="grid lg:grid-cols-2 w-8/12 mx-auto mt-14 gap-8">


        <div>
          <div className="card  glass ">
            <figure>
              <img className="h-64 w-full"
                src="https://i.ibb.co/sj7yz45/colleagues-giving-fist-bump.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">ABOUT <span className="text-blue-700">US</span></h2>
              <p className="text-left text-sm font-medium text-gray-500" >Welcome to <span className="font-bold text-black">Evento</span> , your premier destination for top-notch event management in the thrilling realms of technology and gaming. We are the driving force behind some of the most electrifying and immersive gatherings that unite tech enthusiasts, gamers, developers, and industry leaders across the United States</p>
              <div className="card-actions justify-start mt-8">
                <button className="btn btn-primary">Explore More</button>
              </div>
            </div>
          </div>
        </div>





        <div>
          <div className="card  glass h-full">
            <figure>
              <img className="h-64 w-full"
                src="https://i.ibb.co/d5q4pTD/20231008111506-fpdl-in-targeting-with-marketing-business-concept-businesswoman-hand-holding-red-dart.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">OUR <span className="text-blue-700">MISSION</span> </h2>
              <p className="text-sm font-medium text-left text-gray-500">At <span className="font-bold text-black">Evento</span>, our mission is to inspire, connect, and elevate the world of technology and gaming through exceptional event management. We are driven by the belief that the convergence of technology and gaming isn t just a pastime; its a dynamic and transformative cultural movement.</p>
              <div className="card-actions justify-start mt-8 ">
                <button className="btn btn-primary">watch video</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEvent;
