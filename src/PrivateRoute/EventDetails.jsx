import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const Events = useLoaderData();
  const idInt = parseInt(id);
  const event = Events.find((event) => event.id === idInt);

  return (
    <div className="text-center pt-4 lg:pt-16 w-10/12 mx-auto">
      <h2 className="text-5xl  font-extrabold">
        Event <span className="text-blue-700">Details</span>{" "}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-4 mt-10 gap-10">
        {/* 1 */}
        <div className="lg:col-span-3">
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-auto "
                src={event.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{event.name}</h2>
              <p className="text-xl font-medium text-left">{event.details}</p>
              <div className="card-actions justify-center mt-10">
                <button className="btn btn-primary w-full lowercase"> Only for {event.price} $</button>
              </div>
            </div>
          </div>
        </div>
           {/* 2 */}
        <div className="lg:col-span-1 space-y-4 h-max  p-4 rounded-lg bg-blue-100">
            <div>
               <h1 className="bg-red-500 text-white px-4 py-3 rounded-lg text-xl font-bold">Book This Event</h1>
            </div>
            <div className="space-y-4">
            <input className="border w-full px-4 py-2 border-indigo-500/75 rounded-lg " type="text" placeholder="YOUR FULL NAME " name="" id="" />
            <input className="border w-full px-4 py-2 border-indigo-500/75 rounded-lg " type="text" placeholder="YOUR EMAIL" name="" id="" />
            <input className="border w-full px-4 py-2 border-indigo-500/75 rounded-lg " type="text" placeholder="PHONE" name="" id="" />
            <button className="btn w-full bg-blue-600 hover:bg-blue-500 font-bold text-xl text-white">Submit</button>
            </div>
            


        </div>
      </div>
    </div>
  );
};

export default EventDetails;
