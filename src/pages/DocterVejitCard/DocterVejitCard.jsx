import { Rating } from "@smastrom/react-rating";
import { AiFillCalendar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import {  useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";





const DocterVejitCard = ({ cards }) => {
    const { _id,name, img, BTP, rating,  appointment, prement, description } = cards;

    const {user} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

     

    const handleAddToCart = () =>{
       if(user && user.email){
                const cartItem = {
                    meunId :_id,
                    email: user.email,
                    name,
                    img,
                    prement
                }
                axiosSecure.post('/docters',cartItem)
                .then(res =>{
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                          }); 
                          refetch();
                    }
                })
       }
       else{
        Swal.fire({
            title: "you are not Logged In!",
            text: "Please login to add to the cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
          }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login',{state:{from:location}})
            }
          });

       }
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{BTP}</p>
                <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
                <div className="flex">
                    <div><IoLocationOutline className="text-2xl mr-3"></IoLocationOutline></div>
                    <div>  <h4>{cards?.location}</h4></div>
                </div>
                <div className="flex">
                    <div><AiFillCalendar className="text-2xl mr-3"></AiFillCalendar></div>
                    <div> <h6>{appointment}</h6></div>
                </div>
                <h2 className="font-medium">Description -{description}</h2>
                <h1 className="font-bold">Price = ${prement}</h1>
               

                <div className="card-actions">
                    <button 
                    onClick={handleAddToCart}
                    className="btn border-0 border-b-4 bg-orange-300 hover:bg-orange-600 text-white">
                        Booking
                        </button>
                </div>
            </div>
        </div>
    );
};

export default DocterVejitCard;