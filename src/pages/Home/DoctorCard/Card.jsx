import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { IoLocationOutline } from "react-icons/io5";
import { AiFillCalendar, AiFillDollarCircle } from "react-icons/ai"
import { Link } from "react-router-dom";


const Card = ({ cards }) => {
    return (
        
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title font-semibold">{cards.name}</h2>
                    <p className="font-bold text-sm">BTP - {cards.BTP}</p>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={cards.rating}
                        readOnly
                    />
                    <div className="font-medium text-gray-400">
                  <div className="flex">
                    <div><IoLocationOutline className="text-2xl mr-3"></IoLocationOutline></div>
                    <div>  <h4>{cards.location}</h4></div>
                  </div>
                   <div className="flex">
                    <div><AiFillCalendar className="text-2xl mr-3"></AiFillCalendar></div>
                    <div> <h6>{cards.appointment}</h6></div>
                   </div>
                   <div className="flex">
                    <div><AiFillDollarCircle className="text-2xl mr-3"></AiFillDollarCircle></div>
                    <div> <h5>{cards.prement}</h5></div>
                   </div>
                    </div>
                 <Link to={"/about"}>
                 <button className="btn btn-outline border-orange-400 hover:bg-orange-600 btn-block rounded-3xl">{cards.button}</button>
                 </Link>
                    
                </div>
            </div>

        </div>
    );
};

export default Card;