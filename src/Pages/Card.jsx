import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Card = ({card}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
    });
  }, []);
    const {name, img, price, short_details, id} = card;
    return (
        <div data-aos="flip-left" className="card h-full  shadow-xl text-left bg-sky-100 ">
  <figure><img className="w-full h-64" src={img} alt="img" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{name}</h2>
    <p className="text-sm font-medium">{short_details}</p>
    <div className="card-actions justify-end">
    <Link className="w-full" to={`/eventDetails/${id}`} >
      <button 
      className="btn bg-blue-600 hover:bg-blue-600 text-white w-full 
      uppercase font-bold">Explore More </button> </Link>
    </div>
  </div>
</div>
    );
};

export default Card;