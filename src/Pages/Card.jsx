

const Card = ({card}) => {
    const {name, img, price, short_details} = card;
    return (
        <div className="card  shadow-xl text-left bg-sky-100 ">
  <figure><img className="w-full h-64" src={img} alt="img" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{name}</h2>
    <p className="text-sm font-medium">{short_details}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-blue-600 hover:bg-blue-600 text-white w-full uppercase font-bold">Details</button>
    </div>
  </div>
</div>
    );
};

export default Card;