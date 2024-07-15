import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { IoLocationOutline } from "react-icons/io5";
import { AiFillCalendar, AiFillDollarCircle } from "react-icons/ai"
import { Link, useParams } from "react-router-dom";


const Card = ({ cards }) => {

  const {name,BTP,button,img,location,appointment,prement} = cards  

    const {category} = useParams();
    console.log(category)
    return (
        
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img}className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title font-semibold">{name}</h2>
                    <p className="font-bold text-sm">BTP - {BTP}</p>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={cards.rating}
                        readOnly
                    />
                    <div className="font-medium text-gray-400">
                  <div className="flex">
                    <div><IoLocationOutline className="text-2xl mr-3"></IoLocationOutline></div>
                    <div>  <h4>{location}</h4></div>
                  </div>
                   <div className="flex">
                    <div><AiFillCalendar className="text-2xl mr-3"></AiFillCalendar></div>
                    <div> <h6>{appointment}</h6></div>
                   </div>
                   <div className="flex">
                    <div><AiFillDollarCircle className="text-2xl mr-3"></AiFillDollarCircle></div>
                    <div> <h5>{prement}</h5></div>
                   </div>
                    </div>
                 <Link to={`/about/${name}`}>
                 <button className="btn btn-outline border-orange-400 hover:bg-orange-600 btn-block rounded-3xl">{button}</button>
                 </Link>
                    
                </div>
            </div>

        </div>
    );
};

export default Card;